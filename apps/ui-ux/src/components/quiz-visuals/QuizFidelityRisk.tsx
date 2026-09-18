import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizFidelityRisk = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="flex h-[50px] w-[50px] items-center justify-center border border-dashed border-black text-xs font-bold">
                WF
            </div>
        </QuizBox>
        <QuizBox label="B">
            <div className="flex h-[50px] w-[50px] items-center justify-center bg-gradient-to-tr from-blue-500 to-red-500 text-xs font-bold text-white">
                Hi-Fi
            </div>
        </QuizBox>
    </QuizWrapper>
);
