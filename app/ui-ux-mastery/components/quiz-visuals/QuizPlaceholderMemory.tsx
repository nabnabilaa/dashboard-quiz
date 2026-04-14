import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizPlaceholderMemory = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <input
                placeholder="Phone"
                className="w-full border border-slate-300 px-2 py-1 text-[10px]"
            />
        </QuizBox>
    </QuizWrapper>
);
