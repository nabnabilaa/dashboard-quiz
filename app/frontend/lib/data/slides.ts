import { Slide } from '@frontend/lib/types';

/**
 * Intro Slides Data
 * 15 slides covering HTML, CSS, and Bootstrap fundamentals
 */
export const introSlides: Slide[] = [
    {
        title: "1. The House Analogy",
        desc: "Imagine a website as a house. HTML is the Walls & Pillars (the basic structure that supports everything). CSS is the Paint, Decoration, & Layout (making the house look beautiful and comfortable). JS is the Electricity & Plumbing (making lights turn on, water flow, or dynamic interactions).",
        visualType: "analogy_house",
        color: "blue"
    },
    {
        title: "2. The HTML Body Structure",
        desc: "HTML is divided into two vital areas: <head> and <body>. The <head> is the invisible area (meta data, CSS links, browser tab title) — like the human mind. The <body> is the area visible on the screen (text, images, buttons) — like the physical body seen by others.",
        visualType: "html_structure",
        color: "indigo"
    },
    {
        title: "3. Tag vs. No Tag",
        desc: "Browsers are literal. If you type text without 'Tags', the browser doesn't know if it's a heading or a paragraph, so everything is just clumped together (inline). With Tags like <h1> or <p>, we tell the browser: 'Hey, this is a Heading!' or 'This is a new Paragraph!'. This creates a clean layout (block level).",
        visualType: "tags_vs_none",
        color: "red"
    },
    {
        title: "4. Tag Anatomy (The Burger)",
        desc: "Almost all HTML elements follow the 'Burger' pattern. There's the Top Bun (Opening Tag <name>), the Meat (Content in the middle), and the Bottom Bun (Closing Tag </name>). Notice the forward slash '/' in the closing tag. Forgetting to close can break the layout below it.",
        visualType: "tag_anatomy",
        color: "orange"
    },
    {
        title: "5. Headings (Hierarchy)",
        desc: "Headings aren't just large text; they are information structure. <h1> should only exist ONCE per page (Main Topic). <h2> for sub-chapters, <h3> for sub-sub-chapters, and so on up to <h6>. This helps Google (SEO) and readers understand your document's structure.",
        visualType: "headings",
        color: "yellow"
    },
    {
        title: "6. Text Formatting",
        desc: "HTML has special tags for emphasis. <b> or <strong> make text BOLD (important). <i> or <em> make text ITALIC (foreign terms/emphasis). <p> wraps text in a paragraph block with comfortable line spacing.",
        visualType: "text_formatting",
        color: "green"
    },
    {
        title: "7. DIV (The Magic Container)",
        desc: "The <div> (Division) tag is the most frequently used element. It has no default appearance but acts as a 'Box' or 'Group'. We wrap titles and paragraphs in a <div> so we can give them a background color or move their position together.",
        visualType: "div_box",
        color: "purple"
    },
    {
        title: "8. Images & Attributes",
        desc: "The <img> tag is unique because it's 'Self-Closing' (no closing </img> needed). It needs a 'src' (Source) attribute to know which image file to fetch. If the file isn't found, it shows a broken icon. Use the 'width' attribute to adjust its size.",
        visualType: "image_src",
        color: "pink"
    },
    {
        title: "9. Links (Anchors)",
        desc: "The <a> (Anchor) tag connects one page to another. The 'href' attribute is the destination address. If filled with '#', it means 'Link to oneself' or a placeholder. Links are blue and underlined by default.",
        visualType: "link_href",
        color: "teal"
    },
    {
        title: "10. Lists (Listing Items)",
        desc: "There are two main types of lists. <ul> (Unordered List) uses bullet points for random lists (like ingredients). <ol> (Ordered List) uses numbers 1, 2, 3 for sequential steps. Every item inside must be wrapped in an <li> (List Item) tag.",
        visualType: "lists",
        color: "cyan"
    },
    {
        title: "11. Box Model (Crucial!)",
        desc: "Every HTML element is a box! MARGIN = Transparent space OUTSIDE the box (pushes other elements away). BORDER = The box's edge. PADDING = Space INSIDE the box (between the border and content). Understanding this is key to layout stability.",
        visualType: "box_model",
        color: "orange"
    },
    {
        title: "12. Bootstrap Class Magic",
        desc: "Instead of writing manual CSS like 'background-color: blue; color: white;', Bootstrap gives us 'Shortcuts' or Classes. Just type class='bg-primary text-white p-2', and boom! The appearance changes instantly. This speeds up work by 3x.",
        visualType: "bootstrap_magic",
        color: "blue"
    },
    {
        title: "13. Tables (Grid Data)",
        desc: "To display structured data (like schedules or grades), use <table>. Inside, there are <tr> (Row) and <td> (Data/Cell). Use Bootstrap's 'table table-bordered' classes for a professional-looking table instantly.",
        visualType: "table_grid",
        color: "indigo"
    },
    {
        title: "14. Forms (Data Input)",
        desc: "Interactive websites need Input! The <input> tag allowing users to type. There are type='text' (name), type='email', or type='password'. Wrap them in a <form> and provide a <button> to send that data.",
        visualType: "input_form",
        color: "red"
    },
    {
        title: "15. Semantic HTML (Meaningful Tags)",
        desc: "Don't use <div> for everything! Use <header> for the head, <footer> for the foot, <nav> for menus, and <article> for content. This makes your code 'readable' by humans and search engines like Google (SEO Friendly).",
        visualType: "semantic_layout",
        color: "green"
    }
];
