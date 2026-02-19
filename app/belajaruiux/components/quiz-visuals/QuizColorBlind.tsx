import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizColorBlind = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="mb-1.5 h-5 w-5 rounded-full bg-red-500"></div>
            <div className="h-5 w-5 rounded-full bg-green-500"></div>
        </QuizBox>
        <QuizBox label="B">
            <div className="mb-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                X
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
                ✓
            </div>
        </QuizBox>
    </QuizWrapper>
);
