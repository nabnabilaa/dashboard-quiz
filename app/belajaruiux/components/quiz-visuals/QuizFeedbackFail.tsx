import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizFeedbackFail = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <button className="rounded bg-slate-200 px-3 py-1 text-xs">Submit</button>
            <div className="mt-2 text-[8px] text-slate-400">(No response)</div>
        </QuizBox>
    </QuizWrapper>
);
