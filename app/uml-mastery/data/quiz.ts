export interface Question {
    q: string;
    opts: string[];
    correct: number;
    exp: string;
}

export const theoryQuestions: Question[] = [
    {
        q: "What is the primary focus of a System Analyst?", opts: ["Writing code as fast as possible", "Understanding 'What is to be achieved'", "Fixing broken computers"], correct: 1, exp: "System Analysts focus on business requirements (WHAT), not technical coding (HOW)."
    },
    {
        q: "What is the primary function of a Use Case Diagram?", opts: ["Drawing the database", "Explaining system functionality & actors", "Calculating project costs"], correct: 1, exp: "Use Cases focus on 'WHAT' the system does and 'WHO' interacts with it."
    },
    {
        q: "'The system must load a page within 2 seconds'. This is an example of...?", opts: ["Functional Feature", "Quality (Non-Functional)", "User Story"], correct: 1, exp: "Speed is a quality characteristic (How well), not a feature (What it does)."
    },
    {
        q: "What is the person symbol in a Use Case Diagram called?", opts: ["User", "Person", "Actor"], correct: 2, exp: "In UML, users or other systems that interact are called Actors."
    },
    {
        q: "What does the Diamond symbol in an Activity Diagram mean?", opts: ["Start", "Finish", "Decision"], correct: 2, exp: "Diamonds are used for logical branching (Yes/No)."
    },
    {
        q: "What does a dashed line with the <<include>> label mean?", opts: ["Mandatory Relationship", "Optional Relationship", "Inheritance"], correct: 0, exp: "Include means Use Case A 'always' calls Use Case B."
    },
    {
        q: "Which diagram is most suitable for designing database structures?", opts: ["Activity Diagram", "Class Diagram", "Sequence Diagram"], correct: 1, exp: "Class Diagrams describe data entities and their relationships, similar to a database schema."
    },
    {
        q: "In a Sequence Diagram, time flows in which direction?", opts: ["Left to Right", "Top to Bottom", "Bottom to Top"], correct: 1, exp: "Sequence Diagrams are read from top (start) to bottom (end)."
    },
    {
        q: "What part of the system architecture stores data?", opts: ["Presentation Layer", "Business Layer", "Data Layer"], correct: 2, exp: "The Data Layer is responsible for data storage and retrieval."
    },
    {
        q: "What is the correct first step before Coding?", opts: ["UI Design", "Analysis & Design", "Testing"], correct: 1, exp: "Requirement analysis and design must be done before construction (coding)."
    }
];
