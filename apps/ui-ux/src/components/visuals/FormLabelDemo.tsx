'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';

export const FormLabelDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="w-[280px] rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mb-4">
            <label className="mb-1 block text-xs font-bold text-slate-600">{v.formLabel.label}</label>
            <input
                type="text"
                placeholder={v.formLabel.placeholder}
                className="w-full rounded-md border border-slate-300 p-2.5"
            />
        </div>
        <div>
            <input
                type="text"
                placeholder={v.formLabel.badPlaceholder}
                className="w-full rounded-md border border-slate-300 p-2.5"
            />
        </div>
    </div>
    );
};
