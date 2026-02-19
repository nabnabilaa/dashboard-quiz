import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizBtnHierarchy = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <button className="mb-1.5 w-[80%] border-none bg-blue-600 text-white">Save</button>
            <button className="w-[80%] border-none bg-red-600 text-white">Cancel</button>
        </QuizBox>
        <QuizBox label="B">
            <button className="mb-1.5 w-[80%] border-none bg-blue-600 text-white">Save</button>
            <button className="w-[80%] border border-slate-300 bg-transparent">Cancel</button>
        </QuizBox>
    </QuizWrapper>
);
