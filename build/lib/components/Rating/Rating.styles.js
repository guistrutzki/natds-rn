/* eslint-disable max-len */
import styled from 'styled-components/native';
const getLabelMargin = ({ theme, variant }) => (variant === 'input' && {
    marginTop: theme.spacing.micro
});
const getWrapperAlign = ({ variant }) => (variant === 'counter' && {
    alignItems: 'center'
});
const getWrapperDirection = ({ variant, align }) => {
    if (variant === 'input') {
        return 'column';
    }
    if (align === 'right') {
        return 'row-reverse';
    }
    return 'row';
};
const getContentMargin = ({ theme, align, variant }) => {
    if (align === 'right' && variant === 'counter') {
        return {
            marginLeft: theme.spacing.micro
        };
    }
    if (align === 'left' && variant === 'counter') {
        return {
            marginRight: theme.spacing.micro
        };
    }
    return { marginHorizontal: 0 };
};
export const Wrapper = styled.View(({ theme, variant, align = 'left' }) => (Object.assign(Object.assign({}, getWrapperAlign({ variant })), { flexDirection: getWrapperDirection({ align, theme, variant }) })));
export const Content = styled.View(({ theme, variant, align }) => (Object.assign(Object.assign({}, getContentMargin({ align, theme, variant })), { flexDirection: 'row' })));
export const Label = styled.Text(({ theme, variant }) => (Object.assign(Object.assign({}, getLabelMargin({ theme, variant })), { color: theme.color.mediumEmphasis, fontFamily: theme.rating[variant].label.primary.fontFamily, fontSize: theme.rating[variant].label.fontSize, fontWeight: theme.rating[variant].label.primary.fontWeight, letterSpacing: theme.rating[variant].label.letterSpacing, lineHeight: theme.rating[variant].label.fontSize * theme.rating[variant].label.lineHeight })));
//# sourceMappingURL=Rating.styles.js.map