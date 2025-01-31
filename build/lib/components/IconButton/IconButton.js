import React from 'react';
import { Icon } from '../Icon/Icon';
import { getIconColor, getIconSize } from './IconButton.helpers';
import { IconButtonBase } from './IconButtonBase';
import { IconContainer } from './IconButton.styles';
export const IconButton = ({ accessibilityHint, accessibilityLabel, color = 'highEmphasis', iconColor = color, icon, size = 'semi', backgroundStyle = 'none', disabled = false, onPress, testID = 'ds-icon-button' }) => (<IconButtonBase disabled={disabled} size={size} testID={testID} onPress={disabled ? undefined : onPress} IconComponent={(<IconContainer disabled={disabled} size={size} backgroundStyle={backgroundStyle} testID={`${testID}-background`}>
        <Icon accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole="imagebutton" size={getIconSize(size)} color={getIconColor(iconColor, disabled)} name={icon} testID={`${testID}-icon`}/>
      </IconContainer>)}/>);
//# sourceMappingURL=IconButton.js.map