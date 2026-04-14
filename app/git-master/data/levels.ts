import { LevelData } from '@git/types';

// 1. QUIZ DATA (9 Levels)
export const quizLevels: LevelData[] = [
    {
        title: "Initialization",
        text: "You just created a folder named <code>school-web</code> on your laptop. To start tracking this folder with Git, what is the first command you should run?",
        options: [{ text: "git init", correct: true, reason: "Exactly! <code>git init</code> creates a secret <code>.git</code> folder." }, { text: "git start", correct: false, reason: "There is no git start command." }, { text: "git create repo", correct: false, reason: "Incorrect." }],
        realWorld: "Always run this at the beginning of a new project.",
        flowFocus: ['node-working'],
        flowText: "Focus: Workspace",
        updateStatus: { repo: "Active", file: "-" }
    },
    {
        title: "Staging",
        text: "The file <code>index.html</code> has been created. Add it to the staging area so it's ready to be saved.",
        options: [{ text: "git add index.html", correct: true, reason: "Correct! The file enters the Staging Area." }, { text: "git commit", correct: false, reason: "You can't commit yet." }, { text: "git stage", correct: false, reason: "Incorrect." }],
        realWorld: "Only select files that are ready to be included.",
        flowFocus: ['node-working', 'line-ws', 'node-staging'],
        flowText: "Flow: Add File",
        updateStatus: { file: "Staged" }
    },
    {
        title: "Commit",
        text: "Save the changes permanently with the message 'First commit'.",
        options: [{ text: "git commit -m 'Message'", correct: true, reason: "Snap! Saved in the Local Repo." }, { text: "git save", correct: false, reason: "There is no git save command." }, { text: "git push", correct: false, reason: "Not time to push yet." }],
        realWorld: "Use clear and descriptive commit messages.",
        flowFocus: ['node-staging', 'line-sl', 'node-local'],
        flowText: "Flow: Commit",
        updateStatus: { file: "Committed" }
    },
    {
        title: "Branching",
        text: "You want to create a new feature without disturbing the main code. Create a branch named <code>new-feature</code>.",
        options: [{ text: "git branch new-feature", correct: true, reason: "Smart! A new branch has been formed." }, { text: "git new branch", correct: false, reason: "Syntax error." }, { text: "git checkout", correct: false, reason: "That's for switching." }],
        realWorld: "Isolating new features is important to keep the main code stable.",
        flowFocus: ['node-local'],
        flowText: "Strategy: Branching",
        updateStatus: { branch: "main", branchVisual: "created" }
    },
    {
        title: "Checkout",
        text: "Switch to the <code>new-feature</code> branch you just created.",
        options: [{ text: "git checkout new-feature", correct: true, reason: "Great! You are now on the new-feature branch." }, { text: "git move", correct: false, reason: "Incorrect." }, { text: "git switch branch", correct: false, reason: "Not quite right." }],
        realWorld: "Make sure you're on the right branch before you start coding.",
        flowFocus: ['node-working'],
        flowText: "Action: Switch Branch",
        updateStatus: { branch: "new-feature", branchActive: true }
    },
    {
        title: "Merging",
        text: "Feature finished. Merge <code>new-feature</code> back into <code>main</code>.",
        options: [{ text: "git merge new-feature", correct: true, reason: "Awesome! The feature code is merged into main." }, { text: "git combine", correct: false, reason: "Incorrect." }, { text: "git join", correct: false, reason: "Incorrect." }],
        realWorld: "Be careful with 'Conflicts' when merging.",
        flowFocus: ['node-local'],
        flowText: "Action: Merge",
        updateStatus: { branch: "main", branchActive: false, branchVisual: "merged" }
    },
    {
        title: "Remote",
        text: "Connect your local repo to GitHub (URL: https://github.com/me/repo.git).",
        options: [{ text: "git remote add origin ...", correct: true, reason: "Connected!" }, { text: "git connect", correct: false, reason: "Incorrect." }, { text: "git link", correct: false, reason: "Incorrect." }],
        realWorld: "The primary remote is usually named 'origin'.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "Setup: Remote",
        updateStatus: { repo: "Connected to GitHub" }
    },
    {
        title: "Push",
        text: "Upload your code to GitHub.",
        options: [{ text: "git push -u origin main", correct: true, reason: "Code uploaded." }, { text: "git pull", correct: false, reason: "Pull is for downloading." }, { text: "git upload", correct: false, reason: "Not git upload." }],
        realWorld: "Back up your code to the cloud regularly.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "Flow: Push",
        updateStatus: { file: "Synced" }
    },
    {
        title: "Pull",
        text: "Your teammate updated the code on GitHub. Fetch the changes to your laptop.",
        options: [{ text: "git pull origin main", correct: true, reason: "Synchronization successful." }, { text: "git push", correct: false, reason: "Incorrect." }, { text: "git download", correct: false, reason: "Incorrect." }],
        realWorld: "Pull before starting work to avoid conflicts.",
        flowFocus: ['node-remote', 'line-lr', 'node-local'],
        flowText: "Flow: Pull",
        visualReverse: true,
        updateStatus: { file: "Updated" }
    }
];

