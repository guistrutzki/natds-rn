import { AccessibilityRole } from 'react-native';
import { BrandTypes } from '../../common/brandTypes/brandTypes';
export declare type TabButtonTypes = 'primary' | 'secondary';
export declare type IconPositions = 'leading' | 'top' | 'icon';
export declare type TabPositions = 'fixed' | 'scrollable';
export interface TabOptions {
    disabled?: boolean;
    iconName?: string;
    key: string;
    label: string;
    selected?: boolean;
}
export interface TabProps {
    /**
     * Communicates the purpose of a component to the user of an assistive technology.
     * @default 'tab'
     */
    accessibilityRole?: AccessibilityRole;
    /**
    /**
     * Optional Brand prop for theme select.
     */
    brand?: BrandTypes;
    /**
     * When `true`, indicates that the view is an accessibility element.
     * @default false
     */
    accessible?: boolean;
    /**
     * Provide a background color to the tab.
     * @default true
     */
    backgroundColor?: boolean;
    /**
     * Elevation of the tab, applies a shadow to the tab.
     * @default false
     */
    elevation?: boolean;
    /**
     * Icon position relative to text label `leading` | `top` | `icon`.
     * @default 'none'
     */
    iconPosition?: IconPositions;
    /**
     * Tab position relative to screen `fixed` | `scrollable`.
     * @default 'fixed'
     */
    position?: TabPositions;
    /**
     * Array of Tab options with `key`, `label`, `selected`, `disabled`, and `iconName` properties.
     */
    tabOptions: TabOptions[];
    /**
     * The onChange prop allows passing a function that will be called
     * once the tab option has been pressed.
     */
    onChange: (value: number) => void;
    /**
     * Optional ID for testing
     */
    testID?: string;
}
