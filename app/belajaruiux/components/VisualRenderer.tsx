import React from 'react';
import { UiUxComparison } from './visuals/UiUxComparison';
import { ColorUiModal } from './visuals/ColorUiModal';
import { TypographyWireframe } from './visuals/TypographyWireframe';
import { WhitespaceCards } from './visuals/WhitespaceCards';
import { FPatternWireframe } from './visuals/FPatternWireframe';
import { ConsistencyApp } from './visuals/ConsistencyApp';
import { IconNavbar } from './visuals/IconNavbar';
import { ButtonStateDemo } from './visuals/ButtonStateDemo';
import { WireframeToUi } from './visuals/WireframeToUi';
import { GridSystemDemo } from './visuals/GridSystemDemo';
import { GestaltProximity } from './visuals/GestaltProximity';
import { A11yColorblind } from './visuals/A11yColorblind';
import { ThumbZoneDemo } from './visuals/ThumbZoneDemo';
import { SkeletonDemo } from './visuals/SkeletonDemo';
import { DarkModeDemo } from './visuals/DarkModeDemo';
import { EmptyStateDemo } from './visuals/EmptyStateDemo';
import { FormLabelDemo } from './visuals/FormLabelDemo';
import { BreadcrumbDemo } from './visuals/BreadcrumbDemo';
import { AffordanceDemo } from './visuals/AffordanceDemo';
import { TypoAdvancedDemo } from './visuals/TypoAdvancedDemo';

interface VisualRendererProps {
    type: string;
}

export const VisualRenderer: React.FC<VisualRendererProps> = ({ type }) => {
    switch (type) {
        case 'ui_ux_comparison': return <UiUxComparison />;
        case 'color_ui_modal': return <ColorUiModal />;
        case 'typography_wireframe': return <TypographyWireframe />;
        case 'whitespace_cards': return <WhitespaceCards />;
        case 'f_pattern_wireframe': return <FPatternWireframe />;
        case 'consistency_app': return <ConsistencyApp />;
        case 'icon_navbar': return <IconNavbar />;
        case 'button_state_demo': return <ButtonStateDemo />;
        case 'wireframe_to_ui': return <WireframeToUi />;
        case 'grid_system_demo': return <GridSystemDemo />;
        case 'gestalt_proximity': return <GestaltProximity />;
        case 'a11y_colorblind': return <A11yColorblind />;
        case 'thumb_zone_demo': return <ThumbZoneDemo />;
        case 'skeleton_demo': return <SkeletonDemo />;
        case 'dark_mode_demo': return <DarkModeDemo />;
        case 'empty_state_demo': return <EmptyStateDemo />;
        case 'form_label_demo': return <FormLabelDemo />;
        case 'breadcrumb_demo': return <BreadcrumbDemo />;
        case 'affordance_demo': return <AffordanceDemo />;
        case 'typo_advanced_demo': return <TypoAdvancedDemo />;
        default: return <div>Visual Loading...</div>;
    }
};
