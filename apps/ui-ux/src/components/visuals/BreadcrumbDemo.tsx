'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';
import { ChevronRight } from 'lucide-react';

export const BreadcrumbDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="w-[320px] rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-indigo-600">
            <span>{v.breadcrumb.home}</span> <ChevronRight size={12} className="text-slate-400" />
            <span>{v.breadcrumb.category}</span> <ChevronRight size={12} className="text-slate-400" />
            <span className="font-normal text-slate-500">{v.breadcrumb.product}</span>
        </div>
        <div className="flex h-[100px] items-center justify-center rounded-lg bg-slate-50 text-slate-300">
            {v.breadcrumb.content}
        </div>
    </div>
    );
};
