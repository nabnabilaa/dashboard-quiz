'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { quizVisuals } from '@belajar/i18n/visuals';
import { Search } from 'lucide-react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizEmptyGoal = () => {
    const v = quizVisuals[useLang()];
    return (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[10px] text-slate-400">{v.noData}</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="flex flex-col items-center">
                <Search size={20} className="mb-1 text-slate-400" />
                <button className="rounded bg-slate-100 px-2 py-0.5 text-[8px]">{v.search}</button>
            </div>
        </QuizBox>
    </QuizWrapper>
    );
};
