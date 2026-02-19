import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizErrorUxw = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="font-bold text-red-600">Error 500</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[10px] text-red-600">Server Down</div>
        </QuizBox>
    </QuizWrapper>
);
