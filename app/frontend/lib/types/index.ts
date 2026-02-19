import { LucideIcon } from 'lucide-react';

// ========================
// Phase Types
// ========================
export type Phase = 'intro' | 'quiz' | 'workshop' | 'builder';

// ========================
// Slide Types (Intro Mode)
// ========================
export interface Slide {
    title: string;
    desc: string;
    visualType: string;
    color: string;
}

// ========================
// Quiz Types
// ========================
export interface Question {
    q: string;
    options: string[];
    ans: number;
    rationale: string;
}

// ========================
// Hint Types
// ========================
export interface HintItem {
    code: string;
    desc: string;
}

export interface HintCategory {
    category: string;
    items: HintItem[];
}

// ========================
// Workshop Types
// ========================
export interface WorkshopModule {
    id: number;
    templateId: string;
    title: string;
    icon: LucideIcon;
    desc: string;
    initialCode: string;
    hints: HintCategory[];
    challenge: string;
}

// ========================
// Builder Types
// ========================
export interface ComponentTemplate {
    id: string;
    label: string;
    icon: LucideIcon;
    color: string;
    defaultCode: string;
}

export interface CanvasItem {
    uniqueId: number;
    type: string;
    htmlCode: string;
}

// ========================
// User Code Map
// ========================
export type UserCodes = Record<string, string>;
