import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../../common/themeSelectors';
export declare type TouchableRippleColors = 'primary' | 'secondary' | 'highlight';
export interface TouchableRippleProps {
    /**
     * Children component
     */
    children?: ReactElement;
    /**
     * Ripple color: `primary` | `secondary` | `highlight`
     * @default: `primary`
     */
    color?: TouchableRippleColors;
    disabled?: boolean;
    /**
     * Controls if the ripple should overflow the content of not
     */
    hideOverflow?: boolean;
    /**
     * Size of the children, the ripple will have the double of this size.
     */
    size?: number;
    /**
     * Will be called as soon the ripple animation start
     */
    onPress?: () => void;
    /**
     * Optional testID
     */
    testID?: string;
    /**
     * App's theme
     */
    theme?: Theme;
    /**
     *
     */
    style?: StyleProp<ViewStyle>;
}
export declare const TouchableRipple: ({ children, disabled, onPress, testID, style, color }: TouchableRippleProps) => JSX.Element;
