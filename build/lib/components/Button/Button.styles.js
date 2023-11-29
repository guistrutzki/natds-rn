/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native';
import { buildTheme, getShadowBySize, getSizeMedium, getSizeSemi, getSizeSemiX, getSpacingMicro, getSpacingSmall, getSpacingTiny } from '../../common/themeSelectors';
export const getButtonStylesBySize = ({ size, theme }) => {
    const buttonSizes = {
        large: {
            minHeight: getSizeMedium(theme),
            paddingHorizontal: getSpacingSmall(theme)
        },
        medium: {
            minHeight: getSizeMedium(theme),
            paddingHorizontal: getSpacingSmall(theme)
        },
        semi: {
            minHeight: getSizeSemi(theme),
            paddingHorizontal: getSpacingMicro(theme)
        },
        semiX: {
            minHeight: getSizeSemiX(theme),
            paddingHorizontal: getSpacingTiny(theme)
        },
        small: {
            minHeight: getSizeSemi(theme),
            paddingHorizontal: getSpacingMicro(theme)
        }
    };
    return size && buttonSizes[size];
};
export const getButtonShadowByType = ({ disabled, theme, type }) => (type === 'contained' && !disabled
    ? getShadowBySize(theme, 'tiny')
    : { elevation: 0 });
const getSelectTheme = ({ theme, type, brand }) => {
    if (brand) {
        const themeSelected = buildTheme(brand, 'light');
        return type && {
            back: themeSelected.button[type].color.enable.background,
            border: themeSelected.button[type].color.enable.border,
            label: themeSelected.button[type].color.enable.label
        };
    }
    return type && {
        back: theme.button[type].color.enable.background,
        border: theme.button[type].color.enable.border,
        label: theme.button[type].color.enable.label
    };
};
export const Surface = styled.View(({ disabled = false, size, theme, brand, type = 'contained' }) => {
    var _a, _b;
    return (Object.assign(Object.assign(Object.assign({}, getButtonStylesBySize({ size, theme })), getButtonShadowByType({ disabled, theme, type })), { alignContent: 'center', alignItems: 'center', background: disabled
            ? theme.button[type].color.disable.background
            : (_a = getSelectTheme({ theme, type, brand })) === null || _a === void 0 ? void 0 : _a.back, borderColor: disabled
            ? theme.button[type].color.disable.border
            : (_b = getSelectTheme({ theme, type, brand })) === null || _b === void 0 ? void 0 : _b.border, borderRadius: theme.button.borderRadius, borderWidth: type === 'outlined' ? 1 : 0, justifyContent: 'center' }));
});
export const Label = styled.View(({ iconPosition }) => ({
    alignItems: 'center',
    flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse'
}));
export const LabelText = styled.Text(({ iconName, iconPosition, type, theme, brand, disabled = false }) => {
    var _a;
    return ({
        color: disabled ? theme.button[type].color.disable.label : (_a = getSelectTheme({ theme, type, brand })) === null || _a === void 0 ? void 0 : _a.label,
        fontFamily: theme.button.label.primary.fontFamily,
        fontSize: theme.button.label.fontSize,
        fontWeight: theme.button.label.primary.fontWeight,
        letterSpacing: theme.button.label.letterSpacing,
        lineHeight: 19,
        marginEnd: iconName && iconPosition === 'right' ? getSpacingTiny(theme) : 0,
        marginStart: iconName && iconPosition === 'left' ? getSpacingTiny(theme) : 0
    });
});
//# sourceMappingURL=Button.styles.js.map