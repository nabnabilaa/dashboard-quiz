import React from 'react';
import { Loader } from 'lucide-react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizSkeletonWhy = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="mb-1.5 h-2.5 w-[80%] bg-slate-200"></div>
            <div className="h-2.5 w-[60%] bg-slate-200"></div>
        </QuizBox>
        <QuizBox label="B">
            <Loader className="animate-spin text-slate-400" />
        </QuizBox>
    </QuizWrapper>
);
