import { IconName } from '@naturacosmeticos/natds-icons';
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import { ReactElement } from 'react';
export interface IconButtonBaseProps {
    IconComponent: ReactElement;
    disabled?: boolean;
    onPress?: () => void;
    testID?: string;
    size?: keyof Size;
}
/**
 * @deprecated Use 'semi'
 */
export declare type IconButtonSizesDeprecated = 'small';
export declare type IconButtonSizes = 'semi' | 'semiX' | 'medium' | IconButtonSizesDeprecated;
/**
 * @deprecated Use 'highEmphasis'
 */
export declare type IconButtonColorsDeprecated = 'default';
export declare type IconButtonColors = 'primary' | 'highEmphasis' | 'light' | IconButtonColorsDeprecated;
export declare type IconButtonBackgroundStyle = 'none' | 'float' | 'overlay';
export declare type IconContainerProps = {
    backgroundStyle?: IconButtonBackgroundStyle;
} & Required<Pick<IconButtonBaseProps, 'size' | 'disabled'>>;
export interface IconButtonProps {
    /**
     * An accessibility hint helps users understand what will happen when they perform an action
     * on the accessibility element when that result is not clear from the accessibility label.
     */
    accessibilityHint?: string;
    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element.
     * By default, the label is constructed by traversing all the children and accumulating
     * all the Text nodes separated by space.
     */
    accessibilityLabel?: string;
    /**
     * Icon Button variants `primary` | `highEmphasis` | `light` | `default` - variant `default` is deprecated, use `highEmphasis` instead
     * @default highEmphasis
     */
    iconColor?: IconButtonColors;
    /**
     * Icon Button variants `primary` | `highEmphasis` | `light` | `default` - deprecated use iconColor instead
     * @default highEmphasis
     */
    color?: IconButtonColors;
    /**
     * Icon background style `none` | `float` | `overlay`
     * @default `none`
     */
    backgroundStyle?: IconButtonBackgroundStyle;
    /**
     * Disable user interaction
     * @default false
     */
    disabled?: boolean;
    /**
     * The icon name
     */
    icon?: IconName;
    /**
     * Icon Button sizes `semi` | `semiX` | `medium`;
     * @default `semi`
     * @deprecated size `small`
     */
    size?: IconButtonSizes;
    /**
     * The onPress event handler
     */
    onPress: () => void;
    /**
     * Optional ID for testing
     */
    testID?: string;
}
export declare const iconButtonSizesOptions: Record<IconButtonSizes, IconButtonSizes>;
export declare const iconButtonColorsOptions: Record<IconButtonColors, IconButtonColors>;
export declare const iconButtonBackgroundStylesOptions: Record<IconButtonBackgroundStyle, IconButtonBackgroundStyle>;
export declare const iconButtonBackgroundStyles: IconButtonBackgroundStyle[];
export declare const iconButtonColors: IconButtonColors[];
export declare const iconButtonSizes: IconButtonSizes[];
