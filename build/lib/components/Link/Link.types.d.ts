import { ReactNode } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, AccessibilityProps } from 'react-native';
export declare type LinkTypes = 'standard' | 'underline';
declare type AccessibilityLinkProps = Pick<AccessibilityProps, 'accessibilityHint' | 'accessibilityRole'>;
export interface LinkProps extends AccessibilityLinkProps {
    /**
     * The content of the link.
     * @required
     */
    children: ReactNode;
    /**
     * Handler to be called when the user taps the link.
     * @required
     */
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
    /**
     * Optional ID for testing.
     */
    testID?: string;
    /**
     * Controls when the link should have an underline.
     *
     * - Available types: `standard`, `underline`.
     * @default 'standard'
     */
    type?: LinkTypes;
}
export {};
