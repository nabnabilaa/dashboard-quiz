'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';
import { ArrowRight } from 'lucide-react';

export const UiUxComparison = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="w-[220px] rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-center text-xs font-bold text-indigo-600">{v.comparison.ui}</div>
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-2">
                <div className="mb-1 h-[30px] w-[30px] rounded-lg bg-blue-500"></div>
                <div className="mb-1 h-2 w-[60%] rounded-full bg-slate-900"></div>
                <div className="flex h-[25px] w-full items-center justify-center rounded-md bg-amber-500 text-[10px] font-bold text-white">
                    {v.comparison.button}
                </div>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-500">{v.comparison.uiCaption}</p>
        </div>
        <div className="w-[220px] rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-center text-xs font-bold text-pink-500">{v.comparison.ux}</div>
            <div className="flex items-center justify-center gap-1">
                <div className="flex h-[50px] w-[40px] items-center justify-center rounded border border-slate-300 text-[8px]">
                    {v.comparison.page} 1
                </div>
                <ArrowRight size={12} className="text-slate-400" />
                <div className="flex h-[50px] w-[40px] items-center justify-center rounded border border-slate-300 text-[8px]">
                    {v.comparison.page} 2
                </div>
                <ArrowRight size={12} className="text-slate-400" />
                <div className="flex h-[50px] w-[40px] items-center justify-center rounded border-2 border-emerald-500 text-[8px]">
                    {v.comparison.goal}
                </div>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-500">{v.comparison.uxCaption}</p>
        </div>
    </div>
    );
};
