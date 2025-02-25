import { checkTheme } from '../theme/theme';
const getSpacings = (theme) => checkTheme(theme).spacing;
export const getSpacingNone = (theme) => getSpacings(theme).none;
export const getSpacingMicro = (theme) => getSpacings(theme).micro;
export const getSpacingTiny = (theme) => getSpacings(theme).tiny;
export const getSpacingSmall = (theme) => getSpacings(theme).small;
export const getSpacingStandard = (theme) => getSpacings(theme).standard;
export const getSpacingLarge = (theme) => getSpacings(theme).large;
export const getSpacingXLarge = (theme) => getSpacings(theme).xLarge;
export const getSpacingBySize = (size, theme) => getSpacings(theme)[size];
//# sourceMappingURL=spacing.js.map