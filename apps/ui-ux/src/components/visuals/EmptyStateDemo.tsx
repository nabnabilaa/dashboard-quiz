'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';
import { ShoppingCart } from 'lucide-react';

export const EmptyStateDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="flex h-[240px] w-[320px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        <div className="mb-4 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-slate-100">
            <ShoppingCart size={36} className="text-slate-400" />
        </div>
        <div className="mb-1 text-base font-bold text-slate-900">{v.emptyState.title}</div>
        <p className="mb-5 text-[13px] text-slate-500">
            {v.emptyState.body}
        </p>
        <button className="rounded-lg border-none bg-indigo-600 px-6 py-2.5 text-[13px] font-semibold text-white">
            {v.emptyState.cta}
        </button>
    </div>
    );
};
