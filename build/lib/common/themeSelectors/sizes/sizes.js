import { checkTheme } from '../theme/theme';
const getRadiusSizes = (theme) => checkTheme(theme).borderRadius;
export const getRadiusBySize = (theme, size) => getRadiusSizes(theme)[size];
export const getBorderRadiusMedium = (theme) => getRadiusBySize(theme, 'medium');
export const getSize = (theme, size) => checkTheme(theme).size[size];
export const getSizeSemi = (theme) => getSize(theme, 'semi');
export const getSizeSemiX = (theme) => getSize(theme, 'semiX');
export const getSizeMedium = (theme) => getSize(theme, 'medium');
export const getSizeMediumX = (theme) => getSize(theme, 'mediumX');
export const getSizeLarge = (theme) => getSize(theme, 'large');
export const getSizeLargeX = (theme) => getSize(theme, 'largeX');
//# sourceMappingURL=sizes.js.map