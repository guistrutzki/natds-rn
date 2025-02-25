/* eslint-disable max-len */
import styled from 'styled-components/native';
import { getColorPrimary, getColorSurface, getSize, buildTheme } from '../../common/themeSelectors';
const getThemeProgress = (theme, brand) => {
    if (brand) {
        const themeSelected = buildTheme(brand, 'light');
        return getColorPrimary(themeSelected);
    }
    return getColorPrimary(theme);
};
export const Layer = styled.View(({ size, theme }) => ({
    height: getSize(theme, size),
    width: getSize(theme, size)
}));
export const View = styled(Layer)(({ size, showLayer, theme }) => ({
    alignItems: 'center',
    backgroundColor: showLayer ? getColorSurface(theme) : 'transparent',
    borderRadius: (getSize(theme, size) + 4) / 2,
    display: 'flex',
    height: getSize(theme, size) + 4,
    justifyContent: 'center',
    width: getSize(theme, size) + 4
}));
export const Line = styled(Layer)(({ theme, size, brand }) => ({
    borderColor: getThemeProgress(theme, brand),
    borderRadius: theme.progressIndicator[size].borderRadius,
    borderWidth: getSize(theme, size) / 10
}));
export const Container = styled(Layer)(({ size, theme }) => ({
    height: getSize(theme, size) / 2,
    overflow: 'hidden'
}));
//# sourceMappingURL=ProgressIndicator.styles.js.map