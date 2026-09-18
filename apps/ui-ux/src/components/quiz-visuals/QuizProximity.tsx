'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizProximity = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="mb-0.5 text-[8px]">{v.lbl}</div>
            <input className="mb-4 h-2.5 w-full border border-slate-300" />
            <div className="mb-0.5 text-[8px]">{v.lbl}</div>
            <input className="h-2.5 w-full border border-slate-300" />
        </QuizBox>
        <QuizBox label="B">
            <div className="mb-2.5 text-[8px]">{v.lbl}</div>
            <input className="mb-0.5 h-2.5 w-full border border-slate-300" />
            <div className="mb-2.5 text-[8px]">{v.lbl}</div>
            <input className="h-2.5 w-full border border-slate-300" />
        </QuizBox>
    </QuizWrapper>
    );
};
