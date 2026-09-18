'use client';

import { useState } from 'react';
import { Phase, CanvasItem, UserCodes } from '@frontend/lib/types';

/**
 * Custom hook for managing game state
 * Handles phase navigation, completed modules, and canvas items
 */
export function useGame() {
    // Current learning phase
    const [phase, setPhase] = useState<Phase>('intro');

    // Completed workshop module IDs
    const [completedModules, setCompletedModules] = useState<number[]>([]);

    // User's custom code for each template
    const [userCodes, setUserCodes] = useState<UserCodes>({});

    // Builder canvas items
    const [canvasItems, setCanvasItems] = useState<CanvasItem[]>([]);

    // Selected item ID in builder
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    /**
     * Mark a workshop module as complete and save the user's code
     */
    const markModuleComplete = (id: number, templateId: string, code: string) => {
        if (!completedModules.includes(id)) {
            setCompletedModules(prev => [...prev, id]);
        }
        setUserCodes(prev => ({ ...prev, [templateId]: code }));
    };

    /**
     * Add a new item to the builder canvas
     */
    const addCanvasItem = (type: string, htmlCode: string) => {
        const newItem: CanvasItem = {
            uniqueId: Date.now(),
            type,
            htmlCode
        };
        setCanvasItems(prev => [...prev, newItem]);
    };

    /**
     * Update an existing canvas item's HTML
     */
    const updateCanvasItem = (uniqueId: number, htmlCode: string) => {
        setCanvasItems(prev =>
            prev.map(item =>
                item.uniqueId === uniqueId ? { ...item, htmlCode } : item
            )
        );
    };

    /**
     * Remove an item from the builder canvas
     */
    const removeCanvasItem = (uniqueId: number) => {
        setCanvasItems(prev => prev.filter(item => item.uniqueId !== uniqueId));
        if (selectedItemId === uniqueId) {
            setSelectedItemId(null);
        }
    };

    return {
        // State
        phase,
        completedModules,
        userCodes,
        canvasItems,
        selectedItemId,

        // Actions
        setPhase,
        markModuleComplete,
        addCanvasItem,
        updateCanvasItem,
        removeCanvasItem,
        setCanvasItems,
        setSelectedItemId,
    };
}
