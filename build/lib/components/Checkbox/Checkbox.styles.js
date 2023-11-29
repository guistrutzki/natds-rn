/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native';
import { getColorLowEmphasis, getColorMediumEmphasis, getColorOnBackground, getColorPrimary, getColorSecondary, getSpacingTiny, buildTheme } from '../../common/themeSelectors';
function getBoxColor(selected = false, disabled, color, theme, brand, mode) {
    if (disabled) {
        return getColorLowEmphasis(theme);
    }
    if (selected) {
        if (brand) {
            const themeSwitch = buildTheme(brand, mode !== null && mode !== void 0 ? mode : 'light');
            return color === 'secondary' ? getColorSecondary(themeSwitch) : getColorPrimary(themeSwitch);
        }
        return color === 'secondary' ? getColorSecondary(theme) : getColorPrimary(theme);
    }
    return getColorMediumEmphasis(theme);
}
const getlabelColor = (theme, brand, mode) => {
    if (brand) {
        const themeSelectLabel = buildTheme(brand, mode !== null && mode !== void 0 ? mode : 'light');
        return getColorOnBackground(themeSelectLabel);
    }
    return getColorOnBackground(theme);
};
export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 1
}) `
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.Text(({ theme, disabled, brand, mode }) => ({
    color: disabled ? getColorLowEmphasis(theme) : getlabelColor(theme, brand, mode),
    fontFamily: theme.checkbox.label.primary.fontFamily,
    fontSize: theme.checkbox.label.fontSize,
    fontWeight: theme.checkbox.label.primary.fontWeight,
    letterSpacing: theme.checkbox.label.letterSpacing,
    lineHeight: theme.checkbox.label.fontSize * theme.checkbox.label.lineHeight,
    marginLeft: getSpacingTiny(theme)
}));
export const Box = styled.View(({ theme, color = 'primary', brand, mode, selected, disabled = false }) => ({
    alignItems: 'center',
    backgroundColor: selected ? getBoxColor(selected, disabled, color, theme, brand, mode) : 'transparent',
    borderColor: getBoxColor(selected, disabled, color, theme, brand, mode),
    borderRadius: theme.checkbox.borderRadius,
    borderWidth: 2,
    height: 20,
    justifyContent: 'center',
    width: 20
}));
export const Wrapper = styled.View(({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: 8
}));
//# sourceMappingURL=Checkbox.styles.js.map