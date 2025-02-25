import styled from 'styled-components/native';
import { css } from 'styled-components';
import { getContainerBackgroundColor, getContainerElevation } from './IconButton.helpers';
import { getSize } from '../../common/themeSelectors';
const currentSizes = ['semi', 'semiX', 'medium'];
export const IconContainer = styled.View `
  ${({ theme, backgroundStyle = 'none', disabled = false, size = 'semi' }) => css `
    ${getContainerElevation(backgroundStyle, theme)};
    height: ${getSize(theme, size)}px;
    width: ${getSize(theme, size)}px;
    background-color: ${getContainerBackgroundColor({ backgroundStyle, disabled, theme })};
    border-radius: ${currentSizes.includes(size) ? theme.iconButton[size].borderRadius : 50}px;
    justify-content: center;
    align-items: center;
  `}
`;
//# sourceMappingURL=IconButton.styles.js.map