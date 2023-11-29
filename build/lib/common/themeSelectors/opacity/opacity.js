import { checkTheme } from '../theme/theme';
const getOpacity = (theme) => checkTheme(theme).opacity;
export const getOpacityMediumLow = (theme) => getOpacity(theme).mediumLow;
export const getOpacityMedium = (theme) => getOpacity(theme).medium;
export const getOpacityDisabledLow = (theme) => getOpacity(theme).disabledLow;
export const getOpacityMediumHigh = (theme) => getOpacity(theme).mediumHigh;
export const getOpacityHigh = (theme) => getOpacity(theme).high;
export const getOpacityVeryHigh = (theme) => getOpacity(theme).veryHigh;
/**
 * @Deprecated use `getOpacityMediumHigh` instead
 */
export const getOpacity56 = (theme) => getOpacityMediumHigh(theme);
/**
 * @Deprecated use `getOpacityHigh` instead
 */
export const getOpacity10 = (theme) => getOpacityHigh(theme);
//# sourceMappingURL=opacity.js.map