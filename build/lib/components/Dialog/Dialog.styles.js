import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { getColorHighEmphasis, getColorSurface, getColorHighlight, getOpacity56, getSpacingSmall, getSpacingTiny } from '../../common/themeSelectors';
import { Divider } from '..';
const { height } = Dimensions.get('window');
export const DialogOverlay = styled.View(({ theme }) => ({
    background: getColorHighlight(theme),
    bottom: 0,
    flex: 1,
    left: 0,
    opacity: getOpacity56(theme),
    position: 'absolute',
    right: 0,
    top: 0
}));
export const DialogWrapper = styled.View(({ theme }) => ({
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: getSpacingSmall(theme),
    paddingRight: getSpacingSmall(theme)
}));
export const DialogContainer = styled.View(({ theme }) => ({
    backgroundColor: getColorSurface(theme),
    borderRadius: theme.dialog.borderRadius,
    maxHeight: height * 0.7,
    paddingVertical: getSpacingSmall(theme),
    width: '100%'
}));
const DialogTitleComponent = styled.Text(({ theme }) => ({
    color: getColorHighEmphasis(theme),
    flex: 0.85,
    fontFamily: theme.dialog.title.primary.fontFamily,
    fontSize: theme.dialog.title.fontSize,
    fontWeight: theme.dialog.title.primary.fontWeight,
    letterSpacing: theme.dialog.title.letterSpacing,
    lineHeight: theme.dialog.title.fontSize * theme.dialog.title.lineHeight
}));
export const DialogTitle = (props) => (<DialogTitleComponent {...props} style={{ fontWeight: 'bold' }}/>);
export const DialogContentText = styled.Text(({ theme }) => ({
    color: getColorHighEmphasis(theme),
    fontFamily: theme.dialog.body.primary.fontFamily,
    fontSize: theme.dialog.body.fontSize,
    fontWeight: theme.dialog.body.primary.fontWeight,
    letterSpacing: theme.dialog.body.letterSpacing,
    lineHeight: theme.dialog.body.fontSize * theme.dialog.body.lineHeight,
    padding: getSpacingSmall(theme)
}));
const DialogContentComponent = styled.ScrollView(() => ({
    flexShrink: 1
}));
export const DialogContent = ({ children, divider = false }) => (<DialogContentComponent bounces={false}>
    {divider && <Divider />}
    {children}
    {divider && <Divider />}
  </DialogContentComponent>);
const buildDialogAlignment = (actionsAlignment) => (actionsAlignment === 'side-by-side' ? 'row' : 'column');
export const DialogActions = styled.View(({ theme, actionsAlignment = 'side-by-side' }) => ({
    flexDirection: buildDialogAlignment(actionsAlignment),
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingHorizontal: getSpacingSmall(theme),
    paddingTop: getSpacingTiny(theme)
}));
//# sourceMappingURL=Dialog.styles.js.map