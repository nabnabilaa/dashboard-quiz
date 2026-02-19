import React, { useEffect, useState } from 'react';
import { BuilderData, ViewType, ActivityNode, ActivityBranch } from '../../data/visual';

interface DiagramCanvasProps {
    data: BuilderData;
    view: ViewType;
    templateName: string;
}

export default function DiagramCanvas({ data, view, templateName }: DiagramCanvasProps) {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        if (view === 'activity') {
            setSvgContent(drawActivity(data));
        } else {
            setSvgContent(drawUseCase(data, templateName));
        }
    }, [data, view, templateName]);

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-white rounded-xl border border-slate-200 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            <div
                className="w-full h-full flex items-center justify-center p-4"
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </div>
    );
}

// Helper functions (ported from original JS)
function drawUseCase(data: BuilderData, title: string) {
    const actors = data.actors;
    const usecases = data.usecases;
    const h = Math.max(400, Math.max(actors.length, usecases.length) * 100);

    let svg = `<svg width="100%" height="${h}" viewBox="0 0 600 ${h}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect x="180" y="20" width="380" height="${h - 40}" fill="#fff" stroke="#4F46E5" stroke-width="3" rx="15"/>`;
    svg += `<text x="200" y="50" font-weight="900" fill="#4F46E5" font-size="14">SISTEM ${title.toUpperCase()}</text>`;

    const aPositions: { x: number, y: number }[] = [];
    const uPositions: { x: number, y: number }[] = [];

    // Draw Actors
    actors.forEach((a, i) => {
        const y = (h / (actors.length + 1)) * (i + 1);
        aPositions.push({ x: 100, y: y });
        svg += `
            <g transform="translate(70, ${y - 40})">
                <circle cx="30" cy="20" r="12" fill="none" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="30" y1="32" x2="30" y2="55" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="15" y1="40" x2="45" y2="40" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="30" y1="55" x2="15" y2="75" stroke="#4F46E5" stroke-width="2.5"/>
                <line x1="30" y1="55" x2="45" y2="75" stroke="#4F46E5" stroke-width="2.5"/>
                <text x="30" y="95" text-anchor="middle" font-weight="700" font-size="11" fill="#1E293B">${a}</text>
            </g>
        `;
    });

    // Draw Use Cases
    usecases.forEach((u, i) => {
        const y = (h / (usecases.length + 1)) * (i + 1);
        uPositions.push({ x: 240, y: y });
        svg += `
            <g transform="translate(240, ${y - 25})">
                <ellipse cx="120" cy="25" rx="100" ry="25" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
                <text x="120" y="30" text-anchor="middle" font-weight="700" font-size="11" fill="#1E293B">${u}</text>
            </g>
        `;
    });

    // Draw Mappings (Actor -> Use Case)
    Object.keys(data.mappings).forEach(key => {
        const aIdx = parseInt(key);
        (data.mappings[aIdx] || []).forEach(uIdx => {
            const start = aPositions[aIdx];
            const end = uPositions[uIdx];
            if (start && end) {
                // Adjust connect points
                svg += `<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="#94A3B8" stroke-width="1.5"/>`;
            }
        });
    });

    // Draw Relations
    data.relations.forEach(rel => {
        const s = uPositions[rel.source];
        const t = uPositions[rel.target];
        if (s && t) {
            svg += `
                <g>
                    <line x1="${s.x + 200}" y1="${s.y}" x2="${t.x + 200}" y2="${t.y}" stroke="#4F46E5" stroke-width="1.5" stroke-dasharray="4"/>
                    <text x="${(s.x + t.x) / 2 + 210}" y="${(s.y + t.y) / 2}" font-size="9" fill="#4F46E5" font-weight="bold">&lt;&lt;${rel.type}&gt;&gt;</text>
                </g>
            `;
        }
    });

    svg += `</svg>`;
    return svg;
}

const SPACING_X = 50;
const SPACING_Y = 60;
const NODE_WIDTH = 150;
const NODE_HEIGHT = 45;

