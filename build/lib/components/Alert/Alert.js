import React from 'react';
import { Icon } from '../Icon/Icon';
import { AlertWrapper, AlertTitle, AlertText, AlertContent, IconContent } from './Alert.styles';
const getIcon = (type) => {
    const icons = {
        error: {
            name: 'outlined-alert-cancel'
        },
        info: {
            name: 'outlined-alert-info'
        },
        success: {
            name: 'outlined-alert-check'
        },
        warning: {
            name: 'outlined-alert-warning'
        },
        custom: {
            name: 'outlined-default-mockup'
        }
    };
    return icons[type];
};
export const isAlertCustom = (props) => props.type === 'custom';
export const Alert = (props) => {
    const { testID = 'alert', variant = 'standard', type = 'info', icon = true, title, message } = props;
    return (<AlertWrapper testID={testID} variant={variant} type={type} {...props}>
      <IconContent testID={`${testID}-icon`}>
        {icon && <Icon color={isAlertCustom(props) ? props.iconColorName : 'neutral900'} name={isAlertCustom(props) ? props.iconName : getIcon(type).name} accessibilityRole="imagebutton"/>}
      </IconContent>
      <AlertContent testID={`${testID}-content`}>
        {!!title && <AlertTitle {...props}>{title}</AlertTitle>}
        <AlertText {...props}>{message}</AlertText>
      </AlertContent>
    </AlertWrapper>);
};
//# sourceMappingURL=Alert.js.map