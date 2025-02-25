import { checkTheme } from '../theme/theme';
const getElevation = (theme) => checkTheme(theme).elevation;
export const getShadowBySize = (theme, size) => {
    const { elevation, shadowColor, shadowOffsetHeight, shadowOffsetWidth, shadowOpacity, shadowRadius } = getElevation(theme)[size];
    return {
        elevation,
        shadowColor,
        shadowOffset: `${shadowOffsetWidth}px ${shadowOffsetHeight}px`,
        shadowOpacity,
        shadowRadius
    };
};
//# sourceMappingURL=effects.js.map