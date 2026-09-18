'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';

export const GridSystemDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="w-full max-w-[400px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex gap-2">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="h-[100px] flex-1 rounded border border-dashed border-indigo-600 bg-indigo-600/10"
                ></div>
            ))}
        </div>
        <div className="flex gap-2">
            <div className="flex h-[50px] flex-[2] items-center justify-center rounded-md bg-indigo-600 text-xs font-bold text-white">
                {v.grid.content}
            </div>
            <div className="flex h-[50px] flex-1 items-center justify-center rounded-md bg-blue-300 text-xs font-bold text-blue-900">
                {v.grid.side}
            </div>
        </div>
    </div>
    );
};
