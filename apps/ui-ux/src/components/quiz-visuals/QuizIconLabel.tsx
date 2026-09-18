'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { Home, Settings } from 'lucide-react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizIconLabel = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A" className="flex-row gap-4">
            <Home size={20} />
            <Settings size={20} />
        </QuizBox>
        <QuizBox label="B">
            <div className="text-center">
                <Home size={20} className="mx-auto" />
                <span className="text-[8px]">{v.home}</span>
            </div>
        </QuizBox>
    </QuizWrapper>
    );
};
