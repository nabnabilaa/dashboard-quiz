import React from 'react';
import { Home, Settings } from 'lucide-react';
import { QuizWrapper, QuizBox } from './QuizWrapper';

export const QuizIconLabel = () => (
    <QuizWrapper>
        <QuizBox label="A" className="flex-row gap-4">
            <Home size={20} />
            <Settings size={20} />
        </QuizBox>
        <QuizBox label="B">
            <div className="text-center">
                <Home size={20} className="mx-auto" />
                <span className="text-[8px]">Home</span>
            </div>
        </QuizBox>
    </QuizWrapper>
);
