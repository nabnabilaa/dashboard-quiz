import { Bricolage_Grotesque, Caveat } from 'next/font/google';

export const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['400', '600', '800'] });
export const hand = Caveat({ subsets: ['latin'], weight: ['600'] });

export type Course = {
  name: string;
  path: string;
  /** What the learner actually does; completes the hero sentence "Go ___." */
  task: string;
  cmd: string;
  color: string;
  ink: string;
  /** Text-safe version of the course color, readable on the paper background. */
  accent: string;
  desc: string;
  features: string[];
};

export const courses: Course[] = [
  {
    name: 'UI/UX Mastery',
    path: '/ui-ux-mastery',
    task: 'fix a broken layout',
    cmd: 'padding: 24px',
    color: '#3B82F6',
    ink: '#FFFFFF',
    accent: '#2563EB',
    desc: 'Spot the better interface in side-by-side comparisons, then repair broken screens with live sliders in Fixer Studio.',
    features: ['Visual quiz', 'Fixer Studio', 'EN / ID'],
  },
  {
    name: 'UML Mastery',
    path: '/uml-mastery',
    task: 'draw a UML diagram',
    cmd: '<<include>>',
    color: '#EDE9FE',
    ink: '#3B2A8C',
    accent: '#5B45D6',
    desc: 'Read a real case study, then drag actors, use cases and arrows onto a canvas until the system makes sense.',
    features: ['Case studies', 'Diagram builder'],
  },
  {
    name: 'Git Mastery',
    path: '/git-master',
    task: 'commit to a branch',
    cmd: 'git commit -m',
    color: '#F05033',
    ink: '#FFFFFF',
    accent: '#DC3F22',
    desc: 'Type real commands into a terminal and watch staging, commits and branches redraw themselves as you go.',
    features: ['Terminal', 'Branch visualizer', 'Quiz'],
  },
  {
    name: 'Frontend Development',
    path: '/frontend',
    task: 'build a web page',
    cmd: '<section>',
    color: '#FDE68A',
    ink: '#5B3B00',
    accent: '#A16207',
    desc: 'Semantic HTML, modern CSS and the DOM, practiced in guided workshops and a block-based page builder.',
    features: ['Workshops', 'Page builder', 'EN / ID'],
  },
  {
    name: 'Backend Laravel',
    path: '/backend-laravel',
    task: 'ship a Laravel route',
    cmd: 'php artisan serve',
    color: '#FFFFFF',
    ink: '#C8281E',
    accent: '#C8281E',
    desc: 'MVC, routing, Eloquent and APIs, then write the code yourself in a builder that simulates the output.',
    features: ['Guided modules', 'Code builder', 'Live demo'],
  },
  {
    name: 'Ethical Hacking',
    path: '/ethical-hacking',
    task: 'scan a network',
    cmd: 'nmap -sV',
    color: '#10B981',
    ink: '#03261A',
    accent: '#047857',
    desc: 'Thirteen modules from reconnaissance to red vs. blue team, with a reference library of real pentest tools.',
    features: ['13 modules', 'Tools library'],
  },
];
