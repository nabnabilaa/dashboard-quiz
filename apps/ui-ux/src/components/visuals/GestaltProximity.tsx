'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';

export const GestaltProximity = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="flex gap-5">
        <div className="w-[160px] rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="mb-2.5 text-xs font-bold text-red-800">{v.proximity.bad}</div>
            <div className="rounded-lg bg-white p-2.5">
                <div className="text-[10px] text-slate-500">{v.proximity.labelA}</div>
                <div className="mb-2.5 h-[25px] rounded border border-slate-300"></div>
                <div className="text-[10px] text-slate-500">{v.proximity.labelB}</div>
                <div className="h-[25px] rounded border border-slate-300"></div>
            </div>
        </div>
        <div className="w-[160px] rounded-xl border border-green-200 bg-green-50 p-4">
            <div className="mb-2.5 text-xs font-bold text-green-800">{v.proximity.good}</div>
            <div className="rounded-lg bg-white p-2.5">
                <div className="mb-0.5 text-[10px] text-slate-500">{v.proximity.labelA}</div>
                <div className="mb-4 h-[25px] rounded border border-emerald-500"></div>
                <div className="mb-0.5 text-[10px] text-slate-500">{v.proximity.labelB}</div>
                <div className="h-[25px] rounded border border-emerald-500"></div>
            </div>
        </div>
    </div>
    );
};
