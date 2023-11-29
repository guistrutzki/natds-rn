import styled from 'styled-components/native';
import { getColorHighEmphasis, getColorLowEmphasis, getColorMediumEmphasis, getColorSurface, getSize, getSizeMediumX, getSpacingMicro, getSpacingSmall } from '../../common/themeSelectors';
export const Label = styled.Text(({ theme }) => ({
    color: getColorMediumEmphasis(theme),
    fontFamily: theme.counter.label.primary.fontFamily,
    fontSize: theme.counter.label.fontSize,
    fontWeight: theme.counter.label.primary.fontWeight,
    letterSpacing: theme.counter.label.letterSpacing,
    lineHeight: theme.counter.label.fontSize * theme.counter.label.lineHeight,
    marginBottom: getSpacingMicro(theme)
}));
export const Container = styled.View(({ size, theme }) => ({
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: getColorSurface(theme),
    borderColor: getColorLowEmphasis(theme),
    borderRadius: theme.counter.borderRadius,
    borderWidth: 1,
    flexDirection: 'row',
    height: getSize(theme, size)
}));
export const Input = styled.TextInput(({ theme }) => ({
    borderColor: getColorLowEmphasis(theme),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    color: getColorHighEmphasis(theme),
    fontFamily: theme.counter.content.primary.fontFamily,
    fontSize: theme.counter.content.fontSize,
    fontWeight: theme.counter.content.primary.fontWeight,
    height: '100%',
    letterSpacing: theme.counter.content.letterSpacing,
    lineHeight: theme.counter.content.fontSize * theme.counter.content.lineHeight,
    paddingHorizontal: getSpacingSmall(theme),
    textAlign: 'center',
    width: getSizeMediumX(theme)
}));
//# sourceMappingURL=Counter.styles.js.map