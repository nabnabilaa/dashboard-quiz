import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizGutter = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="flex bg-slate-100">
                <div className="h-[50px] w-5 bg-slate-300"></div>
                <div className="h-[50px] w-5 bg-slate-200"></div>
            </div>
        </QuizBox>
        <QuizBox label="B">
            <div className="flex gap-1.5 bg-slate-100">
                <div className="h-[50px] w-5 bg-slate-300"></div>
                <div className="h-[50px] w-5 bg-slate-300"></div>
            </div>
        </QuizBox>
    </QuizWrapper>
);
