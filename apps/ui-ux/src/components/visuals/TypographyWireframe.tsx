'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';

export const TypographyWireframe = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="w-[300px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
            <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-500">
                {v.typography.header}
            </span>
            <h1 className="my-1 text-[26px] font-extrabold leading-tight text-slate-900">
                {v.typography.title}
            </h1>
        </div>
        <div className="mb-4">
            <span className="rounded bg-pink-50 px-2 py-0.5 text-[10px] font-bold text-pink-500">
                {v.typography.subHeader}
            </span>
            <h2 className="my-1 text-lg font-semibold text-slate-600">{v.typography.subtitle}</h2>
        </div>
        <div>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                {v.typography.body}
            </span>
            <p className="my-1 text-sm leading-relaxed text-slate-500">
                {v.typography.paragraph}
            </p>
        </div>
    </div>
    );
};
