/// <reference types="react" />
import { BrandTypes } from '../../common/brandTypes/brandTypes';
/**
 * @deprecated use `primary` instead
 */
declare type RadioButtonDeprecatedColor = 'secondary';
export declare type RadioButtonColors = 'primary' | RadioButtonDeprecatedColor;
export interface RadioButtonProps {
    /**
     * RadioButton color: `primary`
     *
     * deprecated color: `secondary`
     */
    color?: RadioButtonColors;
    /**
     * Optional brand that appears to the component,
     */
    brand?: BrandTypes;
    /**
     * Called when the touch is released, but not if cancelled
     */
    onPress?: (value: string) => void;
    /**
     * Programmatically tell if the component is selected
     */
    selected?: boolean;
    /**
     * Optional property that tells if the select is disabled,
     * if so, the user cannot click on this item.
     */
    disabled?: boolean;
    /**
     * Optional label that appears to the right of the component,
     * if the user clicks that label, the onPress function will be called
     */
    label?: string;
    /**
     * The value of the component.
     */
    value?: string;
    /**
     * Optional testID
     */
    testID?: string;
}
export declare const RadioButton: ({ color, onPress, selected, disabled, label, brand, value, testID }: RadioButtonProps) => JSX.Element;
export {};
