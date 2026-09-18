'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizFlatAffordance = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="font-bold text-blue-600">{v.submitCaps}</div>
        </QuizBox>
        <QuizBox label="B">
            <button className="bg-blue-600 px-4 py-1 text-white shadow-sm">{v.submitCaps}</button>
        </QuizBox>
    </QuizWrapper>
    );
};
