/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native';
import { buildTheme, getShadowBySize, getSizeMedium, getSizeSemi, getSizeSemiX, getSpacingMicro, getSpacingSmall, getSpacingTiny } from '../../common/themeSelectors';
export const getButtonStylesBySize = ({ size, theme, brand, mode }) => {
    if (brand) {
        const colorThemeBrand = buildTheme(brand, mode);
        const buttonSizesBrand = {
            large: {
                minHeight: getSizeMedium(colorThemeBrand),
                paddingHorizontal: getSpacingSmall(colorThemeBrand)
            },
            medium: {
                minHeight: getSizeMedium(colorThemeBrand),
                paddingHorizontal: getSpacingSmall(colorThemeBrand)
            },
            semi: {
                minHeight: getSizeSemi(colorThemeBrand),
                paddingHorizontal: getSpacingMicro(colorThemeBrand)
            },
            semiX: {
                minHeight: getSizeSemiX(colorThemeBrand),
                paddingHorizontal: colorThemeBrand.button.paddingX
            },
            small: {
                minHeight: getSizeSemi(colorThemeBrand),
                paddingHorizontal: getSpacingMicro(colorThemeBrand)
            }
        };
        return size && buttonSizesBrand[size];
    }
    const buttonSizes = {
        large: {
            minHeight: getSizeMedium(theme),
            paddingHorizontal: theme.button.paddingX
        },
        medium: {
            minHeight: getSizeMedium(theme),
            paddingHorizontal: theme.button.paddingX
        },
        semi: {
            minHeight: getSizeSemi(theme),
            paddingHorizontal: theme.button.paddingX
        },
        semiX: {
            minHeight: getSizeSemiX(theme),
            paddingHorizontal: theme.button.paddingX
        },
        small: {
            minHeight: getSizeSemi(theme),
            paddingHorizontal: theme.button.paddingX
        }
    };
    return size && buttonSizes[size];
};
export const getButtonShadowByType = ({ disabled, theme, type }) => (type === 'contained' && !disabled
    ? getShadowBySize(theme, 'none')
    : { elevation: 0 });
export const getSelectTheme = (brand, { theme, type, color, mode }) => {
    if (brand) {
        const colorTheme = buildTheme(brand, mode);
        let propBrandsColor = {};
        if (type && color) {
            propBrandsColor = {
                back: colorTheme.button[type].color[color].background,
                border: colorTheme.button[type].color[color].border,
                label: colorTheme.button[type].color[color].label,
                buttonBorderRadius: colorTheme.button.borderRadius,
                textransform: colorTheme.button.textTransform
            };
            return type && Object.assign({}, propBrandsColor);
        }
    }
    return (type && color) && {
        back: theme.button[type].color[color].background,
        border: theme.button[type].color[color].border,
        label: theme.button[type].color[color].label,
        buttonBorderRadius: theme.button.borderRadius,
        textransform: theme.button.textTransform
    };
};
export const Surface = styled.View(({ disabled = false, size, theme, color, brand, mode, type = 'contained' }) => {
    var _a, _b, _c;
    return (Object.assign(Object.assign(Object.assign({}, getButtonStylesBySize({
        size, theme, brand, mode
    })), getButtonShadowByType({ disabled, theme, type })), { alignContent: 'center', alignItems: 'center', background: disabled
            ? theme.color.surfaceDisabled
            : (_a = getSelectTheme(brand, {
                theme, type, color, mode
            })) === null || _a === void 0 ? void 0 : _a.back, borderColor: disabled
            ? theme.color.surfaceDisabled
            : (_b = getSelectTheme(brand, {
                theme, type, color, mode
            })) === null || _b === void 0 ? void 0 : _b.border, borderRadius: (_c = getSelectTheme(brand, {
            theme, type, color, mode
        })) === null || _c === void 0 ? void 0 : _c.buttonBorderRadius, borderWidth: type === 'outlined' ? 1 : 0, justifyContent: 'center' }));
});
export const Label = styled.View(({ iconPosition }) => ({
    alignItems: 'center',
    flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse'
}));
export const LabelText = styled.Text(({ iconName, iconPosition, type, color, theme, brand, mode, textTransform, disabled = false }) => {
    var _a, _b;
    return ({
        color: disabled ? theme.color.onSurfaceDisabled : (_a = getSelectTheme(brand, {
            theme, type, color, mode
        })) === null || _a === void 0 ? void 0 : _a.label,
        fontFamily: theme.button.label.primary.fontFamily,
        fontSize: theme.button.label.fontSize,
        fontWeight: theme.button.label.primary.fontWeight,
        letterSpacing: theme.button.label.letterSpacing,
        lineHeight: 19,
        textTransform: textTransform || ((_b = getSelectTheme(brand, {
            theme, type, color, mode
        })) === null || _b === void 0 ? void 0 : _b.textransform),
        marginEnd: iconName && iconPosition === 'right' ? getSpacingTiny(theme) : 0,
        marginStart: iconName && iconPosition === 'left' ? getSpacingTiny(theme) : 0
    });
});
//# sourceMappingURL=GayaButton.styles.js.map