// 2. TERMINAL TRAINING DATA (9 Levels)
export const trainingLevels: LevelData[] = [
    {
        title: "Terminal: Start Project",
        text: "Turn this folder into a Git repository.",
        hint: "git i...",
        validCommands: ["git init"],
        successMsg: "Repository ready.",
        realWorld: "The essential first step.",
        flowFocus: ['node-working'],
        flowText: "CMD: git init",
        updateStatus: { repo: "Active" }
    },
    {
        title: "Terminal: Adding Files",
        text: "Add <code>style.css</code> to the Staging Area.",
        hint: "git add ...",
        validCommands: ["git add style.css", "git add .", "git add *"],
        successMsg: "File in Staging.",
        realWorld: "Use a dot (.) to add all files.",
        flowFocus: ['node-working', 'line-ws', 'node-staging'],
        flowText: "CMD: git add",
        updateStatus: { file: "Staged" }
    },
    {
        title: "Terminal: Saving",
        text: "Commit with the message <b>'Update styles'</b>.",
        hint: "git commit -m \"...\"",
        validCommands: ["git commit -m \"Update styles\"", "git commit -m 'Update styles'"],
        successMsg: "Saved.",
        realWorld: "Messages should be descriptive.",
        flowFocus: ['node-staging', 'line-sl', 'node-local'],
        flowText: "CMD: git commit",
        updateStatus: { file: "Committed" }
    },
    {
        title: "Terminal: Create Branch",
        text: "Create a new branch named <code>dev</code>.",
        hint: "git branch ...",
        validCommands: ["git branch dev"],
        successMsg: "Branch dev created.",
        realWorld: "Do not code features on the main branch.",
        flowFocus: ['node-local'],
        flowText: "CMD: git branch",
        updateStatus: { branch: "main", branchVisual: "created" }
    },
    {
        title: "Terminal: Switch Branch",
        text: "Switch to the <code>dev</code> branch.",
        hint: "git checkout ...",
        validCommands: ["git checkout dev", "git switch dev"],
        successMsg: "Active on dev.",
        realWorld: "Make sure to switch before you start coding.",
        flowFocus: ['node-working'],
        flowText: "CMD: git checkout",
        updateStatus: { branch: "dev", branchActive: true }
    },
    {
        title: "Terminal: Merge",
        text: "Merge <code>dev</code> into <code>main</code> (Assume you have already switched back to main).",
        hint: "git merge ...",
        validCommands: ["git merge dev"],
        successMsg: "Code merged.",
        realWorld: "Resolve conflicts if any arise.",
        flowFocus: ['node-local'],
        flowText: "CMD: git merge",
        updateStatus: { branch: "main", branchActive: false, branchVisual: "merged" }
    },
    {
        title: "Terminal: Remote",
        text: "Add a remote origin (use any placeholder URL).",
        hint: "git remote add origin https://...",
        validCommands: ["git remote add origin"],
        isPartialMatch: true,
        successMsg: "Remote connected.",
        realWorld: "Connecting to a server.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "CMD: git remote add",
        updateStatus: { repo: "Connected to GitHub" }
    },
    {
        title: "Terminal: Push",
        text: "Upload to origin main.",
        hint: "git push -u ...",
        validCommands: ["git push -u origin main", "git push origin main", "git push"],
        successMsg: "Uploaded.",
        realWorld: "Secure your code in the cloud.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "CMD: git push",
        updateStatus: { file: "Synced" }
    },
    {
        title: "Terminal: Pull",
        text: "Fetch updates from origin main.",
        hint: "git pull ...",
        validCommands: ["git pull origin main", "git pull"],
        successMsg: "Synced.",
        realWorld: "Prevent conflicts by pulling regularly.",
        flowFocus: ['node-remote', 'line-lr', 'node-local'],
        flowText: "CMD: git pull",
        visualReverse: true,
        updateStatus: { file: "Updated" }
    }
];
