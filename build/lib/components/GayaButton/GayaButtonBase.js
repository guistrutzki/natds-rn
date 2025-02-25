import React from 'react';
import { withTheme } from 'styled-components/native';
import { Icon } from '../Icon';
import { Label, LabelText, Surface, getSelectTheme } from './GayaButton.styles';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
const GayaButtonComponent = ({ accessibilityHint, accessibilityLabel, accessibilityState, textTransform, disabled = false, iconName, color, iconPosition = 'right', onPress, size = 'medium', testID = 'button-base', text, brand, mode, theme, type = 'contained', textLabelStyle }) => {
    var _a;
    const iconSize = {
        medium: 'standard',
        semiX: 'standard',
        semi: 'small'
    };
    const iconColor = disabled
        ? theme.button[type].color.disable.label
        : theme.button[type].color.enable.label;
    return (<TouchableRipple color="highlight" disabled={disabled} hideOverflow onPress={disabled ? () => ({}) : onPress} style={{ borderRadius: (_a = getSelectTheme(brand, { theme, type, color })) === null || _a === void 0 ? void 0 : _a.buttonBorderRadius }}>
      <Surface accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityState={accessibilityState} accessibilityRole="button" disabled={disabled} size={size} brand={brand} mode={mode} color={color} testID={testID} type={type}>
        <Label iconPosition={iconPosition}>
          <LabelText textTransform={textTransform} iconName={iconName} iconPosition={iconPosition} testID="button-label" type={type} brand={brand} mode={mode} color={color} disabled={disabled} style={textLabelStyle}>
            {text}
          </LabelText>
          {iconName
        && (<Icon accessibilityRole="imagebutton" style={{ color: iconColor }} name={iconName} size={iconSize[size]}/>)}
        </Label>
      </Surface>
    </TouchableRipple>);
};
export const GayaButtonBase = withTheme(GayaButtonComponent);
//# sourceMappingURL=GayaButtonBase.js.map