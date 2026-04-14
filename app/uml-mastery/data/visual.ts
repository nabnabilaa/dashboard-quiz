export interface Scenario {
    title: string;
    text: string;
    seq: string[];
    exp: string;
}

export interface Relation {
    source: number;
    target: number;
    type: string;
}

export interface ActivityBranch {
    id: string;
    label: string; // e.g. "Yes", "No", "True", "False"
    nodes: ActivityNode[];
}

export interface ActivityNode {
    id: string;
    type: 'action' | 'decision' | 'fork' | 'join' | 'end' | 'start';
    label: string;
    branches?: ActivityBranch[];
}

export interface BuilderData {
    actors: string[];
    usecases: string[];
    mappings: Record<string, number[]>; // Key is actor index (as string), value is array of usecase indices
    relations: Relation[];
    activityNodes?: ActivityNode[];
}

export interface Template {
    title: string;
    actors: string[];
    usecases: string[];
    mappings: Record<string, number[]>;
    relations: Relation[];
}

export type ViewType = 'usecase' | 'activity';

export const visualScenarios = {
    usecase: [
        {
            title: "Login System", text: "User enters data, and the System validates it.", seq: ['actor', 'assoc', 'usecase', 'assoc', 'actor_sys'], exp: "User (Actor) is connected to a Use Case, and the Use Case needs validation from the System (another Actor)."
        },
        {
            title: "Mandatory Feature (Include)", text: "When Transferring Money, the system MUST Check Balance.", seq: ['usecase', 'include', 'usecase'], exp: "Transfer 'Includes' Check Balance. This means Check Balance is always executed."
        },
        {
            title: "ATM System", text: "A customer withdraws cash from an ATM Machine (Hardware).", seq: ['actor', 'assoc', 'usecase', 'assoc', 'actor_sys'], exp: "Customer -> Withdraw Cash -> Bank System."
        }
    ],
    activity: [
        {
            title: "Login Flow", text: "Start -> Input Data -> Validation -> Finish.", seq: ['start', 'flow', 'action', 'flow', 'action', 'flow', 'end'], exp: "Simple linear flow: Start -> Input -> Validation -> End."
        },
        {
            title: "Check Stock (Decision)", text: "Check Item -> If Available (Ship), If Empty (Order).", seq: ['action', 'flow', 'decision'], exp: "After the Check Item action, enter a Decision to branch."
        },
        {
            title: "Parallel (Fork)", text: "Start -> Split into 2 processes (Send Email & SMS).", seq: ['start', 'flow', 'fork'], exp: "Fork Node splits one stream into multiple parallel streams."
        }
    ]
};

export const builderTemplates: Record<string, Template> = {
    gofood: {
        title: 'Go-Food',
        actors: ['Customer', 'Driver', 'Restaurant'],
        usecases: ['Choose Menu', 'Order', 'Pay', 'Delivery', 'Finish'],
        mappings: {
            '0': [0, 1, 2], '1': [3, 4], '2': [2, 3]
        },
        relations: [
            { source: 1, target: 2, type: 'include' }
        ]
    },
    atm: {
        title: 'ATM System',
        actors: ['Customer', 'Bank System'],
        usecases: ['Insert Card', 'Verify PIN', 'Check Balance', 'Withdraw Cash', 'Print Receipt'],
        mappings: {
            '0': [0, 1, 2, 3], '1': [1, 2, 3]
        },
        relations: [
            { source: 3, target: 4, type: 'extend' }
        ]
    }
};
