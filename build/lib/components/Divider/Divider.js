import React from 'react';
import { View } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import { getColorLowEmphasis, getSpacingStandard, getSpacingNone } from '../../common/themeSelectors';
const getViewStyles = (type, theme) => {
    const styles = {
        inset: {
            marginLeft: getSpacingStandard(theme)
        },
        middle: {
            marginLeft: getSpacingStandard(theme),
            marginRight: getSpacingStandard(theme)
        }
    };
    return styles[type];
};
const DividerBase = styled.View(({ theme }) => ({
    backgroundColor: getColorLowEmphasis(theme),
    height: 1,
    margin: getSpacingNone(theme),
    width: '100%'
}));
const DividerComponent = ({ theme, type = 'fullBleed', testID = 'divider' }) => (<View style={getViewStyles(type, theme)}>
    <DividerBase type={type} testID={testID}/>
  </View>);
export const Divider = withTheme(DividerComponent);
//# sourceMappingURL=Divider.js.map