function drawActivity(data: BuilderData) {
    if (!data.activityNodes || data.activityNodes.length === 0) {
        return drawLegacyActivity(data);
    }

    const m = measureTree(data.activityNodes);
    const canvasW = Math.max(800, m.width + 100);
    const canvasH = Math.max(800, m.height + 100);

    let svg = `<svg width="100%" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">`;

    svg += `<defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4F46E5" />
        </marker>
    </defs>`;

    // Start drawing from center top
    svg += drawTreeRecursive(data.activityNodes, canvasW / 2, 50);

    svg += `</svg>`;
    return svg;
}

function measureTree(nodes: ActivityNode[]): { width: number, height: number } {
    let w = NODE_WIDTH;
    let h = 0;
    for (let node of nodes) {
        const size = measureNode(node);
        w = Math.max(w, size.width);
        h += size.height + SPACING_Y;
    }
    return { width: w, height: h };
}

function measureNode(node: ActivityNode): { width: number, height: number } {
    if (!node.branches || node.branches.length === 0) {
        return { width: NODE_WIDTH, height: NODE_HEIGHT };
    }

    let totalW = 0;
    let maxH = 0;
    node.branches.forEach(b => {
        const bSize = measureTree(b.nodes);
        totalW += bSize.width;
        maxH = Math.max(maxH, bSize.height);
    });

    totalW += (node.branches.length - 1) * SPACING_X;

    // Width cannot be smaller than the node itself
    return { width: Math.max(NODE_WIDTH, totalW), height: NODE_HEIGHT + SPACING_Y + maxH };
}

