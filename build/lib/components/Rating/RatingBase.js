import React from 'react';
import { withTheme } from 'styled-components/native';
import { IconButtonBase } from '../IconButton/IconButtonBase';
import { Icon } from '../Icon/Icon';
const RatingBaseComponent = ({ testID, disabled = false, onPress, size, theme, accessibilityHint, accessibilityLabel, iconFilled = true, iconActive = true, isClickable = true }) => {
    const getRatingColor = ({ color }) => (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis);
    const iconName = iconFilled ? 'filled-action-rating' : 'outlined-action-rating';
    return (<IconButtonBase testID={testID} disabled={disabled || !isClickable} onPress={onPress} size={size} IconComponent={(<Icon accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole="imagebutton" size={size} name={iconName} style={{ color: getRatingColor(theme) }} testID={`${testID}-icon`}/>)}/>);
};
export const RatingBase = withTheme(RatingBaseComponent);
//# sourceMappingURL=RatingBase.js.map