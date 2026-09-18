'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';

export const TypoAdvancedDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="flex gap-5">
        <div className="w-[140px] rounded-lg border border-slate-200 p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-slate-400">{v.typoAdvanced.justified}</div>
            <p className="text-justify text-[11px] leading-snug text-slate-700">
                {v.typoAdvanced.justifiedBody}
            </p>
        </div>
        <div className="w-[140px] rounded-lg border-2 border-emerald-500 bg-emerald-50 p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-emerald-800">{v.typoAdvanced.leftAligned}</div>
            <p className="text-left text-[11px] leading-relaxed text-slate-900">
                {v.typoAdvanced.leftAlignedBody}
            </p>
        </div>
    </div>
    );
};
