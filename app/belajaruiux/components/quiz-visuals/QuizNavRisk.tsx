import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizNavRisk = () => (
    <QuizWrapper>
        <QuizBox label="A" className="justify-start pt-[30px] px-2.5">
            <div className="flex w-full justify-between border-b border-slate-100 pb-1">
                <span className="text-sm font-semibold">Title</span>
                <ChevronLeft size={16} />
            </div>
        </QuizBox>
    </QuizWrapper>
);
