import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizJustifiedBad = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-left text-[8px]">Rata kiri nyaman.</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-justify text-[8px]">Rata kanan kiri bolong.</div>
        </QuizBox>
    </QuizWrapper>
);
