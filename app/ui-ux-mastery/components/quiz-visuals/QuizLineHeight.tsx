import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizLineHeight = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[9px] leading-none">Teks padat susah dibaca.</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[9px] leading-relaxed">Teks lega nyaman dibaca.</div>
        </QuizBox>
    </QuizWrapper>
);
