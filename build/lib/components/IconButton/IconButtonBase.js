import React from 'react';
import { useTheme } from 'styled-components/native';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { getSize } from '../../common/themeSelectors';
export const IconButtonBase = ({ size = 'semi', IconComponent, disabled = false, onPress, testID }) => {
    const theme = useTheme();
    return (<TouchableRipple color="highlight" size={getSize(theme, size) / 2 + 5} onPress={onPress} disabled={disabled} testID={`${testID}-button`} style={{ borderRadius: 50 }}>
      {IconComponent}
    </TouchableRipple>);
};
//# sourceMappingURL=IconButtonBase.js.map