function drawTreeRecursive(nodes: ActivityNode[], x: number, y: number): string {
    let svg = '';
    let currentY = y;

    nodes.forEach((node, i) => {
        const isDecision = node.type === 'decision';
        const isForkJoin = node.type === 'fork' || node.type === 'join';

        // Draw connection from previous node (if not first)
        if (i > 0 && !(node as any).skipEntryLine) {
            let yEnd = currentY;
            if (isDecision) yEnd = currentY;
            if (isForkJoin) yEnd = currentY;

            // Correct source Y: The previous node ended exactly at currentY - SPACING_Y
            // (Assuming the previous iteration moved currentY correctly)
            svg += `<line x1="${x}" y1="${currentY - SPACING_Y}" x2="${x}" y2="${yEnd}" stroke="#4F46E5" stroke-width="2" marker-end="url(#arrowhead)"/>`;
        }

        // Draw the node itself
        svg += drawNodeShape(node, x, currentY);

        // If branches, draw them
        if (node.branches && node.branches.length > 0) {
            const branches = node.branches; // Local reference for TS
            let totalBranchW = 0;
            const branchSizes = branches.map(b => measureTree(b.nodes));
            totalBranchW = branchSizes.reduce((acc, s) => acc + s.width, 0) + (branches.length - 1) * SPACING_X;

            if (isDecision && totalBranchW < 200) totalBranchW = 200;

            let startX = x - (totalBranchW / 2);
            let maxBranchH = 0;

            const connStartY = currentY + (isDecision ? 30 : isForkJoin ? 8 : NODE_HEIGHT);

            // First pass: Draw branches
            branches.forEach((branch, bIdx) => {
                const bWidth = branchSizes[bIdx].width;
                const effectiveWidth = Math.max(bWidth, totalBranchW / branches.length);
                const bCenterX = startX + (effectiveWidth / 2);

                const bStartY = currentY + NODE_HEIGHT + SPACING_Y;

                // Elbow line
                svg += `<path d="M${x} ${connStartY} L${x} ${connStartY + 15} L${bCenterX} ${connStartY + 15} L${bCenterX} ${bStartY - 5}" fill="none" stroke="#4F46E5" stroke-width="2" marker-end="url(#arrowhead)" />`;

                // Label
                if (branch.label) {
                    const labelW = branch.label.length * 6 + 16;
                    svg += `<rect x="${bCenterX - (labelW / 2)}" y="${connStartY + 20}" width="${labelW}" height="18" rx="4" fill="white" stroke="#CBD5E1" stroke-width="1"/>`;
                    svg += `<text x="${bCenterX}" y="${connStartY + 32}" text-anchor="middle" font-size="9" fill="#64748B" font-weight="bold">${escapeXml(branch.label)}</text>`;
                }

                if (branch.nodes.length > 0) {
                    svg += drawTreeRecursive(branch.nodes, bCenterX, bStartY);
                } else {
                    svg += `<circle cx="${bCenterX}" cy="${bStartY + 10}" r="3" fill="#CBD5E1"/>`;
                }

                startX += effectiveWidth + (branches.length > 1 ? SPACING_X : 0);
                maxBranchH = Math.max(maxBranchH, branchSizes[bIdx].height);
            });

            // Calculate where the main flow resumes
            const nextNodeY = currentY + NODE_HEIGHT + SPACING_Y + maxBranchH;

            // Check if next node is Join/Merge
            const nextNode = nodes[i + 1];
            const isNextJoin = nextNode && (nextNode.type === 'join' || nextNode.type === 'fork');

            // MERGE LOGIC
            if (i < nodes.length - 1) {
                const mergeTargetY = nextNodeY;
                startX = x - (totalBranchW / 2); // Reset X

                if (isNextJoin) {
                    // SMART JOIN: Direct lines to the bar
                    (nextNode as any).customWidth = Math.max(100, totalBranchW + 40);
                    (nextNode as any).skipEntryLine = true;

                    branches.forEach((branch, bIdx) => {
                        const bWidth = branchSizes[bIdx].width;
                        const effectiveWidth = Math.max(bWidth, totalBranchW / branches.length);
                        const bCenterX = startX + (effectiveWidth / 2);

                        const bStartY = currentY + NODE_HEIGHT + SPACING_Y;
                        let branchBottomY = bStartY + 10;
                        if (branch.nodes.length > 0) {
                            branchBottomY = bStartY + branchSizes[bIdx].height - SPACING_Y + NODE_HEIGHT;
                        }

                        // Draw direct line to Join Bar
                        svg += `<line x1="${bCenterX}" y1="${branchBottomY}" x2="${bCenterX}" y2="${mergeTargetY}" stroke="#4F46E5" stroke-width="2" marker-end="url(#arrowhead)"/>`;

                        startX += effectiveWidth + (branches.length > 1 ? SPACING_X : 0);
                    });

                } else {
                    // STANDARD MERGE: Funnel to center
                    branches.forEach((branch, bIdx) => {
                        const bWidth = branchSizes[bIdx].width;
                        const effectiveWidth = Math.max(bWidth, totalBranchW / branches.length);
                        const bCenterX = startX + (effectiveWidth / 2);

                        const bStartY = currentY + NODE_HEIGHT + SPACING_Y;
                        let branchBottomY = bStartY + 10;
                        if (branch.nodes.length > 0) {
                            branchBottomY = bStartY + branchSizes[bIdx].height - SPACING_Y + NODE_HEIGHT;
                        }

                        // Solid merge line with round join
                        svg += `<path d="M${bCenterX} ${branchBottomY} L${bCenterX} ${mergeTargetY - 20} L${x} ${mergeTargetY - 20} L${x} ${mergeTargetY}" fill="none" stroke="#4F46E5" stroke-width="2" stroke-linejoin="round" />`;

                        startX += effectiveWidth + (branches.length > 1 ? SPACING_X : 0);
                    });
                    // Arrow at single merge point
                    svg += `<path d="M${x} ${mergeTargetY - 5} L${x - 4} ${mergeTargetY - 10} L${x + 4} ${mergeTargetY - 10} Z" fill="#4F46E5" />`;
                }
            }

            currentY += NODE_HEIGHT + SPACING_Y + maxBranchH;
        } else {
            currentY += NODE_HEIGHT + SPACING_Y;
        }
    });

    return svg;
}

