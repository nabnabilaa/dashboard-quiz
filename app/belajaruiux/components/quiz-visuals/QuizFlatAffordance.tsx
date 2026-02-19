import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizFlatAffordance = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="font-bold text-blue-600">SUBMIT</div>
        </QuizBox>
        <QuizBox label="B">
            <button className="bg-blue-600 px-4 py-1 text-white shadow-sm">SUBMIT</button>
        </QuizBox>
    </QuizWrapper>
);
