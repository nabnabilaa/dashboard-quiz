import React from 'react';
import { QuizWrapper } from './QuizWrapper';

export const QuizThumbReach = () => (
    <QuizWrapper>
        <div className="relative h-[120px] w-[80px] rounded-[10px] border-2 border-slate-700 bg-white">
            <div className="absolute left-0 top-0 h-[30px] w-[30px] bg-red-500/30"></div>
            <div className="absolute bottom-0 h-[40px] w-full bg-green-500/30"></div>
        </div>
    </QuizWrapper>
);
