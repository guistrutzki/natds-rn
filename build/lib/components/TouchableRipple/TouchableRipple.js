/* eslint-disable max-statements, max-lines, no-underscore-dangle */
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { useTheme } from 'styled-components/native';
import { getColorByName, buildColorWithOpacity, getOpacityMedium } from '../../common/themeSelectors';
export const TouchableRipple = ({ children, disabled = false, onPress, testID = 'touchable-ripple', style, color = 'highlight' }) => {
    const theme = useTheme();
    const getColor = () => getColorByName(theme, color);
    return (<TouchableHighlight style={style} underlayColor={buildColorWithOpacity(getColor, getOpacityMedium, theme)} disabled={disabled} onPress={onPress} testID={testID}>
      {children}
    </TouchableHighlight>);
};
//# sourceMappingURL=TouchableRipple.js.map