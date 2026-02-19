import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizCtaEmphasis = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <button className="mb-1.5 w-full border-none bg-blue-600 text-white">Main</button>
            <button className="w-full border border-blue-600 bg-white text-blue-600">Sec</button>
        </QuizBox>
        <QuizBox label="B">
            <button className="mb-1.5 w-full border-none bg-slate-200">Main</button>
            <button className="w-full border-none bg-blue-600 text-white">Sec</button>
        </QuizBox>
    </QuizWrapper>
);
