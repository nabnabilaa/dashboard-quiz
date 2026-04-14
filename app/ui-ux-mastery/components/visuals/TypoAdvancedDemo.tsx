import React from 'react';

export const TypoAdvancedDemo = () => (
    <div className="flex gap-5">
        <div className="w-[140px] rounded-lg border border-slate-200 p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-slate-400">Justified</div>
            <p className="text-justify text-[11px] leading-snug text-slate-700">
                This text is forced to justify, creating uncomfortable white gaps for the eyes.
            </p>
        </div>
        <div className="w-[140px] rounded-lg border-2 border-emerald-500 bg-emerald-50 p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-emerald-800">Left Aligned (Ideal)</div>
            <p className="text-left text-[11px] leading-relaxed text-slate-900">
                This text is left-aligned with adequate line spacing, making it comfortable for the eyes when moving between lines.
            </p>
        </div>
    </div>
);
