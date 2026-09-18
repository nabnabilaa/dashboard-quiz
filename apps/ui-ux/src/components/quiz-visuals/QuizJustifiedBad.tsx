'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizJustifiedBad = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-left text-[8px]">{v.leftComfortable}</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-justify text-[8px]">{v.justifiedGaps}</div>
        </QuizBox>
    </QuizWrapper>
    );
};
