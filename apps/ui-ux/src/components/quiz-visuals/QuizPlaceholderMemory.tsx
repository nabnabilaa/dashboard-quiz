'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizPlaceholderMemory = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <input
                placeholder={v.phone}
                className="w-full border border-slate-300 px-2 py-1 text-[10px]"
            />
        </QuizBox>
    </QuizWrapper>
    );
};
