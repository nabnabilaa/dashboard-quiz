import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizBlackSmear = () => (
    <QuizWrapper>
        <QuizBox label="A" className="bg-black text-white">
            <span className="text-[10px]">#000</span>
        </QuizBox>
        <QuizBox label="B" className="bg-[#121212] text-white">
            <span className="text-[10px]">#121212</span>
        </QuizBox>
    </QuizWrapper>
);
