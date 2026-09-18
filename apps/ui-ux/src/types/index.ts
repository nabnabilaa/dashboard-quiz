
export interface Module {
  id: number;
  title: string;
  desc: string;
  visualType: string;
  tags: string[];
}

export interface QuizOption {
  t: string;
  c: boolean;
}

export interface Quiz {
  q: string;
  visualType: string;
  opts: QuizOption[];
  feedback: string;
}

export interface FixerOption {
  id: string;
  text: string;
  correct: boolean;
  feedback: string;
}

export interface FixerLevel {
  level: number;
  title: string;
  problem: string;
  type: string;
  options: FixerOption[];
}
