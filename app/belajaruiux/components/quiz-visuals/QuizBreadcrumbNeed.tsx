import React from 'react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizBreadcrumbNeed = () => (
    <QuizWrapper>
        <QuizBox label="A">
            <div className="text-[8px] text-slate-500">Home &gt; Item</div>
        </QuizBox>
        <QuizBox label="B">
            <div className="text-[8px] text-slate-500">Home &gt; (Landing?)</div>
        </QuizBox>
    </QuizWrapper>
);
