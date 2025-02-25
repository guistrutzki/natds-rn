/* eslint-disable max-lines */
import styled from 'styled-components/native';
import { getColorMediumEmphasis, getColorLowEmphasis, getColorOnBackground, getColorPrimary, getColorSurface, getSpacingSmall, getSizeLargeX, getSizeMedium, getShadowBySize, buildTheme } from '../../common/themeSelectors';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { Icon } from '../Icon';
const getTabButtonStyles = (theme, type, brand) => {
    const styles = {
        primary: {
            borderBottomColor: getColorPrimary(theme)
        },
        secondary: {
            borderColor: 'transparent'
        }
    };
    if (brand) {
        const themeSelectTab = buildTheme(brand, 'light');
        const stylesTheme = {
            primary: {
                borderBottomColor: getColorPrimary(themeSelectTab)
            },
            secondary: {
                borderColor: 'transparent'
            }
        };
        return stylesTheme[type];
    }
    return styles[type];
};
export const getTabTextStyles = (theme, type) => {
    const styles = {
        primary: getColorOnBackground(theme),
        secondary: getColorMediumEmphasis(theme)
    };
    return styles[type];
};
export const getDisplayTextStyles = ({ theme, iconPosition }) => {
    if (iconPosition) {
        const styles = {
            icon: {
                display: 'none'
            },
            leading: {
                paddingLeft: theme.spacing.micro
            },
            top: {
                paddingTop: theme.spacing.micro
            }
        };
        return styles[iconPosition];
    }
    return {};
};
export const getTabTextColor = ({ disabled, theme, type }) => {
    if (disabled) {
        return { color: getColorLowEmphasis(theme) };
    }
    return { color: getTabTextStyles(theme, type) };
};
export const getTabWrapperElevation = ({ elevation, theme }) => (elevation ? getShadowBySize(theme, 'micro') : { elevation: 0 });
export const TabWrapper = styled.View.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})(({ theme, backgroundColor, iconPosition, elevation }) => (Object.assign(Object.assign({}, getTabWrapperElevation({ elevation, theme })), { backgroundColor: backgroundColor ? getColorSurface(theme) : 'transparent', border: 'none', flexDirection: 'row', height: iconPosition === 'icon' ? getSizeMedium(theme) : getSizeLargeX(theme) })));
export const TabButton = styled(TouchableRipple)(({ type, theme, brand }) => (Object.assign(Object.assign({}, getTabButtonStyles(theme, type, brand)), { alignItems: 'center', borderBottomWidth: 2, borderStyle: 'solid', flex: 1, justifyContent: 'center', minWidth: getSizeLargeX(theme), paddingHorizontal: getSpacingSmall(theme) })));
export const TabText = styled.Text(({ type, theme, iconPosition, disabled = false }) => (Object.assign(Object.assign(Object.assign({}, getDisplayTextStyles({ iconPosition, theme })), getTabTextColor({ disabled, theme, type })), { fontFamily: theme.tab.label.primary.fontFamily, fontSize: theme.tab.label.fontSize, fontWeight: theme.tab.label.primary.fontWeight, letterSpacing: theme.tab.label.letterSpacing, lineHeight: theme.tab.label.fontSize * theme.tab.label.lineHeight })));
export const TabButtonContent = styled.View(({ iconPosition }) => ({
    alignItems: 'center',
    flexDirection: iconPosition === 'leading' ? 'row' : 'column'
}));
export const TabIcon = styled(Icon)(({ theme, type, disabled }) => (Object.assign({}, getTabTextColor({ disabled, theme, type }))));
//# sourceMappingURL=Tab.styles.js.map