import styled from 'styled-components/native';
import { getColorPrimary, getOpacityMediumLow, buildColorWithOpacity, getSize, getTheme } from '../../common/themeSelectors';
const backgroundStyles = ({ selected, theme }) => (selected
    ? buildColorWithOpacity(getColorPrimary, getOpacityMediumLow, theme)
    : 'transparent');
const getSizeMedium = getTheme((theme) => getSize(theme, 'medium'));
export const ListItem = styled.View `
  background: ${backgroundStyles};
  min-height: ${getSizeMedium}px;
`;
//# sourceMappingURL=ListItem.styles.js.map