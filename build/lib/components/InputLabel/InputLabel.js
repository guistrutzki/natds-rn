import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { getColorMediumEmphasis, getSpacingMicro } from '../../common/themeSelectors';
export const Label = styled.Text(({ color, theme }) => ({
    color: color || getColorMediumEmphasis(theme),
    fontFamily: theme.textField.label.primary.fontFamily,
    fontSize: theme.textField.label.fontSize,
    fontWeight: theme.textField.label.primary.fontWeight,
    letterSpacing: theme.textField.label.letterSpacing,
    lineHeight: theme.textField.label.fontSize * theme.textField.label.lineHeight,
    marginBottom: getSpacingMicro(theme)
}));
export const InputLabel = ({ color, content, required }) => {
    const theme = useTheme();
    return (<Label testID="label" color={color} theme={theme}>
      {content}
      {required && '*'}
    </Label>);
};
//# sourceMappingURL=InputLabel.js.map