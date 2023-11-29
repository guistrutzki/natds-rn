import styled from 'styled-components/native';
import { css } from 'styled-components';
import { getColorSurface, getShadowBySize } from '../../common/themeSelectors';
export const CardBase = styled.View `
  ${({ theme, radius, elevation = true }) => css `
    ${elevation ? getShadowBySize(theme, 'micro') : { elevation: 0 }})}
    background-color: ${getColorSurface(theme)};
    border-radius: ${radius ? `${theme.card.borderRadius.enable}px` : `${theme.card.borderRadius.disable}px`};
  `}
`;
//# sourceMappingURL=Card.styles.js.map