export type QuizOption = {
    text: string;
    correct: boolean;
    reason: string;
};

export type LevelData = {
    title: string;
    text: string;
    options?: QuizOption[]; // For Quiz
    hint?: string; // For Terminal
    validCommands?: string[]; // For Terminal
    isPartialMatch?: boolean; // For Terminal
    successMsg?: string; // For Terminal
    realWorld: string;
    flowFocus?: string[];
    flowText?: string;
    visualReverse?: boolean;
    updateStatus?: any;
};

export type GameMode = 'quiz' | 'training';

export type FeedbackState = {
    visible: boolean;
    isCorrect: boolean;
    desc: string;
    realWorld: string;
};

export type TerminalFeedback = {
    type: 'success' | 'error' | '';
    message: string;
};
