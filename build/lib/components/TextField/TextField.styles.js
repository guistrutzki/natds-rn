import { css } from 'styled-components';
import styled from 'styled-components/native';
import { buildColorWithOpacity, getColorHighEmphasis, getColorLowEmphasis, getColorMediumEmphasis, getColorSurface, getOpacityDisabledLow, getSizeLarge, getSizeMedium, getSizeMediumX, getSpacingSmall, getSpacingTiny } from '../../common/themeSelectors';
const isSizeMediumX = (size) => size === 'mediumX';
const getFieldHeight = (size, theme) => (isSizeMediumX(size) ? getSizeMediumX(theme) : getSizeMedium(theme));
const getReadonlyColor = (theme) => buildColorWithOpacity(getColorLowEmphasis, getOpacityDisabledLow, theme);
const getTextColor = (disabled, theme) => (disabled ? getColorLowEmphasis(theme) : getColorHighEmphasis(theme));
export const getPlaceholderTextColor = (disabled, theme) => (disabled ? getColorLowEmphasis(theme) : getColorMediumEmphasis(theme));
export const Input = styled.TextInput `
  ${({ disabled, hasActionIcon, readonly, size, theme, multiline = false }) => css `
    background-color: ${readonly ? getReadonlyColor(theme) : getColorSurface(theme)};
    border-radius: ${theme.textField.borderRadius}px;
    color: ${getTextColor(disabled, theme)};
    flex-grow: 1;
    font-family: ${theme.textField.content.primary.fontFamily};
    font-size: ${theme.textField.content.fontSize}px;
    font-weight: ${theme.textField.content.primary.fontWeight};
    letter-spacing: ${theme.textField.content.letterSpacing}px;
    max-width: 100%;
    ${multiline && `line-height: ${theme.textField.content.fontSize * theme.textField.content.lineHeight}px;`};
    min-height: ${getFieldHeight(size, theme)}px;
    overflow: hidden;
    padding-left: ${getSpacingSmall(theme)}px;
    padding-right: ${hasActionIcon ? 0 : getSpacingSmall(theme)}px;
    width: 10px;
  `}
`;
export const ActionImage = styled.View(({ size, theme }) => ({
    borderBottomRightRadius: `${theme.textField.borderRadius}px`,
    borderTopRightRadius: `${theme.textField.borderRadius}px`,
    maxHeight: getFieldHeight(size, theme),
    overflow: 'hidden',
    width: getSizeLarge(theme)
}));
export const ActionIcon = styled.View(({ theme }) => ({
    paddingHorizontal: getSpacingTiny(theme)
}));
//# sourceMappingURL=TextField.styles.js.map