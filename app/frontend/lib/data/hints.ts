import { HintCategory } from '@frontend/lib/types';

/**
 * Common Hints Data
 * Reusable hint categories for workshops and builder
 */
export const commonHints: Record<string, HintCategory> = {
    colors: {
        category: "Colors",
        items: [
            { code: "bg-primary", desc: "Blue Background" },
            { code: "bg-success", desc: "Green Background" },
            { code: "bg-danger", desc: "Red Background" },
            { code: "bg-warning", desc: "Yellow Background" },
            { code: "bg-dark", desc: "Black Background" },
            { code: "bg-light", desc: "Gray Background" },
            { code: "text-primary", desc: "Blue Text" },
            { code: "text-white", desc: "White Text" },
            { code: "text-muted", desc: "Faded Text" }
        ]
    },
    shapes: {
        category: "Shapes & Borders",
        items: [
            { code: "rounded", desc: "Rounded Corners" },
            { code: "rounded-circle", desc: "Circle" },
            { code: "rounded-pill", desc: "Pill/Oval" },
            { code: "border-0", desc: "No Border" },
            { code: "shadow-sm", desc: "Thin Shadow" },
            { code: "shadow", desc: "Medium Shadow" }
        ]
    },
    layout: {
        category: "Layout",
        items: [
            { code: "text-center", desc: "Center Align" },
            { code: "d-flex justify-content-center", desc: "Flex Center" },
            { code: "p-3", desc: "Medium Padding" },
            { code: "m-3", desc: "Medium Margin" },
            { code: "gap-2", desc: "Spacing Between Elements" }
        ]
    },
    components: {
        category: "Components",
        items: [
            { code: "btn btn-primary", desc: "Blue Button" },
            { code: "card", desc: "Card Container" },
            { code: "badge bg-success", desc: "Green Label" },
            { code: "alert alert-info", desc: "Blue Info Box" },
            { code: "table table-striped", desc: "Striped Table" },
            { code: "form-control", desc: "Form Input" },
            { code: "list-group", desc: "List Group" }
        ]
    }
};

/**
 * Cheat Sheet Data
 * Complete reference for builder mode
 */
export const cheatSheetData: HintCategory[] = [
    commonHints.layout,
    {
        category: "Spacing",
        items: [
            { code: "m-3", desc: "Outer Margin (All sides)" },
            { code: "mt-3", desc: "Top Margin" },
            { code: "mb-3", desc: "Bottom Margin" },
            { code: "mx-auto", desc: "Center (Horizontal)" },
            { code: "p-3", desc: "Inner Padding (All sides)" },
            { code: "px-4", desc: "Left-Right Padding" }
        ]
    },
    commonHints.colors,
    commonHints.shapes,
    commonHints.components
];
