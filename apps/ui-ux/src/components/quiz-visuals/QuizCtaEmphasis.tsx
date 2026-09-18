'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizCtaEmphasis = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <button className="mb-1.5 w-full border-none bg-blue-600 text-white">{v.primary}</button>
            <button className="w-full border border-blue-600 bg-white text-blue-600">{v.secondary}</button>
        </QuizBox>
        <QuizBox label="B">
            <button className="mb-1.5 w-full border-none bg-slate-200">{v.primary}</button>
            <button className="w-full border-none bg-blue-600 text-white">{v.secondary}</button>
        </QuizBox>
    </QuizWrapper>
    );
};
