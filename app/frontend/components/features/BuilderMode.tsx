'use client';

import { useState, DragEvent } from 'react';
import { Trash2, Layout, FileCode, X, Download } from 'lucide-react';
import { componentTemplates } from '@frontend/lib/data/templates';
import { cheatSheetData } from '@frontend/lib/data/hints';
import { fakeBootstrapStyles } from '@frontend/lib/styles';
import { CanvasItem, UserCodes, HintCategory } from '@frontend/lib/types';

interface BuilderModeProps {
    items: CanvasItem[];
    setItems: React.Dispatch<React.SetStateAction<CanvasItem[]>>;
    selectedId: number | null;
    setSelectedId: (id: number | null) => void;
    userCodes: UserCodes;
}

interface CheatSheetPanelProps {
    hints: HintCategory[];
}

// Color map for builder types
const typeColors: Record<string, { bg: string, text: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-500' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-500' },
    green: { bg: 'bg-green-50', text: 'text-green-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-500' },
    red: { bg: 'bg-red-50', text: 'text-red-500' },
    gray: { bg: 'bg-slate-50', text: 'text-slate-500' },
};

/**
 * Copy text to clipboard
 */
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

/**
 * Cheat Sheet Panel Component
 */
function CheatSheetPanel({ hints }: CheatSheetPanelProps) {
    return (
        <div className="flex-1 overflow-y-auto p-3 md:p-4 flex flex-col gap-3 md:gap-4 bg-slate-50">
            <div className="px-1 py-2 border-b border-slate-200 mb-2">
                <h4 className="text-xs font-bold text-slate-600 uppercase">Quick Sheets</h4>
            </div>
            {hints.map((g, i) => (
                <div key={i}>
                    <h5 className="text-[10px] font-bold text-indigo-600 mb-1">{g.category}</h5>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                        {g.items.map((h, j) => (
                            <button
                                key={j}
                                onClick={() => copyToClipboard(h.code)}
                                className="text-left bg-white p-2 rounded border border-slate-200 hover:border-emerald-400 group transition-colors shadow-sm"
                            >
                                <code className="text-[10px] text-emerald-600 font-mono block truncate">{h.code}</code>
                                <span className="text-[9px] text-slate-400 truncate block">{h.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

/**
 * BuilderMode Component
 * Drag-and-drop portfolio builder with HTML export
 * Responsive: Bottom sheet components on mobile, 3-column on desktop
 */
export function BuilderMode({ items, setItems, selectedId, setSelectedId, userCodes }: BuilderModeProps) {
    const [drag, setDrag] = useState(false);
    const [showExport, setShowExport] = useState(false);
    const [showComponents, setShowComponents] = useState(false);

    const handleDragStart = (e: DragEvent<HTMLDivElement>, type: string) => {
        e.dataTransfer.setData('type', type);
        setDrag(true);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
        const type = e.dataTransfer.getData('type');
        if (type && componentTemplates[type]) {
            setItems([...items, {
                uniqueId: Date.now(),
                type,
                htmlCode: userCodes[type] || componentTemplates[type].defaultCode
            }]);
        }
        setShowComponents(false);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragEnd = () => {
        setDrag(false);
    };

    const activeItem = items.find(i => i.uniqueId === selectedId);

    const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-5">
${items.map(i => i.htmlCode).join('\n')}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script>
</body>
</html>`;

    return (
        <div className="flex w-full h-full flex-col md:flex-row relative overflow-hidden">
            <style>{fakeBootstrapStyles}</style>

            {/* Mobile Components Toggle Button */}
            <button
                className="md:hidden fixed bottom-4 left-4 z-30 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
                onClick={() => setShowComponents(!showComponents)}
            >
                <Layout size={20} />
            </button>

            {/* Components Sidebar - Mobile: Bottom Sheet, Desktop: Left Sidebar */}
            <div
                className={`
          fixed md:relative bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto
          w-full md:w-52 lg:w-60 bg-white border-t md:border-t-0 md:border-r border-slate-200 
          flex flex-col shrink-0 z-40 md:z-auto
          transition-transform duration-300 ease-in-out
          ${showComponents ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
          max-h-[60vh] md:max-h-full
        `}
            >
                {/* Mobile Handle */}
                <div className="md:hidden flex justify-center py-2 border-b border-slate-200">
                    <div className="w-12 h-1 bg-slate-300 rounded-full" />
                </div>

                <div className="p-3 md:p-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Components</h3>
                </div>

                <div className="flex-1 overflow-y-auto p-2 grid grid-cols-2 md:grid-cols-1 gap-2">
                    {Object.values(componentTemplates).map(c => {
                        const colors = typeColors[c.color] || typeColors.gray;
                        return (
                            <div
                                key={c.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, c.id)}
                                onDragEnd={handleDragEnd}
                                onClick={() => {
                                    // Mobile tap to add
                                    if (window.innerWidth < 768) {
                                        setItems([...items, {
                                            uniqueId: Date.now(),
                                            type: c.id,
                                            htmlCode: userCodes[c.id] || c.defaultCode
                                        }]);
                                        setShowComponents(false);
                                    }
                                }}
                                className="p-2 md:p-3 bg-slate-50 hover:bg-white rounded-lg border border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-grab md:cursor-grab flex items-center gap-2 md:gap-3 transition-all"
                            >
                                <div className={`p-1.5 md:p-2 rounded ${colors.bg} ${colors.text}`}>
                                    <c.icon size={14} className="md:w-[18px] md:h-[18px]" />
                                </div>
                                <span className="text-xs md:text-sm font-bold text-slate-600 truncate">{c.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Overlay */}
            {showComponents && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setShowComponents(false)}
                />
            )}

            {/* Canvas Area */}
            <div className="flex-1 bg-[#F8FAFC] flex flex-col relative overflow-hidden">
                {/* Export Button */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
                    <button
                        onClick={() => setShowExport(true)}
                        className="bg-green-600 hover:bg-green-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold shadow-md flex items-center gap-2 text-xs md:text-sm"
                    >
                        <Download size={14} />
                        <span className="hidden sm:inline">Export</span> HTML
                    </button>
                </div>

                {/* Canvas */}
                <div className="h-full overflow-y-auto p-4 md:p-8 flex flex-col items-center pb-20 md:pb-8">
                    <div
                        className={`
              w-full max-w-lg bg-white min-h-[500px] md:min-h-[600px] rounded-lg shadow-xl 
              flex flex-col bs-scope transition-all
              ${drag ? 'ring-4 ring-indigo-500/30' : ''}
            `}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {/* Browser Chrome */}
                        <div className="bg-gray-100 border-b p-2 md:p-3 flex gap-1.5 md:gap-2 rounded-t-lg sticky top-0 z-10">
                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400" />
                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400" />
                        </div>

                        {/* Canvas Content */}
                        <div className="flex-1 p-4 md:p-6 bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb_10px,#f3f4f6_10px,#f3f4f6_20px)] relative">
                            {/* Empty State */}
                            {items.length === 0 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 pointer-events-none">
                                    <Layout size={36} className="mb-2 opacity-20 md:w-10 md:h-10" />
                                    <p className="text-xs md:text-sm text-center px-4">
                                        {window.innerWidth < 768 ? 'Tap a component to add it' : 'Drag components here'}
                                    </p>
                                </div>
                            )}

                            {/* Canvas Items */}
                            {items.map(item => (
                                <div
                                    key={item.uniqueId}
                                    onClick={() => setSelectedId(item.uniqueId)}
                                    className={`
                    relative group cursor-pointer border-2 transition-all mb-1
                    ${item.uniqueId === selectedId
                                            ? 'border-indigo-500 z-10'
                                            : 'border-transparent hover:border-indigo-200'
                                        }
                  `}
                                >
                                    {/* Delete Button */}
                                    {item.uniqueId === selectedId && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setItems(items.filter(i => i.uniqueId !== item.uniqueId));
                                                setSelectedId(null);
                                            }}
                                            className="absolute -right-2 -top-2 md:-right-3 md:-top-3 bg-red-500 text-white p-1 md:p-1.5 rounded-full shadow hover:scale-110 z-20"
                                        >
                                            <Trash2 size={10} className="md:w-3 md:h-3" />
                                        </button>
                                    )}
                                    <div dangerouslySetInnerHTML={{ __html: item.htmlCode }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Editor Panel - Shown when item selected */}
            {activeItem && (
                <div className="fixed md:relative inset-x-0 bottom-0 md:inset-auto w-full md:w-72 lg:w-80 bg-white border-t md:border-t-0 md:border-l border-slate-200 flex flex-col shrink-0 z-50 max-h-[70vh] md:max-h-full">
                    {/* Header */}
                    <div className="p-3 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600 flex items-center gap-2">
                            <FileCode size={14} />
                            Edit HTML
                        </span>
                        <button onClick={() => setSelectedId(null)}>
                            <X size={16} className="text-slate-400 hover:text-slate-700" />
                        </button>
                    </div>

                    {/* Code Editor — intentionally dark for code context */}
                    <textarea
                        className="flex-1 bg-slate-900 text-slate-300 font-mono text-xs p-3 md:p-4 resize-none outline-none leading-loose min-h-[150px]"
                        value={activeItem.htmlCode}
                        onChange={(e) => setItems(items.map(i =>
                            i.uniqueId === selectedId ? { ...i, htmlCode: e.target.value } : i
                        ))}
                        spellCheck="false"
                    />

                    {/* Cheat Sheet */}
                    <div className="h-48 md:h-1/2 flex flex-col shadow-inner overflow-hidden">
                        <CheatSheetPanel hints={cheatSheetData} />
                    </div>
                </div>
            )}

            {/* Export Modal */}
            {showExport && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-2xl rounded-xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden max-h-[80vh]">
                        {/* Header */}
                        <div className="p-3 md:p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                            <h3 className="text-slate-800 font-bold text-sm md:text-base">Complete Code (HTML)</h3>
                            <button onClick={() => setShowExport(false)}>
                                <X className="text-slate-400 hover:text-slate-700" size={20} />
                            </button>
                        </div>

                        {/* Code */}
                        <div className="flex-1 p-3 md:p-4 overflow-hidden relative">
                            <textarea
                                readOnly
                                className="w-full h-full bg-slate-900 text-slate-300 font-mono text-[10px] md:text-xs p-3 md:p-4 rounded border border-slate-200 resize-none min-h-[200px]"
                                value={fullHtml}
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-3 md:p-4 bg-slate-50 text-right border-t border-slate-200">
                            <button
                                onClick={() => navigator.clipboard.writeText(fullHtml)}
                                className="bg-indigo-600 text-white px-4 py-2 rounded font-bold text-xs md:text-sm"
                            >
                                Copy All Code
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
