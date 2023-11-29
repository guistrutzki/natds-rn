/// <reference types="react" />
import { AccessibilityButtonProps } from './TextField.types';
declare type TextFieldActionStyleProps = Pick<AccessibilityButtonProps, 'accessibilityButtonHint' | 'accessibilityButtonLabel' | 'accessibilityButtonRole'> & {
    secureState: boolean;
    onPress: () => void;
};
export declare const TextFieldPasswordAction: ({ accessibilityButtonHint, accessibilityButtonLabel, secureState, onPress }: TextFieldActionStyleProps) => JSX.Element;
export declare const TextFieldAction: ({ action, actionComponent, size, accessibilityButtonHint, accessibilityButtonLabel, accessibilityButtonRole }: {
    action: any;
    actionComponent: any;
    size: any;
    accessibilityButtonHint: any;
    accessibilityButtonLabel: any;
    accessibilityButtonRole: any;
}) => JSX.Element;
export {};
