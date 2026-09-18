'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizFeedbackFail = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <button className="rounded bg-slate-200 px-3 py-1 text-xs">{v.submit}</button>
            <div className="mt-2 text-[8px] text-slate-400">{v.noResponse}</div>
        </QuizBox>
    </QuizWrapper>
    );
};
