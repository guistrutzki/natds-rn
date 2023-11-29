import styled from 'styled-components/native';
import { buildTheme } from '../../common/themeSelectors';
const getThemeBadge = (theme) => ({ color, brand }) => {
    if (brand) {
        const themeSelected = buildTheme(brand, 'light');
        return {
            back: themeSelected.badge.color[color].background,
            label: themeSelected.badge.color[color].label
        };
    }
    return {
        back: theme.badge.color[color].background,
        label: theme.badge.color[color].label
    };
};
export const convertPulseToDot = (variant) => (variant === 'pulse' ? 'dot' : variant);
export const getHorizontalPadding = (variant, theme) => (variant === 'standard' && {
    paddingHorizontal: theme.spacing.micro
});
export const getWidthByVariant = (variant, theme) => (variant !== 'standard' && {
    width: theme.badge[convertPulseToDot(variant)].height
});
export const Container = styled.View(() => ({
    alignContent: 'center',
    alignItems: 'center'
}));
export const BadgeBase = styled.View(({ theme, color, variant = 'standard', brand }) => (Object.assign(Object.assign({}, getWidthByVariant(variant, theme)), { backgroundColor: getThemeBadge(theme)({ color, brand }).back, borderRadius: theme.badge[convertPulseToDot(variant)].borderRadius, height: theme.badge[convertPulseToDot(variant)].height })));
export const Circle = styled(BadgeBase)(({ theme, variant = 'standard' }) => (Object.assign(Object.assign({}, getHorizontalPadding(variant, theme)), { alignContent: 'center', justifyContent: 'center' })));
export const Label = styled.Text(({ theme, color, variant = 'standard', brand }) => ({
    color: getThemeBadge(theme)({ color, brand }).label,
    fontFamily: theme.badge.label.primary.fontFamily,
    fontSize: theme.badge.label.fontSize,
    fontWeight: theme.badge.label.primary.fontWeight,
    letterSpacing: theme.badge.label.letterSpacing,
    lineHeight: theme.badge[convertPulseToDot(variant)].height,
    textAlignVertical: 'center'
}));
//# sourceMappingURL=Badge.styles.js.map