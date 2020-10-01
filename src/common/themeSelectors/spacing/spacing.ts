import { Theme, checkTheme } from '..';

const getSpacings = (theme: Theme) => checkTheme(theme).spacing;

export const getSpacingNone = (theme: Theme) => getSpacings(theme).none;
export const getSpacingTiny = (theme: Theme) => getSpacings(theme).tiny;
export const getSpacingSmall = (theme: Theme) => getSpacings(theme).small;
export const getSpacingStandard = (theme: Theme) => getSpacings(theme).standard;
export const getSpacingLarge = (theme: Theme) => getSpacings(theme).large;
export const getSpacingXLarge = (theme: Theme) => getSpacings(theme).xLarge;
export const getSpacingBySize = (size: string, theme: Theme) => getSpacings(theme)[size];
