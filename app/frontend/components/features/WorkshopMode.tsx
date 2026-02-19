'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { workshopModules } from '@frontend/lib/data/workshops';
import { WorkshopModule, HintCategory } from '@frontend/lib/types';
import { fakeBootstrapStyles } from '@frontend/lib/styles';

interface WorkshopModeProps {
    completedModules: number[];
    onComplete: (id: number, templateId: string, code: string) => void;
    onFinish: () => void;
}

interface WorkshopEditorProps {
    module: WorkshopModule;
    onNext: (code: string) => void;
    isLast: boolean;
}

interface HintsPanelProps {
    hints: HintCategory[];
}

/**
 * Copy text to clipboard
 */
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

/**
 * Hints Panel Component
 */
function HintsPanel({ hints }: HintsPanelProps) {
    return (
        <div className="flex-1 overflow-y-auto p-3 md:p-4 flex flex-col gap-3 md:gap-4 bg-slate-50">
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
 * Workshop Editor Component
 */
function WorkshopEditor({ module, onNext, isLast }: WorkshopEditorProps) {
    const [code, setCode] = useState(module.initialCode);

    return (
        <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden bg-[#F8FAFC]">
            {/* Editor Panel */}
            <div className="w-full lg:w-1/2 flex flex-col border-r border-slate-200 max-h-[50vh] lg:max-h-full">
                {/* Header */}
                <div className="p-4 md:p-5 bg-white border-b border-slate-200 shrink-0">
                    <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{module.title}</h2>
                    <div className="bg-amber-50 border border-amber-200 p-2 md:p-3 rounded-lg">
                        <h4 className="text-[10px] md:text-xs font-bold text-amber-600 uppercase">Misi:</h4>
                        <p className="text-xs md:text-sm text-slate-600">{module.challenge}</p>
                    </div>
                </div>

                {/* Code Editor — intentionally dark for code context */}
                <div className="flex-1 bg-slate-900 relative min-h-[150px]">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-full bg-transparent text-slate-300 font-mono text-xs md:text-sm p-3 md:p-4 resize-none outline-none"
                        spellCheck="false"
                    />
                </div>

                {/* Footer */}
                <div className="p-3 md:p-4 border-t border-slate-200 bg-white flex justify-end shrink-0">
                    <button
                        onClick={() => onNext(code)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm flex items-center gap-2"
                    >
                        {isLast ? "Selesai" : "Lanjut"}
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>

            {/* Preview Panel */}
            <div className="w-full lg:w-1/2 flex flex-col bg-gray-50 border-l border-slate-200 max-h-[50vh] lg:max-h-full">
                {/* Live Preview */}
                <div className="flex-1 p-4 md:p-6 bs-scope overflow-y-auto flex items-center justify-center relative min-h-[150px] bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb_10px,#f3f4f6_10px,#f3f4f6_20px)]">
                    <style>{fakeBootstrapStyles}</style>
                    <div
                        className="w-full max-w-sm bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
                        dangerouslySetInnerHTML={{ __html: code }}
                    />
                </div>

                {/* Hints Panel */}
                <div className="h-2/5 flex flex-col bg-slate-50 border-t border-slate-200 shadow-inner">
                    <div className="px-3 md:px-4 py-2 bg-white border-b border-slate-200 shrink-0">
                        <h4 className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Kamus Kode</h4>
                    </div>
                    <HintsPanel hints={module.hints} />
                </div>
            </div>
        </div>
    );
}

/**
 * WorkshopMode Component
 * Hands-on coding exercises with live preview
 * Responsive: Stacked panels on mobile, side-by-side on desktop
 */
export function WorkshopMode({ completedModules, onComplete, onFinish }: WorkshopModeProps) {
    const [id, setId] = useState(1);
    const mod = workshopModules.find(m => m.id === id);
    const isLast = id === workshopModules.length;

    const handleNext = (code: string) => {
        if (mod) {
            onComplete(mod.id, mod.templateId, code);
            if (!isLast) {
                setId(id + 1);
            } else {
                onFinish();
            }
        }
    };

    return (
        <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar - Module List */}
            <div className="w-full md:w-56 lg:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex md:flex-col shrink-0 overflow-x-auto md:overflow-y-auto">
                <div className="p-3 md:p-4 hidden md:block">
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Modul Belajar</h3>
                </div>

                {/* Horizontal scroll on mobile, vertical on desktop */}
                <div className="flex md:flex-col gap-1 p-2 md:p-0 md:px-2">
                    {workshopModules.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setId(m.id)}
                            className={`
                flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-all whitespace-nowrap md:whitespace-normal
                ${m.id === id
                                    ? 'bg-indigo-50 border border-indigo-300'
                                    : 'hover:bg-slate-50 border border-transparent'
                                }
              `}
                        >
                            <div
                                className={`
                  p-1 md:p-1.5 rounded-md shrink-0
                  ${completedModules.includes(m.id)
                                        ? 'bg-green-600 text-white'
                                        : 'bg-slate-100 text-slate-400'
                                    }
                `}
                            >
                                {completedModules.includes(m.id)
                                    ? <Check size={10} className="md:w-3 md:h-3" />
                                    : <m.icon size={10} className="md:w-3 md:h-3" />
                                }
                            </div>
                            <span
                                className={`
                  text-xs md:text-sm 
                  ${m.id === id ? 'text-slate-800 font-semibold' : 'text-slate-500'}
                `}
                            >
                                {m.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Editor Area */}
            {mod && (
                <WorkshopEditor
                    key={mod.id}
                    module={mod}
                    onNext={handleNext}
                    isLast={isLast}
                />
            )}
        </div>
    );
}
