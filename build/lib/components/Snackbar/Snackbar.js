import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Animated, Platform } from 'react-native';
import { SnackbarWrapper, SnackbarText, SnackbarButtonWrapper, ButtonBaseStyled } from './Snackbar.styles';
// eslint-disable-next-line max-statements
export const Snackbar = ({ message, buttonText, type = 'standard', autoHideDuration = 5000, open, numberOfLines = 2, onClose }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isOpen, setIsOpen] = useState(false);
    const [isMultiLineText, setIsMultiLineText] = useState(false);
    const autoHideTimer = React.useRef();
    const handleClose = useCallback(() => {
        if (onClose)
            onClose();
    }, [onClose]);
    const show = useCallback(() => {
        setIsOpen(true);
        // fade in duration recommended by material-ui
        Animated.timing(fadeAnim, { duration: 225, toValue: 1, useNativeDriver: Platform.OS !== 'web' })
            .start(({ finished }) => {
            if (finished)
                autoHideTimer.current = global.setTimeout(handleClose, autoHideDuration);
        });
    }, [autoHideDuration, fadeAnim, handleClose]);
    const hide = useCallback(() => {
        // fade out duration recommended by material-ui
        Animated.timing(fadeAnim, { duration: 195, toValue: 0, useNativeDriver: Platform.OS !== 'web' })
            .start(({ finished }) => {
            if (finished)
                setIsOpen(false);
        });
    }, [fadeAnim]);
    const toggle = useCallback(() => {
        if (open)
            return show();
        return hide();
    }, [hide, open, show]);
    useEffect(() => {
        toggle();
        return () => {
            if (autoHideTimer.current)
                global.clearTimeout(autoHideTimer.current);
        };
    }, [open, autoHideDuration, toggle]);
    if (!isOpen)
        return null;
    return (<SnackbarWrapper type={type} as={Animated.View} style={{ opacity: fadeAnim }} testID="natds-snackbar-wrapper">
      <SnackbarText type={type} testID="natds-snackbar-text" numberOfLines={numberOfLines} onTextLayout={({ nativeEvent: { lines } }) => {
        setIsMultiLineText(lines.length >= numberOfLines);
    }} ellipsizeMode="tail" isTwoLineAction={isMultiLineText && !!buttonText}>
        {message}
      </SnackbarText>
      {buttonText && (<SnackbarButtonWrapper isTwoLineAction={isMultiLineText && !!buttonText}>
          <ButtonBaseStyled text={buttonText} onPress={handleClose} testID="natds-snackbar-button" size="medium" type={type}/>
        </SnackbarButtonWrapper>)}
    </SnackbarWrapper>);
};
//# sourceMappingURL=Snackbar.js.map