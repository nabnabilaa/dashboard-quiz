import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizJustifiedBad = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-left text-[8px]">Left-aligned is comfortable.</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-justify text-[8px]">Justified has gaps.</div>
        </QuizBox>
    </QuizWrapper>
);
