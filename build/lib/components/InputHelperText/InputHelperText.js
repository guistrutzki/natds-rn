import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { Icon } from '../Icon';
import { getColorMediumEmphasis, getSpacingMicro } from '../../common/themeSelectors';
const HelperTextContainer = styled.View(({ theme }) => ({
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: getSpacingMicro(theme)
}));
const HelperText = styled.Text(({ color, feedback, theme }) => ({
    color: color || getColorMediumEmphasis(theme),
    fontFamily: theme.textField.helperText.primary.fontFamily,
    fontSize: theme.textField.helperText.fontSize,
    fontWeight: theme.textField.helperText.primary.fontWeight,
    letterSpacing: theme.textField.helperText.letterSpacing,
    lineHeight: theme.textField.helperText.fontSize * theme.textField.helperText.lineHeight,
    marginLeft: feedback && getSpacingMicro(theme)
}));
export const InputHelperText = ({ color, content, feedback }) => {
    const theme = useTheme();
    const feedbackProps = {
        error: {
            iconColor: 'alert',
            iconName: 'outlined-action-cancel'
        },
        success: {
            iconColor: 'success',
            iconName: 'outlined-action-check'
        }
    };
    const iconProps = feedback && feedbackProps[feedback];
    return (<HelperTextContainer theme={theme}>
      {iconProps
        && (<Icon color={iconProps.iconColor} name={iconProps.iconName} size="small" testID="icon"/>)}
      <HelperText testID="helper-text" color={color} feedback={feedback}>
        {content}
      </HelperText>
    </HelperTextContainer>);
};
//# sourceMappingURL=InputHelperText.js.map