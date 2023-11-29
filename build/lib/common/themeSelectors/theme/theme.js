/* eslint-disable max-lines */
import themes from '@naturacosmeticos/natds-themes/react-native';
export const buildTheme = (brand, mode) => {
    if (!brand || !mode)
        throw new Error('No brand or mode found. To build a theme, you have to provide this.');
    if (!themes)
        throw new Error('Unable to load tokens dependency. Check the installation logs for errors');
    return themes[brand][mode];
};
export const getTheme = (selector) => ({ theme }) => selector(theme);
export const checkTheme = (theme) => {
    if (!theme)
        throw new Error('Can not find theme. Check your ThemeProvider setup');
    return theme;
};
//# sourceMappingURL=theme.js.map