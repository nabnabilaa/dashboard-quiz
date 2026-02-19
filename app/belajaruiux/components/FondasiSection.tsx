import React, { useState } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { modules } from '@belajar/data/modules';
import { VisualRenderer } from './VisualRenderer';

export const FondasiSection = () => {
    const [idx, setIdx] = useState(0);
    const mod = modules[idx];

    return (
        <div className="flex min-h-[500px] md:min-h-[600px] animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] flex-col overflow-hidden rounded-[20px] border border-white bg-white shadow-md">
            <div className="border-b border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6 md:p-10">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="mb-3 flex gap-2">
                            {mod.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-indigo-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="mb-2.5 text-2xl md:text-[2rem] font-extrabold leading-tight text-slate-900">
                            {mod.title}
                        </h1>
                        <p className="max-w-[650px] text-sm md:text-base leading-relaxed text-slate-500">{mod.desc}</p>
                    </div>
                    <div className="font-sans text-[2rem] md:text-[3rem] font-extrabold opacity-10">
                        #{idx + 1}
                    </div>
                </div>
            </div>
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-50 p-6 md:p-8">
                <div className="flex w-full max-w-[800px] justify-center">
                    <VisualRenderer type={mod.visualType} />
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-5 py-4 md:px-10 md:py-5">
                <button
                    className={`flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-slate-900 transition-all hover:bg-slate-50 ${idx === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                        }`}
                    disabled={idx === 0}
                    onClick={() => setIdx((i) => i - 1)}
                >
                    <ChevronLeft size={18} /> <span className="hidden sm:inline">Sebelumnya</span>
                </button>
                <div className="flex gap-1">
                    {modules.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-indigo-600' : 'w-1.5 bg-slate-200'
                                }`}
                        ></div>
                    ))}
                </div>
                <button
                    className={`flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-white transition-all hover:bg-indigo-700 ${idx === modules.length - 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                        }`}
                    disabled={idx === modules.length - 1}
                    onClick={() => setIdx((i) => i + 1)}
                >
                    <span className="hidden sm:inline">Selanjutnya</span> <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};
