/* eslint-disable max-lines */

import styled from 'styled-components/native';
import {
  Theme,
  getColorAlert,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorPrimary,
  getColorSuccess,
  getSize,
} from '../../common/themeSelectors';

import { TextFieldStates, TextFieldProps as TextField } from './TextField';

interface TextFieldProps {
  feedback: string | undefined;
  theme: Theme;
  state: TextFieldStates;
  disabled: boolean;
  size: 'small' | 'regular';
}

interface AttrsProps {
  theme: Theme;
  disabled: boolean;
}

const disabledStyles = (theme: Theme) => {
  const style = {
    border: '1px',
    borderColor: getColorLowEmphasis(theme),
    color: getColorLowEmphasis(theme),
  };

  return style;
};

const feedbackStyles = (theme: Theme, feedback: string) => {
  const style = {
    error: {
      border: '2px',
      borderColor: getColorAlert(theme),
      color: getColorAlert(theme),
    },
    success: {
      border: '2px',
      borderColor: getColorSuccess(theme),
      color: getColorSuccess(theme),
    },
  };

  return style[feedback];
};

const stateStyles = (theme: Theme, state: TextFieldStates) => {
  const style = {
    active: {
      border: '2px',
      borderColor: getColorPrimary(theme),
      color: getColorMediumEmphasis(theme),
    },
    enabled: {
      border: '1px',
      borderColor: getColorLowEmphasis(theme),
      color: getColorMediumEmphasis(theme),
    },
    filled: {
      border: '1px',
      borderColor: getColorHighEmphasis(theme),
      color: getColorMediumEmphasis(theme),
    },
    focus: {
      border: '2px',
      borderColor: getColorPrimary(theme),
      color: getColorMediumEmphasis(theme),
    },
  };

  return style[state];
};

const getInputStyles = (
  state: TextFieldStates,
  feedback: string | undefined,
  disabled: boolean,
  theme: Theme,
) => {
  if (disabled) {
    const style = disabledStyles(theme);

    return style;
  }

  if (feedback) {
    const style = feedbackStyles(theme, feedback);

    return style;
  }

  const style = stateStyles(theme, state);

  return style;
};

const getHeight = (size, theme) => {
  const sizeName = size === 'regular' ? 'mediumX' : 'medium';

  return getSize(theme, sizeName);
};

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.Text<TextFieldProps>`
  font-size: 14px;
  margin-bottom: 5px;

  color: ${({
    state,
    feedback,
    disabled,
    theme,
  }) => getInputStyles(state, feedback, disabled, theme).color};
`;

export const InputWrapper = styled.View<TextFieldProps>`
  border: ${({
    state,
    feedback,
    disabled,
    theme,
  }) => getInputStyles(state, feedback, disabled, theme).border};

  border-color: ${({
    state,
    feedback,
    disabled,
    theme,
  }) => getInputStyles(state, feedback, disabled, theme).borderColor};

  padding: 0 16px;

  height: ${({ theme, size = 'regular' }) => getHeight(size, theme)}px;

  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs<AttrsProps>(({ theme, disabled }) => ({
  placeholderTextColor: disabled
    ? getColorLowEmphasis(theme)
    : getColorMediumEmphasis(theme),
}))<TextField>`
  font-size: 16px;
  flex: 1;
  align-self: center;

  text-align-vertical: ${({ multiline }) => (multiline ? 'top' : 'center')};

  color: ${({ theme }) => getColorHighEmphasis(theme)};
`;

export const HelperText = styled.Text<TextFieldProps>`
  margin: 5px 0;
  font-size: 12px;
  height: 20px;

  color: ${({
    state,
    feedback,
    disabled,
    theme,
  }) => getInputStyles(state, feedback, disabled, theme).color};
`;