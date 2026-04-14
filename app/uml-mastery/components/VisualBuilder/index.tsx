import React, { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion';
import { BuilderData, builderTemplates, Relation, ActivityNode } from '../../data/visual';
import DiagramCanvas from './DiagramCanvas';
import { Save, ArrowLeft, ArrowRight, User, Settings, Check, Layout, Plus, X } from 'lucide-react';

interface VisualBuilderProps {
    scenarioId: string;
    initialType: 'usecase' | 'activity';
    onBack: () => void;
}

export default function VisualBuilder({ scenarioId, initialType, onBack }: VisualBuilderProps) {
    const template = builderTemplates[scenarioId];
    const [step, setStep] = useState(1);
    const [view, setView] = useState<'usecase' | 'activity'>(initialType);

    // Editor State
    const [actors, setActors] = useState<string[]>([]);
    const [usecases, setUsecases] = useState<string[]>([]);
    const [mappings, setMappings] = useState<Record<number, number[]>>({});
    const [relations, setRelations] = useState<Relation[]>([]);
    const [activityNodes, setActivityNodes] = useState<ActivityNode[]>([]);

    useEffect(() => {
        if (template) {
            setActors([...template.actors]);
            setUsecases([...template.usecases]);
            setMappings(JSON.parse(JSON.stringify(template.mappings)));
            setRelations(JSON.parse(JSON.stringify(template.relations)));

            // Initial Activity Nodes from template (Start -> usecases -> End)
            const initialNodes: ActivityNode[] = [
                { id: 'start', type: 'start', label: 'Start' },
                ...template.usecases.map((u, i) => ({
                    id: `node-${i}`,
                    type: 'action' as const,
                    label: u
                })),
                { id: 'end', type: 'end', label: 'End' }
            ];
            setActivityNodes(initialNodes);
        }
    }, [template]);

    const builderData: BuilderData = { actors, usecases, mappings, relations, activityNodes };

    const handleAddItem = (type: 'actors' | 'usecases') => {
        if (type === 'actors') setActors([...actors, 'New Actor']);
        else setUsecases([...usecases, 'New Process']);
    };

    const handleRemoveItem = (type: 'actors' | 'usecases', idx: number) => {
        if (type === 'actors') {
            const newArr = [...actors];
            newArr.splice(idx, 1);
            setActors(newArr);
        } else {
            const newArr = [...usecases];
            newArr.splice(idx, 1);
            setUsecases(newArr);
        }
    };

    const handleUpdateItem = (type: 'actors' | 'usecases', idx: number, val: string) => {
        if (type === 'actors') {
            const newArr = [...actors];
            newArr[idx] = val;
            setActors(newArr);
        } else {
            const newArr = [...usecases];
            newArr[idx] = val;
            setUsecases(newArr);
        }
    };

    const toggleMapping = (aIdx: number, uIdx: number) => {
        const newMap = { ...mappings };
        if (!newMap[aIdx]) newMap[aIdx] = [];

        const existingIdx = newMap[aIdx].indexOf(uIdx);
        if (existingIdx === -1) newMap[aIdx].push(uIdx);
        else newMap[aIdx].splice(existingIdx, 1);

        setMappings(newMap);
    };

    // Relation logic for step 2
    const addRelation = () => setRelations([...relations, { source: 0, target: 1, type: 'include' }]);
    const updateRelation = (idx: number, field: keyof Relation, val: any) => {
        const newRels = [...relations];
        newRels[idx] = { ...newRels[idx], [field]: val };
        setRelations(newRels);
    };
    const removeRelation = (idx: number) => {
        const newRels = [...relations];
        newRels.splice(idx, 1);
        setRelations(newRels);
    };

    const downloadJSON = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify({
                actors,
                usecases,
                mappings,
                relations,
                activityNodes,
                scenarioId
            }, null, 2)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${template?.title.replace(/\s+/g, "_").toLowerCase() || 'diagram'}.json`;
        link.click();
    };

    // Simplified handlers that just update the state directly
    const handleAddNode = (type: ActivityNode['type']) => {
        const id = `node-${Date.now()}`;
        const newNodes = [...activityNodes];
        const endIndex = newNodes.findIndex(n => n.type === 'end');

        const newNode: ActivityNode = {
            id,
            type,
            label: type === 'decision' ? 'Check Condition?' : type === 'fork' ? 'Parallel Split' : type === 'join' ? 'Join' : 'New Action',
            branches: type === 'decision' ? [
                { id: `b-${Date.now()}-1`, label: 'Yes', nodes: [] },
                { id: `b-${Date.now()}-2`, label: 'No', nodes: [] }
            ] : type === 'fork' ? [
                { id: `b-${Date.now()}-1`, label: 'Path 1', nodes: [] },
                { id: `b-${Date.now()}-2`, label: 'Path 2', nodes: [] }
            ] : undefined
        };

        if (endIndex !== -1) newNodes.splice(endIndex, 0, newNode);
        else newNodes.push(newNode);

        setActivityNodes(newNodes);
    };

    // Helper to update state recursively
    const updateNodes = (fn: (nodes: ActivityNode[]) => ActivityNode[]) => {
        setActivityNodes(prev => fn(prev));
    };

    if (!template) return <div>Template not found</div>;

    return (
        <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden">
            {/* Wizard Header */}
            <div className="bg-white px-6 py-4 border-b border-slate-200 shadow-sm z-10">
                <div className="flex justify-center mb-4 overflow-x-auto">
                    <div className="flex items-center gap-4 bg-slate-100 p-1 rounded-full min-w-max">
                        {[1, 2, 3].map(s => (
                            <div
                                key={s}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold transition-all ${step === s ? 'bg-[#E09000] text-white shadow' :
                                    step > s ? 'bg-emerald-500 text-white' : 'text-slate-400'
                                    }`}
                            >
                                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${step === s ? 'bg-white/20' : step > s ? 'bg-white/20' : 'bg-slate-300 text-white'}`}>
                                    {step > s ? <Check size={12} /> : s}
                                </span>
                                {s === 1 ? 'Actors' : s === 2 ? 'Processes & Links' : 'Result'}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-800">
                        {step === 1 ? 'Who is involved?' : step === 2 ? 'What are the activities?' : 'Your Diagram is Ready!'}
                    </h2>
                    <p className="text-sm text-slate-500">
                        {step === 1 ? 'Specify actors (people or external systems)' : step === 2 ? 'Enter activity names and connect them to actors' : 'Review and save your work'}
                    </p>
                </div>
            </div>

            {/* Main Content Split */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Left: Form Area */}
                {step < 3 && (
                    <div className="w-full md:w-1/3 md:min-w-[320px] h-1/2 md:h-full bg-white border-t md:border-t-0 md:border-r border-slate-200 p-6 overflow-y-auto order-2 md:order-1">
                        <div className="bg-[#FFF8EB] border border-[#FFDF88] rounded-lg p-3 mb-6 flex items-start gap-3">
                            <div className="bg-[#FFDF88] p-1 rounded text-[#B87200] mt-0.5">💡</div>
                            <p className="text-xs text-[#945A00] leading-relaxed">
                                {view === 'activity'
                                    ? 'Drag to reorder. Add nodes according to the flow requirements.'
                                    : (step === 1 ? 'Add all parties involved in this system.' : 'Write activities, then CLICK the actor names below to connect.')
                                }
                            </p>
                        </div>

                        {/* CASE: ACTIVITY DIAGRAM - FLOW EDITOR */}
                        {view === 'activity' ? (
                            <div className="space-y-4">
                                <ActivityNodeList
                                    nodes={activityNodes}
                                    onReorder={setActivityNodes}
                                    onUpdate={(id, label) => updateNodes(prev => updateNodeLabel(prev, id, label))}
                                    onRemove={(id) => updateNodes(prev => removeNode(prev, id))}
                                    onAddBranch={(nodeId) => updateNodes(prev => addBranch(prev, nodeId))}
                                    onUpdateBranch={(branchId, label) => updateNodes(prev => updateBranchLabel(prev, branchId, label))}
                                    onRemoveBranch={(branchId) => updateNodes(prev => removeBranch(prev, branchId))}
                                    onAddNodeToBranch={(nodeId, branchIndex) => updateNodes(prev => addNodeToBranch(prev, nodeId, branchIndex))}
                                    onReorderBranch={(nodeId, branchIndex, newNodes) => updateNodes(prev => reorderBranchNodes(prev, nodeId, branchIndex, newNodes))}
                                />

                                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                                    <button onClick={() => handleAddNode('action')} className="p-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-[#FFCF4A] flex items-center justify-center gap-2">
                                        <Plus size={14} /> Action
                                    </button>
                                    <button onClick={() => handleAddNode('decision')} className="p-2 border border-orange-200 bg-orange-50 rounded-lg text-xs font-bold text-orange-700 hover:bg-orange-100 flex items-center justify-center gap-2">
                                        <Plus size={14} /> Decision
                                    </button>
                                    <button onClick={() => handleAddNode('fork')} className="p-2 border border-slate-800 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 flex items-center justify-center gap-2">
                                        <Plus size={14} /> Fork
                                    </button>
                                    <button onClick={() => handleAddNode('join')} className="p-2 border border-slate-800 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 flex items-center justify-center gap-2">
                                        <Plus size={14} /> Join
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* CASE: USE CASE DIAGRAM - WIZARD STEPS */
                            <>
                                {step === 1 && (
                                    <div className="space-y-3">
                                        {actors.map((actor, idx) => (
                                            <div key={idx} className="flex gap-2 items-center bg-slate-50 p-2 rounded border border-slate-200">
                                                <span className="font-bold text-[#F5A623] w-6">{idx + 1}</span>
                                                <input
                                                    value={actor}
                                                    onChange={(e) => handleUpdateItem('actors', idx, e.target.value)}
                                                    className="flex-1 bg-white border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-[#F5A623]"
                                                    placeholder="Actor Name"
                                                />
                                                <button onClick={() => handleRemoveItem('actors', idx)} className="text-red-400 hover:text-red-600">
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        ))}
                                        <button onClick={() => handleAddItem('actors')} className="w-full py-2 border-2 border-dashed border-[#FFDF88] text-[#E09000] font-bold rounded-lg hover:bg-[#FFF8EB] transition-colors flex justify-center items-center gap-2 text-sm mt-2">
                                            <Plus size={16} /> Add Actor
                                        </button>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            {usecases.map((uc, uIdx) => (
                                                <div key={uIdx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                                                    <div className="flex gap-2 items-center mb-3">
                                                        <span className="font-bold text-[#F5A623] w-6">{uIdx + 1}</span>
                                                        <input
                                                            value={uc}
                                                            onChange={(e) => handleUpdateItem('usecases', uIdx, e.target.value)}
                                                            className="flex-1 bg-slate-50 border border-slate-300 rounded px-2 py-1 text-sm font-semibold focus:outline-none focus:border-[#F5A623]"
                                                            placeholder="Use Case Name"
                                                        />
                                                        <button onClick={() => handleRemoveItem('usecases', uIdx)} className="text-red-400 hover:text-red-600">
                                                            <X size={18} />
                                                        </button>
                                                    </div>

                                                    {/* Actor Mapping Buttons */}
                                                    <div className="flex flex-wrap gap-2 pl-6">
                                                        {actors.map((actor, aIdx) => {
                                                            const isActive = (mappings[aIdx] || []).includes(uIdx);
                                                            return (
                                                                <button
                                                                    key={aIdx}
                                                                    onClick={() => toggleMapping(aIdx, uIdx)}
                                                                    className={`text-xs px-2 py-1 rounded-full border transition-all ${isActive ? 'bg-[#E09000] text-white border-[#E09000]' : 'bg-white text-slate-500 border-slate-200 hover:border-[#FFCF4A]'}`}
                                                                >
                                                                    {isActive ? '✓' : '+'} {actor}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                            <button onClick={() => handleAddItem('usecases')} className="w-full py-2 border-2 border-dashed border-brand-200 text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-colors flex justify-center items-center gap-2 text-sm mt-2">
                                                <Plus size={16} /> Add Activity
                                            </button>
                                        </div>

                                        {/* Advanced Relations */}
                                        <div className="border-t border-slate-200 pt-4">
                                            <h3 className="text-sm font-bold text-slate-700 mb-2">Advanced Relations</h3>
                                            {relations.map((rel, rIdx) => (
                                                <div key={rIdx} className="flex flex-wrap gap-2 items-center bg-slate-50 p-2 rounded mb-2 text-xs">
                                                    <select
                                                        className="flex-1 bg-white border border-slate-200 rounded p-1"
                                                        value={rel.source}
                                                        onChange={(e) => updateRelation(rIdx, 'source', parseInt(e.target.value))}
                                                    >
                                                        {usecases.map((u, i) => <option key={i} value={i}>{u}</option>)}
                                                    </select>
                                                    <select
                                                        className="w-20 bg-white border border-slate-200 rounded p-1 font-mono text-[#E09000]"
                                                        value={rel.type}
                                                        onChange={(e) => updateRelation(rIdx, 'type', e.target.value)}
                                                    >
                                                        <option value="include">INC</option>
                                                        <option value="extend">EXT</option>
                                                    </select>
                                                    <select
                                                        className="flex-1 bg-white border border-slate-200 rounded p-1"
                                                        value={rel.target}
                                                        onChange={(e) => updateRelation(rIdx, 'target', parseInt(e.target.value))}
                                                    >
                                                        {usecases.map((u, i) => <option key={i} value={i}>{u}</option>)}
                                                    </select>
                                                    <button onClick={() => removeRelation(rIdx)} className="text-red-400">
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                            <button onClick={addRelation} className="text-xs text-[#E09000] font-bold hover:underline">+ Add Relation</button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )}

                {/* Right: Preview Area */}
                <div className={`w-full ${step === 3 ? 'h-full' : 'md:flex-1 h-1/2 md:h-full'} flex flex-col bg-slate-100 relative order-1 md:order-2`}>

                    <div className="flex-1 p-8 overflow-auto flex items-center justify-center">
                        <DiagramCanvas data={builderData} view={view} templateName={template.title} />
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="bg-white p-4 border-t border-slate-200 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center z-20">
                <div className="flex gap-2">
                    {step === 3 && (
                        <button
                            onClick={() => setStep(2)}
                            className="btn-secondary px-6 py-2 rounded-lg border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50"
                        >
                            <Settings size={18} className="inline mr-2" />
                            Edit Again
                        </button>
                    )}
                    {step < 3 && (
                        <button
                            onClick={step > 1 ? () => setStep(step - 1) : onBack}
                            className="px-6 py-2 rounded-lg font-semibold text-slate-500 hover:bg-slate-100 flex items-center gap-2"
                        >
                            <ArrowLeft size={18} />
                            {step === 1 ? 'Back to Menu' : 'Back'}
                        </button>
                    )}
                </div>

                <div className="flex gap-2">
                    {step === 3 ? (
                        <>
                            <button
                                onClick={downloadJSON}
                                className="px-6 py-2 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-900 flex items-center gap-2"
                            >
                                <Save size={18} /> Save JSON
                            </button>
                            <button
                                onClick={onBack}
                                className="px-6 py-2 bg-[#E09000] text-white rounded-lg font-bold hover:bg-[#B87200] flex items-center gap-2"
                            >
                                Finish <Check size={18} />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="px-8 py-2 bg-[#E09000] text-white rounded-lg font-bold hover:bg-[#B87200] flex items-center gap-2 shadow-lg hover:shadow-[#FFDF88]"
                        >
                            Next <ArrowRight size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// HELPER FUNCTIONS (Pure / Recursive)
// ----------------------------------------------------------------------

const updateNodeLabel = (nodes: ActivityNode[], id: string, label: string): ActivityNode[] => {
    return nodes.map(node => {
        if (node.id === id) return { ...node, label };
        if (node.branches) {
            return {
                ...node,
                branches: node.branches.map(b => ({ ...b, nodes: updateNodeLabel(b.nodes, id, label) }))
            };
        }
        return node;
    });
};

const removeNode = (nodes: ActivityNode[], id: string): ActivityNode[] => {
    return nodes.filter(node => node.id !== id).map(node => {
        if (node.branches) {
            return {
                ...node,
                branches: node.branches.map(b => ({ ...b, nodes: removeNode(b.nodes, id) }))
            };
        }
        return node;
    });
};

const addBranch = (nodes: ActivityNode[], nodeId: string): ActivityNode[] => {
    return nodes.map(node => {
        if (node.id === nodeId) {
            const newBranch = { id: `branch-${Date.now()}`, label: 'New Option', nodes: [] };
            return { ...node, branches: [...(node.branches || []), newBranch] };
        }
        if (node.branches) {
            return {
                ...node,
                branches: node.branches.map(b => ({ ...b, nodes: addBranch(b.nodes, nodeId) }))
            };
        }
        return node;
    });
};

const removeBranch = (nodes: ActivityNode[], branchId: string): ActivityNode[] => {
    return nodes.map(node => {
        if (node.branches) {
            return {
                ...node,
                branches: node.branches
                    .filter(b => b.id !== branchId)
                    .map(b => ({ ...b, nodes: removeBranch(b.nodes, branchId) }))
            };
        }
        return node;
    });
};

const updateBranchLabel = (nodes: ActivityNode[], branchId: string, label: string): ActivityNode[] => {
    return nodes.map(node => {
        if (node.branches) {
            const updatedBranches = node.branches.map(b => {
                if (b.id === branchId) return { ...b, label };
                return { ...b, nodes: updateBranchLabel(b.nodes, branchId, label) };
            });
            return { ...node, branches: updatedBranches };
        }
        return node;
    });
};

const addNodeToBranch = (nodes: ActivityNode[], nodeId: string, branchIndex: number): ActivityNode[] => {
    const newNode: ActivityNode = { id: `node-${Date.now()}`, type: 'action', label: 'New Action' };
    return nodes.map(n => {
        if (n.id === nodeId && n.branches) {
            const newBranches = [...n.branches];
            newBranches[branchIndex] = {
                ...newBranches[branchIndex],
                nodes: [...newBranches[branchIndex].nodes, newNode]
            };
            return { ...n, branches: newBranches };
        }
        if (n.branches) {
            return { ...n, branches: n.branches.map(b => ({ ...b, nodes: addNodeToBranch(b.nodes, nodeId, branchIndex) })) };
        }
        return n;
    });
};

const reorderBranchNodes = (nodes: ActivityNode[], nodeId: string, branchIndex: number, newNodes: ActivityNode[]): ActivityNode[] => {
    return nodes.map(n => {
        if (n.id === nodeId && n.branches) {
            const newBranches = [...n.branches];
            newBranches[branchIndex] = { ...newBranches[branchIndex], nodes: newNodes };
            return { ...n, branches: newBranches };
        }
        if (n.branches) {
            return { ...n, branches: n.branches.map(b => ({ ...b, nodes: reorderBranchNodes(b.nodes, nodeId, branchIndex, newNodes) })) };
        }
        return n;
    });
};


// ----------------------------------------------------------------------
// COMPONENT: ActivityNodeList (Memoized to prevent re-renders)
// ----------------------------------------------------------------------

interface NodeListProps {
    nodes: ActivityNode[];
    onReorder: (newNodes: ActivityNode[]) => void;
    onUpdate: (id: string, label: string) => void;
    onRemove: (id: string) => void;
    onAddBranch: (nodeId: string) => void;
    onUpdateBranch: (branchId: string, label: string) => void;
    onRemoveBranch: (branchId: string) => void;
    onAddNodeToBranch: (nodeId: string, branchIndex: number) => void;
    onReorderBranch: (nodeId: string, branchIndex: number, newNodes: ActivityNode[]) => void;
}

const ActivityNodeList = ({
    nodes,
    onReorder,
    onUpdate,
    onRemove,
    onAddBranch,
    onUpdateBranch,
    onRemoveBranch,
    onAddNodeToBranch,
    onReorderBranch
}: NodeListProps) => {
    return (
        <Reorder.Group axis="y" values={nodes} onReorder={onReorder} className="space-y-3 min-h-[20px]">
            {nodes.map((node) => (
                <Reorder.Item key={node.id} value={node} className="outline-none">
                    <div className={`p-3 rounded-xl border shadow-sm transition-all relative group ${node.type === 'start' || node.type === 'end' ? 'bg-slate-50 border-slate-200' :
                        node.type === 'decision' ? 'bg-orange-50 border-orange-200 shadow-orange-100' :
                            node.type === 'fork' || node.type === 'join' ? 'bg-slate-800 border-slate-900 text-white shadow-slate-300' :
                                'bg-white border-slate-200 hover:border-[#FFCF4A] hover:shadow-md'
                        }`}>
                        <div className="flex items-center gap-3">
                            {/* Drag Handle */}
                            <div className="text-slate-300 cursor-grab active:cursor-grabbing hover:text-slate-500">
                                <Layout size={16} className="rotate-90" />
                            </div>

                            {/* Node Icon & Label */}
                            <div className="flex-1">
                                <div className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 ${node.type === 'fork' || node.type === 'join' ? 'text-slate-400' : 'text-slate-400'}`}>
                                    {node.type}
                                </div>
                                <input
                                    value={node.label}
                                    onChange={(e) => onUpdate(node.id, e.target.value)}
                                    className={`w-full bg-transparent text-sm font-semibold focus:outline-none placeholder:font-normal ${node.type === 'fork' || node.type === 'join'
                                        ? 'text-white placeholder:text-slate-500 selection:bg-slate-600'
                                        : 'text-slate-800 placeholder:text-slate-400 selection:bg-[#FFEFC6]'
                                        }`}
                                    placeholder={node.type === 'decision' ? 'What is the condition?' : 'Activity Name'}
                                />
                            </div>

                            {/* Delete Button */}
                            {node.type !== 'start' && node.type !== 'end' && (
                                <button
                                    onClick={() => onRemove(node.id)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-300 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-full"
                                    title="Delete Node"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Handling Branches for Decision/Fork */}
                        {(node.type === 'decision' || node.type === 'fork') && (
                            <div className="mt-4 pl-4 border-l-2 border-slate-300 ml-2 space-y-4">
                                {(node.branches || []).map((branch, bIdx) => (
                                    <div key={branch.id} className="relative">
                                        {/* Branch Header */}
                                        <div className="flex items-center gap-2 mb-2 group/branch">
                                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                            <input
                                                value={branch.label}
                                                onChange={(e) => onUpdateBranch(branch.id, e.target.value)}
                                                className="text-xs font-bold text-slate-500 bg-transparent focus:text-[#E09000] focus:outline-none border-b border-transparent focus:border-[#FFCF4A] transition-colors w-24"
                                                placeholder="Label"
                                            />
                                            {/* Delete Branch Button */}
                                            <button
                                                onClick={() => onRemoveBranch(branch.id)}
                                                className="opacity-0 group-hover/branch:opacity-100 text-slate-300 hover:text-red-500 transition-all scale-75"
                                                title="Delete Branch"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>

                                        {/* Nested Recursive List */}
                                        <div className="pl-2">
                                            <ActivityNodeList
                                                nodes={branch.nodes}
                                                onReorder={(newNodes) => onReorderBranch(node.id, bIdx, newNodes)}
                                                onUpdate={onUpdate}
                                                onRemove={onRemove}
                                                onAddBranch={onAddBranch}
                                                onUpdateBranch={onUpdateBranch}
                                                onRemoveBranch={onRemoveBranch}
                                                onAddNodeToBranch={onAddNodeToBranch}
                                                onReorderBranch={onReorderBranch}
                                            />

                                            {/* Add Action to Branch Button */}
                                            <button
                                                onClick={() => onAddNodeToBranch(node.id, bIdx)}
                                                className="mt-2 text-[10px] font-bold text-slate-400 hover:text-[#E09000] hover:bg-[#FFF8EB] px-2 py-1.5 rounded-lg border border-dashed border-slate-300 hover:border-[#FFDF88] flex items-center gap-1 transition-all w-full justify-center"
                                            >
                                                <Plus size={10} /> Add Action
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={() => onAddBranch(node.id)}
                                    className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-1.5 px-3 rounded-full flex items-center gap-1 transition-colors"
                                >
                                    <Plus size={10} /> New Branch
                                </button>
                            </div>
                        )}
                    </div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
};
