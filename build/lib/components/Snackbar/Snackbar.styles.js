/* eslint-disable max-len */
import styled from 'styled-components/native';
import { getSpacingSmall, getShadowBySize } from '../../common/themeSelectors';
import { ButtonBase } from '../Button/ButtonBase';
const getBackgroundColorByType = (theme, type) => {
    switch (type) {
        case 'info':
            return theme.color.link;
        case 'warning':
            return theme.color.warning;
        case 'error':
            return theme.color.alert;
        case 'success':
            return theme.color.success;
        default:
            return theme.color.onSurface;
    }
};
export const getColorByType = (theme, type) => {
    switch (type) {
        case 'info':
            return theme.color.onLink;
        case 'warning':
            return theme.color.onWarning;
        case 'error':
            return theme.color.onAlert;
        case 'success':
            return theme.color.onSuccess;
        default:
            return theme.color.surface;
    }
};
export const SnackbarButtonWrapper = styled.View `
  margin-top: ${({ isTwoLineAction }) => (isTwoLineAction ? '0px' : '4px')};
  margin-bottom: 4px;
  margin-right: 4px;
  margin-left: 4px;
`;
export const SnackbarWrapper = styled.View(({ theme, type }) => (Object.assign(Object.assign({}, getShadowBySize(theme, 'large')), { alignItems: 'center', backgroundColor: getBackgroundColorByType(theme, type), borderRadius: `${theme.snackbar.borderRadius}px`, bottom: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', left: 0, marginBottom: getSpacingSmall(theme), marginLeft: getSpacingSmall(theme), marginRight: getSpacingSmall(theme), position: 'absolute', right: 0 })));
export const ButtonBaseStyled = styled(ButtonBase).attrs(({ theme, type }) => ({
    type: 'text',
    textLabelStyle: { color: getColorByType(theme, type) }
})) ``;
export const SnackbarText = styled.Text(({ theme, type, isTwoLineAction }) => ({
    color: getColorByType(theme, type),
    flexGrow: 1,
    fontFamily: theme.snackbar.content.primary.fontFamily,
    fontSize: theme.snackbar.content.fontSize,
    fontWeight: theme.snackbar.content.primary.fontWeight,
    letterSpacing: theme.snackbar.content.letterSpacing,
    lineHeight: theme.snackbar.content.fontSize * theme.snackbar.content.lineHeight,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: isTwoLineAction ? 8 : 16
}));
//# sourceMappingURL=Snackbar.styles.js.map