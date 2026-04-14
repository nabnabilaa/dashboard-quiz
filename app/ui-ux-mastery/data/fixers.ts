import { FixerLevel } from '@belajar/types';

export const fixers: FixerLevel[] = [
    {
        level: 1,
        title: "Bad Spacing",
        problem: "This text is too close to the blue box. It's hard to read and visually unappealing.",
        type: "spacing",
        options: [
            { id: 'a', text: "Change box color", feedback: "Color is not the main issue.", correct: false },
            { id: 'b', text: "Delete blue box", feedback: "The box is an important element.", correct: false },
            { id: 'c', text: "Add padding", feedback: "Correct! Spacing/breathing room makes the design more elegant.", correct: true }
        ]
    },
    {
        level: 2,
        title: "Low Contrast CTA",
        problem: "This 'BUY' button is pale gray. Users won't realize it's an important button.",
        type: "cta_color",
        options: [
            { id: 'a', text: "Change font to Comic Sans", feedback: "Don't be silly...", correct: false },
            { id: 'b', text: "Change color to something high-contrast (Blue/Red)", feedback: "Correct! A Call to Action must stand out.", correct: true },
            { id: 'c', text: "Make the button smaller", feedback: "That makes it even harder to see.", correct: false }
        ]
    },
    {
        level: 3,
        title: "Ambiguous Icon",
        problem: "This red 'X' icon is confusing. Does it mean 'Close', 'Error', or 'Delete'?",
        type: "icon",
        options: [
            { id: 'a', text: "Change to a Home icon", feedback: "The Home icon is a universal standard for returning to the dashboard/homepage.", correct: true },
            { id: 'b', text: "Change color to green", feedback: "It's still an 'X' icon; users will remain confused.", correct: false },
            { id: 'c', text: "Delete icon", feedback: "Then its function is lost.", correct: false }
        ]
    },
    {
        level: 4,
        title: "Poor Text Contrast",
        problem: "White text on a light gray background? It's painful to read.",
        type: "contrast_fix",
        options: [
            { id: 'a', text: "Change background to black", feedback: "Possible, but the text becomes too glaring.", correct: false },
            { id: 'b', text: "Change text to dark gray", feedback: "Perfect! High contrast = easy to read.", correct: true },
            { id: 'c', text: "Make text bold", feedback: "A little help, but not enough.", correct: false }
        ]
    },
    {
        level: 5,
        title: "Centered Text Block",
        problem: "A long paragraph that's center-aligned is hard to read because the start of each line is inconsistent.",
        type: "alignment_fix",
        options: [
            { id: 'a', text: "Change to Left Align", feedback: "Correct! Eyes read from left to right.", correct: true },
            { id: 'b', text: "Change to Justify", feedback: "Justification can create weird gaps (rivers) in the text.", correct: false },
            { id: 'c', text: "Increase font size", feedback: "Doesn't solve the issue of reading flow.", correct: false }
        ]
    },
    {
        level: 6,
        title: "Missing Label",
        problem: "This input field only has a placeholder. If a user types, they forget what field this is.",
        type: "input_label_fix",
        options: [
            { id: 'a', text: "Add an external Label", feedback: "100%! The label must remain visible.", correct: true },
            { id: 'b', text: "Change border color", feedback: "Doesn't help the user's memory.", correct: false },
            { id: 'c', text: "Use a longer placeholder", feedback: "It still disappears when typed in.", correct: false }
        ]
    },
    {
        level: 7,
        title: "Tiny Touch Target",
        problem: "This button is tiny! It's hard to press with a thumb.",
        type: "touch_target_fix",
        options: [
            { id: 'a', text: "Increase touch area padding", feedback: "Mandatory! Minimum 44x44px for mobile.", correct: true },
            { id: 'b', text: "Change to a text Link", feedback: "Text links also need a large touch area.", correct: false },
            { id: 'c', text: "Move to the corner", feedback: "That actually makes it harder to reach.", correct: false }
        ]
    },
    {
        level: 8,
        title: "Hidden Exit",
        problem: "This popup ad appears, but where's the close button? The user is trapped!",
        type: "modal_close_fix",
        options: [
            { id: 'a', text: "Wait 5 seconds", feedback: "Dark pattern! Don't force users to wait.", correct: false },
            { id: 'b', text: "Show a clear 'X' button", feedback: "User control is a key UX principle.", correct: true },
            { id: 'c', text: "Ask user to refresh page", feedback: "That's basically kicking the user out.", correct: false }
        ]
    },
    {
        level: 9,
        title: "Hierarchy Confusion",
        problem: "The heading and sub-heading are the same size. Which should be read first?",
        type: "hierarchy_fix",
        options: [
            { id: 'a', text: "Use different colors", feedback: "Helpful, but size is more dominant.", correct: false },
            { id: 'b', text: "Make the Heading larger & bolder", feedback: "Visual hierarchy is created through size and weight.", correct: true },
            { id: 'c', text: "Underline everything", feedback: "Too messy and looks like links.", correct: false }
        ]
    },
    {
        level: 10,
        title: "Vague Error Message",
        problem: "Input is red, but why? The user doesn't know what's wrong.",
        type: "error_msg_fix",
        options: [
            { id: 'a', text: "Let the user guess", feedback: "Cruel.", correct: false },
            { id: 'b', text: "Just write 'Error'", feedback: "Still not clear enough.", correct: false },
            { id: 'c', text: "Write a specific message (e.g., Invalid Email)", feedback: "Error messages should help the user fix the issue.", correct: true }
        ]
    },
    {
        level: 11,
        title: "Dead End 404",
        problem: "This 404 page is a dead end. The user has to manually use the browser back button.",
        type: "empty_state_fix",
        options: [
            { id: 'a', text: "Redirect automatically to Home", feedback: "Could be confusing for the user.", correct: false },
            { id: 'b', text: "Provide an illustration + navigation buttons", feedback: "Turn frustration into navigation.", correct: true },
            { id: 'c', text: "Write 'Server Error'", feedback: "Even though it's just a broken link.", correct: false }
        ]
    },
    {
        level: 12,
        title: "Uncertain Loading",
        problem: "A black (blank) screen during loading? The user might think the app crashed.",
        type: "loading_fix",
        options: [
            { id: 'a', text: "Write 'Loading...'", feedback: "Better, but boring.", correct: false },
            { id: 'b', text: "Use a Skeleton Screen", feedback: "Perceived performance feels faster!", correct: true },
            { id: 'c', text: "Show ads", feedback: "Distracting.", correct: false }
        ]
    },
    {
        level: 13,
        title: "Stretched Image",
        problem: "This profile picture is squashed because it's forced into a rectangular box.",
        type: "aspect_ratio_fix",
        options: [
            { id: 'a', text: "Crop the photo into a circle", feedback: "Aesthetic and proportional.", correct: true },
            { id: 'b', text: "Leave it squashed (art)", feedback: "Abstract art, maybe?", correct: false },
            { id: 'c', text: "Lower the resolution", feedback: "That just makes it blurry.", correct: false }
        ]
    },
    {
        level: 14,
        title: "Menu Overload",
        problem: "7 navigation menus crammed onto a mobile screen. It's crowded and tiny.",
        type: "menu_simplify_fix",
        options: [
            { id: 'a', text: "Delete 5 menus", feedback: "User loses access to features.", correct: false },
            { id: 'b', text: "Use a Hamburger Menu", feedback: "The right solution to save mobile space.", correct: true },
            { id: 'c', text: "Make it 2 rows", feedback: "Takes up too much vertical space.", correct: false }
        ]
    },
    {
        level: 15,
        title: "Pure Black Dark Mode",
        problem: "A pure #000000 background can cause 'smearing' on OLED screens and too sharp a contrast.",
        type: "dark_mode_fix",
        options: [
            { id: 'a', text: "Change to Dark Gray (#121212)", feedback: "More comfortable for the eyes & safe for OLED.", correct: true },
            { id: 'b', text: "Change to Deep Blue", feedback: "Not a standard dark mode.", correct: false },
            { id: 'c', text: "Use neon gradient colors", feedback: "Very cyberpunk, but less accessible.", correct: false }
        ]
    }
];