function drawNodeShape(node: ActivityNode, x: number, y: number) {
    let svg = '';
    if (node.type === 'start') {
        svg += `<circle cx="${x}" cy="${y + 20}" r="16" fill="#10B981" stroke="#059669" stroke-width="3"/>`;
    }
    else if (node.type === 'end') {
        svg += `
            <g transform="translate(${x}, ${y + 20})">
                <circle cx="0" cy="0" r="16" fill="none" stroke="#EF4444" stroke-width="3"/>
                <circle cx="0" cy="0" r="10" fill="#EF4444"/>
            </g>
        `;
    }
    else if (node.type === 'decision') {
        svg += `
            <g transform="translate(${x}, ${y + 20})">
                <polygon points="0,-30 60,0 0,30 -60,0" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/>
                <text x="0" y="4" text-anchor="middle" font-weight="600" font-size="10" fill="#C2410C" style="font-family: sans-serif">${escapeXml(node.label)}</text>
            </g>
        `;
    }
    else if (node.type === 'fork' || node.type === 'join') {
        const w = (node as any).customWidth || 100;
        svg += `<rect x="${x - (w / 2)}" y="${y}" width="${w}" height="8" rx="4" fill="#1E293B"/>`;
        svg += `<text x="${x}" y="${y + 20}" text-anchor="middle" font-size="10" fill="#64748B">${escapeXml(node.label)}</text>`;
    }
    else { // Action
        svg += `
            <g transform="translate(${x - 80}, ${y})">
                <rect x="0" y="0" width="160" height="42" rx="8" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2" filter="drop-shadow(0 2px 4px rgb(0 0 0 / 0.05))"/>
                <text x="80" y="25" text-anchor="middle" font-weight="600" font-size="12" fill="#1E293B" style="font-family: sans-serif">${escapeXml(node.label)}</text>
            </g>
        `;
    }
    return svg;
}

function getHalfHeight(type: string): number {
    switch (type) {
        case 'start': return 15;
        case 'end': return 15;
        case 'decision': return 25;
        case 'fork': case 'join': return 3;
        default: return 20; // Action
    }
}

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
        return c;
    });
}

function drawLegacyActivity(data: BuilderData) {
    const usecases = data.usecases;
    const h = (usecases.length + 2) * 100;

    let svg = `<svg width="100%" height="${h}" viewBox="0 0 400 ${h}" xmlns="http://www.w3.org/2000/svg">`;

    // Start Node
    svg += `<circle cx="200" cy="50" r="12" fill="#10B981"/>`;
    svg += `<line x1="200" y1="62" x2="200" y2="100" stroke="#4F46E5" stroke-width="2"/>`;

    usecases.forEach((u, i) => {
        const y = 100 + (i * 100);
        svg += `
            <g transform="translate(100, ${y})">
                <rect x="0" y="0" width="200" height="50" rx="10" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
                <text x="100" y="30" text-anchor="middle" font-weight="700" font-size="12" fill="#1E293B">${u}</text>
            </g>
        `;
        // Arrow down
        if (i < usecases.length - 1) {
            svg += `<line x1="200" y1="${y + 50}" x2="200" y2="${y + 100}" stroke="#4F46E5" stroke-width="2"/>`;
            svg += `<path d="M200 ${y + 100} L195 ${y + 90} M200 ${y + 100} L205 ${y + 90}" stroke="#4F46E5" stroke-width="2" fill="none"/>`;
        }
    });

    // End Node
    const lastY = 100 + (usecases.length - 1) * 100 + 50;
    svg += `<line x1="200" y1="${lastY}" x2="200" y2="${lastY + 30}" stroke="#4F46E5" stroke-width="2"/>`;
    svg += `
        <g transform="translate(200, ${lastY + 30 + 20})">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#EF4444" stroke-width="2"/>
            <circle cx="0" cy="0" r="8" fill="#EF4444"/>
        </g>
    `;

    svg += `</svg>`;
    return svg;
}
