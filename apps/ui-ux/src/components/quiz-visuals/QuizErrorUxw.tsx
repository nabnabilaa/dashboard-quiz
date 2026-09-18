'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizErrorUxw = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="font-bold text-red-600">{v.error500}</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[10px] text-red-600">{v.serverDown}</div>
        </QuizBox>
    </QuizWrapper>
    );
};
