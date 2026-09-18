'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';
import { ArrowRight } from 'lucide-react';

export const AffordanceDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="flex items-center gap-8">
        <div className="text-center">
            <div className="px-6 py-3 text-sm font-bold text-indigo-600">{v.affordance.submit}</div>
            <div className="mt-1.5 text-[10px] text-slate-400">{v.affordance.low}</div>
        </div>
        <ArrowRight className="text-slate-400" />
        <div className="text-center">
            <button className="rounded-lg border-none bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/30">
                {v.affordance.submit}
            </button>
            <div className="mt-1.5 text-[10px] text-emerald-500">{v.affordance.high}</div>
        </div>
    </div>
    );
};
