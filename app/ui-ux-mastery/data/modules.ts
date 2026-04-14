import { Module } from "@belajar/types";

export const modules: Module[] = [
    { id: 1, title: "1. Definition: UI vs UX", desc: "UI is Visuals (Mockups, Colors, Icons). UX is Flow & Feel (Ease of use, Logic).", visualType: "ui_ux_comparison", tags: ["Basic Concepts"] },
    { id: 2, title: "2. Psychology: Color", desc: "Red = Danger/Destructive. Green/Blue = Safe/Positive. Colors affect user emotions.", visualType: "color_ui_modal", tags: ["Color"] },
    { id: 3, title: "3. Typography: Hierarchy", desc: "Headings must stand out (H1). Use standard sizes (14-16px) for body text for readability.", visualType: "typography_wireframe", tags: ["Typography"] },
    { id: 4, title: "4. White Space", desc: "Don't be stingy with spacing! Negative space lets the design 'breathe' and stay scannable.", visualType: "whitespace_cards", tags: ["Layout"] },
    { id: 5, title: "5. F-Pattern Scanning", desc: "Users read from left to right, then scan slightly down. It forms an 'F' shape.", visualType: "f_pattern_wireframe", tags: ["Scanning"] },
    { id: 6, title: "6. Consistency", desc: "Button placements and navigation must be consistent across pages to avoid user confusion.", visualType: "consistency_app", tags: ["Pattern"] },
    { id: 7, title: "7. Iconography", desc: "Use standard icons (Mental Models). 'Gear' for Settings, 'Home' for Dashboard.", visualType: "icon_navbar", tags: ["Semiotics"] },
    { id: 8, title: "8. Micro-interactions", desc: "Provide visual feedback when a button is pressed. Users need confirmation the system responded.", visualType: "button_state_demo", tags: ["Interaction"] },
    { id: 9, title: "9. Wireframe to UI", desc: "Create a black and white framework (Wireframe) first for structure, then move to colored UI.", visualType: "wireframe_to_ui", tags: ["Workflow"] },
    { id: 10, title: "10. Grid System & Gutter", desc: "12-column grids are the desktop standard. 'Gutter' is the space between columns.", visualType: "grid_system_demo", tags: ["Layout"] },
    { id: 11, title: "11. Gestalt Principle: Proximity", desc: "Objects close together are perceived as related. Form labels should be closer to their inputs.", visualType: "gestalt_proximity", tags: ["Psychology"] },
    { id: 12, title: "12. Accessibility (A11y)", desc: "Don't rely solely on color (for color blindness). Use supplementary text/icons.", visualType: "a11y_colorblind", tags: ["A11y"] },
    { id: 13, title: "13. Mobile Thumb Zone", desc: "The top-left area of a mobile screen is hard to reach with one hand. Place key buttons at the bottom.", visualType: "thumb_zone_demo", tags: ["Mobile"] },
    { id: 14, title: "14. Skeleton Screen", desc: "Use structural placeholders (Skeleton screens) during loading to make it feel faster than a spinner.", visualType: "skeleton_demo", tags: ["Performance"] },
    { id: 15, title: "15. Dark Mode: No Pure Black", desc: "Avoid #000000 on OLED screens due to the 'Smearing' effect. Use Dark Gray (#121212) instead.", visualType: "dark_mode_demo", tags: ["Theming"] },
    { id: 16, title: "16. Content: Empty States", desc: "Don't leave pages blank. Provide illustrations and actions (CTAs) to guide the user.", visualType: "empty_state_demo", tags: ["UX Writing"] },
    { id: 17, title: "17. Form: Label vs Placeholder", desc: "Labels outside inputs are better. Placeholders vanish on focus, taxing the user's memory.", visualType: "form_label_demo", tags: ["Forms"] },
    { id: 18, title: "18. Navigation: Breadcrumbs", desc: "Use Breadcrumbs (Home > Shoes > Nike) for deep-structure e-commerce sites.", visualType: "breadcrumb_demo", tags: ["Navigation"] },
    { id: 19, title: "19. Affordance & Signifiers", desc: "Objects must 'look' usable. Flat buttons without shadows are harder to perceive as buttons.", visualType: "affordance_demo", tags: ["Concept"] },
    { id: 20, title: "20. Advanced Typography", desc: "Line-height 1.5x the font size is ideal for reading. Left-aligned is more comfortable than Justified.", visualType: "typo_advanced_demo", tags: ["Typography"] },
];
