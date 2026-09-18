import React from 'react';

export const QuizWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-5 flex flex-wrap justify-center gap-5">
        {children}
    </div>
);

interface QuizBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    children: React.ReactNode;
}

export const QuizBox = ({ label, children, className, ...props }: QuizBoxProps) => (
    <div
        className={`relative flex h-[130px] w-[130px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-2.5 ${className || ''}`}
        {...props}
    >
        <span className="absolute left-[5px] top-[5px] rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {label}
        </span>
        {children}
    </div>
);
