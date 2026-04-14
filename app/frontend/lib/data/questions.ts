import { Question } from '@frontend/lib/types';

/**
 * Assessment Questions Data
 * 15 quiz questions with rationale explanations
 */
export const assessmentQuestions: Question[] = [
    {
        q: "What is the primary function of the <body> tag in HTML?",
        options: ["Store meta info and tab title", "Container for visual content seen by the user", "Makes text italic", "Connects to a database server"],
        ans: 1,
        rationale: "Exactly! The <body> tag acts as the browser's main canvas. Anything you type inside the <head> (like meta or title) will not appear on the web page, while text, images, and buttons inside the <body> are what users see and interact with."
    },
    {
        q: "Which is the correct order of Headings from Largest to Smallest?",
        options: ["h6 -> h1", "h1 -> h6", "head -> body", "p -> b"],
        ans: 1,
        rationale: "Correct! In HTML, header numbers work inversely. <h1> is the main 'Headline' (Huge Size/Main Topic), whereas <h6> is the smallest sub-heading. Think of it like a newspaper: Main Headline (h1) vs Classified Ads (h6)."
    },
    {
        q: "What is the function of the <div> tag?",
        options: ["Play video", "Bold text automatically", "Container for grouping elements", "Create links to other pages"],
        ans: 2,
        rationale: "Right! Div (Division) is like a 'Box' or 'Wrapper'. It doesn't change text appearance directly but is used to group several elements (e.g., image + text) so they can be styled (CSS) or positioned together."
    },
    {
        q: "If we fill the href attribute with a hash symbol (#), what does it mean?",
        options: ["Link to Google", "Error / Broken Link", "Placeholder Link (Stay in place)", "Delete the Link"],
        ans: 2,
        rationale: "Yes! '#' is often called a 'Dead Link' or 'Anchor'. It is used by developers as a placeholder when the destination page hasn't been created yet, so the element still looks and acts like a clickable link button without reloading the page."
    },
    {
        q: "What is the correct way to close an <h1> tag?",
        options: ["<h1/>", "\\h1", "</h1>", "(h1)"],
        ans: 2,
        rationale: "Remember the 'Burger' principle! The opening tag is <h1>, and the closing tag always has a forward slash before the tag name: </h1>. Without this closure, the browser will assume all subsequent text is a large heading."
    },
    {
        q: "What is the mandatory attribute for an <img> tag to display an image?",
        options: ["href", "src", "link", "img"],
        ans: 1,
        rationale: "Correct. 'src' stands for Source. The browser needs to know 'Where is the image file?'. The href attribute is used for Links (<a>), while src is used for media (<img>, <video>, <audio>)."
    },
    {
        q: "What is the main advantage of using Bootstrap over manual CSS?",
        options: ["Slower due to large file size", "Faster because of ready-to-use Classes", "No need to write HTML anymore", "Only for professionals"],
        ans: 1,
        rationale: "100%! Bootstrap provides thousands of pre-written 'Utility Classes'. You don't need to stitch CSS code from scratch to create a beautiful blue button; just call 'btn btn-primary', and the style is applied instantly."
    },
    {
        q: "Which tag is used to create a regular paragraph of text?",
        options: ["<text>", "<p>", "<par>", "<write>"],
        ans: 1,
        rationale: "Easy, right? <p> stands for Paragraph. This tag automatically provides spacing (margin) above and below the text so the reading doesn't feel too cramped, unlike text without tags."
    },
    {
        q: "What is the difference between Margin and Padding?",
        options: ["They are the same, just different names", "Margin is internal space, Padding is external", "Margin is EXTERNAL space, Padding is INTERNAL", "Margin is for color, Padding is for text"],
        ans: 2,
        rationale: "The key to layout! Padding is 'Thickening' (Space between content and skin/border), like the filling of a pillow inside its case. Margin is 'Repulsion' (Space between that pillow and another), the empty area outside the element."
    },
    {
        q: "To create an ordered list (1. Wash, 2. Rinse), we use the tag...",
        options: ["<ul> (Unordered List)", "<ol> (Ordered List)", "<dl> (Definition List)", "<list>"],
        ans: 1,
        rationale: "Exactly. Ordered List (<ol>) automatically provides sequential numbers (1, 2, 3) or letters (a, b, c) next to each item. An <ul> (Unordered) only provides bullet points or dots."
    },
    {
        q: "In Bootstrap, the function of the 'text-center' class is to...",
        options: ["Change text color to center", "Bold the text", "Center align the text", "Delete the text"],
        ans: 2,
        rationale: "As the name suggests, 'text-center' is a utility class equivalent to the CSS 'text-align: center'. It's very useful for positioning titles or buttons precisely in the middle of their container."
    },
    {
        q: "Where is the best position to place the <script> (JavaScript) tag?",
        options: ["At the very top of <head>", "Outside the <html> tag", "At the very bottom of <body> (before the closing tag)", "Inside a CSS file"],
        ans: 2,
        rationale: "Smart! Scripts are usually placed at the very bottom of the <body> so the browser can load the visual layout (HTML/CSS) first without being blocked. This makes the website feel 'faster' to the user."
    },
    {
        q: "What is the function of the 'class' attribute?",
        options: ["Give a unique ID that can only be used once", "Label an element so it can be styled (CSS)", "Create a page link", "Store a password"],
        ans: 1,
        rationale: "Class is a 'Label' that can be attached to MANY elements at once. For example, the class 'btn-red' can be attached to 10 different buttons, and they will all automatically turn red according to that class's CSS rules."
    },
    {
        q: "What is Frontend?",
        options: ["Database & Server part", "The UI part that users see & interact with", "Undersea Internet cables", "Windows Operating System"],
        ans: 1,
        rationale: "Correct! Frontend is the 'Face' of the website (HTML, CSS, JS). Backend is the 'Brain & Memory' on the server. Users only see the Frontend, while the Backend works behind the scenes."
    },
    {
        q: "The <b> tag is used for...",
        options: ["New line (Break)", "Bold", "Bottom", "Blue"],
        ans: 1,
        rationale: "B for Bold. Used to thicken text to make it more prominent. However, in modern HTML, it's recommended to use <strong> if the bolding has the semantic meaning of 'Important'."
    },
    {
        q: "The <br> tag is used for...",
        options: ["Create a thick line", "Line break (Enter)", "Bold a letter", "Create a red background"],
        ans: 1,
        rationale: "Correct! <br> stands for 'Break'. This tag forces the following text to drop to a new line, similar to the Enter key on a keyboard."
    },
    {
        q: "What is Semantic HTML?",
        options: ["Using tags with meaning (header, footer, article)", "Using only div for all elements", "Writing code without spaces", "Making moving animations"],
        ans: 0,
        rationale: "Exactly! Semantic HTML uses tags that explain their 'meaning' (like <article> for an article, <nav> for a menu), not just <div>. This helps search engines and Screen Readers understand the website's content."
    },
    {
        q: "The primary tag for creating a table is...",
        options: ["<grid>", "<excel>", "<table>", "<list>"],
        ans: 2,
        rationale: "Simple! <table> is the main container. Inside are <tr> (Table Row) for rows and <td> (Table Data) for the cells."
    },
    {
        q: "If <input type='password'>, then the typed text will...",
        options: ["Turn red", "Change into stars/dots", "Become all capital letters", "Disappear automatically"],
        ans: 1,
        rationale: "For security! The browser automatically masks password characters as dots or stars so they can't be peeked at by someone next to you."
    },
    {
        q: "What is the function of the <form> tag?",
        options: ["Send user input data to the server", "Create a paper form", "Delete data", "Format text into a form"],
        ans: 0,
        rationale: "Right. The <form> tag wraps all inputs (text, checkboxes, buttons). When the submit button is pressed, the data inside that <form> is what gets sent for processing."
    }
];
