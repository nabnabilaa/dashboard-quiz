'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizBreadcrumbNeed = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[8px] text-slate-500">{v.crumbDeep}</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[8px] text-slate-500">{v.crumbLanding}</div>
        </QuizBox>
    </QuizWrapper>
    );
};
