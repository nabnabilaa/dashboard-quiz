import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizLineHeight = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[9px] leading-none">Tight text is hard to read.</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[9px] leading-relaxed">Spacious text is easy to read.</div>
        </QuizBox>
    </QuizWrapper>
);
