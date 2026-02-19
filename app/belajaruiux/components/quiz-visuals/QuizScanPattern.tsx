import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizScanPattern = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[40px] text-slate-300">F</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[40px] text-slate-300">Z</div>
        </QuizBox>
    </QuizWrapper>
);
