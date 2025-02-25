/* eslint-disable max-len */
import styled from 'styled-components/native';
import { getSpacingSmall, getSpacingTiny } from '../../common/themeSelectors';
const getAlertStyles = (type = 'info', variant = 'standard', backgroundColorName = 'link', borderColorName = 'link') => (theme) => {
    const alertStylesMap = {
        info: 'link',
        error: 'alert',
        success: 'success',
        warning: 'warning'
    };
    const styles = {
        standard: {
            backgroundColor: `${theme.color[alertStylesMap[type]]}29`
        },
        filled: {
            backgroundColor: `${theme.color[alertStylesMap[type]]}29`
        },
        outlined: {
            backgroundColor: `${theme.color[alertStylesMap[type]]}29`,
            borderColor: theme.color[alertStylesMap[type]]
        },
        custom: {
            backgroundColor: `${theme.color[backgroundColorName]}29`,
            borderColor: theme.color[borderColorName]
        }
    };
    return type !== 'custom' ? styles[variant] : styles.custom;
};
export const AlertWrapper = styled.View(({ theme, type, variant, backgroundColorName, borderColorName }) => (Object.assign(Object.assign({}, getAlertStyles(type, variant, backgroundColorName, borderColorName)(theme)), { borderWidth: variant === 'outlined' ? 1 : 0, borderRadius: theme.alert.borderRadius, flexDirection: 'row', margin: getSpacingSmall(theme), padding: getSpacingSmall(theme) })));
export const AlertContent = styled.View(() => ({
    flexDirection: 'column',
    flexShrink: 1
}));
export const IconContent = styled.View(({ theme }) => ({
    marginRight: getSpacingTiny(theme),
    marginTop: 2
}));
export const AlertTitle = styled.Text(({ theme, titleColorName = 'neutral900' }) => ({
    flexWrap: 'wrap',
    color: theme.color[titleColorName],
    fontFamily: theme.alert.title.primary.fontFamily,
    fontSize: theme.alert.title.fontSize,
    fontWeight: theme.alert.title.primary.fontWeight,
    letterSpacing: theme.alert.title.letterSpacing,
    lineHeight: theme.alert.title.fontSize * theme.alert.title.lineHeight,
    marginBottom: getSpacingTiny(theme)
}));
export const AlertText = styled.Text(({ theme, messageColorName = 'neutral900' }) => ({
    color: theme.color[messageColorName],
    fontFamily: theme.alert.content.primary.fontFamily,
    fontSize: theme.alert.content.fontSize,
    fontWeight: theme.alert.content.primary.fontWeight,
    letterSpacing: theme.alert.content.letterSpacing,
    lineHeight: theme.alert.content.fontSize * theme.alert.content.lineHeight
}));
//# sourceMappingURL=Alert.styles.js.map