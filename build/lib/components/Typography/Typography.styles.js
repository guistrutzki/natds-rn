/* eslint-disable max-len */
import styled from 'styled-components/native';
import { getColorHighlight } from '../../common/themeSelectors';
export const Typography = styled.Text(({ theme, variant = 'heading1' }) => ({
    color: getColorHighlight(theme),
    fontSize: theme[variant].fontSize,
    fontWeight: theme[variant].fontWeight,
    letterSpacing: theme[variant].letterSpacing
}));
//# sourceMappingURL=Typography.styles.js.map