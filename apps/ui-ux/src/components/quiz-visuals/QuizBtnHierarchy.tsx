'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizBtnHierarchy = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <button className="mb-1.5 w-[80%] border-none bg-blue-600 text-white">{v.save}</button>
            <button className="w-[80%] border-none bg-red-600 text-white">{v.cancel}</button>
        </QuizBox>
        <QuizBox label="B">
            <button className="mb-1.5 w-[80%] border-none bg-blue-600 text-white">{v.save}</button>
            <button className="w-[80%] border border-slate-300 bg-transparent">{v.cancel}</button>
        </QuizBox>
    </QuizWrapper>
    );
};
