import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { getBorderRadiusMedium, getColorSurface } from '../..';
import { getColorLowEmphasis } from '../../common/themeSelectors';
const BoxContainer = styled.View(({ borderWidth, theme }) => ({
    borderColor: 'transparent',
    borderRadius: getBorderRadiusMedium(theme),
    borderWidth
}));
const Box = styled.View(({ borderColor, borderWidth, theme }) => ({
    alignItems: 'center',
    backgroundColor: getColorSurface(theme),
    borderColor,
    borderRadius: getBorderRadiusMedium(theme),
    borderWidth,
    flexDirection: 'row',
    maxWidth: '100%'
}));
export const InputBox = ({ boxColor, boxState, children }) => {
    const theme = useTheme();
    const isActive = boxState === 'active';
    return (<BoxContainer testID="box-container" borderWidth={isActive ? 0 : 1} theme={theme}>
      <Box testID="box" borderColor={boxColor || getColorLowEmphasis(theme)} borderWidth={isActive ? 2 : 1} theme={theme}>
        {children}
      </Box>
    </BoxContainer>);
};
//# sourceMappingURL=InputBox.js.map