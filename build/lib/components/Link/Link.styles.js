import styled from 'styled-components/native';
import { getColorLink } from '../../common/themeSelectors';
export const Label = styled.Text(({ theme, type }) => ({
    color: getColorLink(theme),
    textDecorationLine: type === 'underline' ? 'underline' : 'none'
}));
//# sourceMappingURL=Link.styles.js.map