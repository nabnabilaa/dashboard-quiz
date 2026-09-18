'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizLineHeight = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[9px] leading-none">{v.tightText}</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[9px] leading-relaxed">{v.spaciousText}</div>
        </QuizBox>
    </QuizWrapper>
    );
};
