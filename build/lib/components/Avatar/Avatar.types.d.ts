import { IconName } from '@naturacosmeticos/natds-icons';
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import { BrandTypes } from '../../common/brandTypes/brandTypes';
/**
 * @deprecated
 */
declare type AvatarSizesDeprecated = keyof Pick<Size, 'tiny' | 'small' | 'large' | 'huge'>;
export declare type AvatarSizes = keyof Pick<Size, 'standard' | 'semi' | 'semiX' | 'medium' | 'largeXXX' | AvatarSizesDeprecated>;
/**
 * @deprecated
 */
declare type AvatarTypesDeprecated = 'anonymous';
export declare type AvatarTypes = 'image' | 'icon' | 'letter' | AvatarTypesDeprecated;
declare type AvatarUriProps = {
    uri: string;
};
export interface AvatarBaseProps {
    /**
     * Optional size of the avatar.
     * Deprecated `tiny`, `small`, `large` and `huge` sizes.
     */
    size?: AvatarSizes;
    /**
     * Optional accessibilityLabel.
     */
    brand?: BrandTypes;
    /**
     * Optional accessibilityLabel.
     */
    accessibilityLabel?: string;
    /**
     * Optional accessibilityHint.
     */
    accessibilityHint?: string;
    /**
     * Optional ID for testing.
     */
    testID?: string;
}
export declare type AvatarAnonymousProps = AvatarBaseProps & {
    type?: 'anonymous';
};
export declare type AvatarImageProps = AvatarBaseProps & {
    type?: 'image';
    /**
    * URL image.
    * @example imgSource={{uri: IMG_URL}}
    */
    imgSource?: string | AvatarUriProps;
};
export declare type AvatarIconProps = AvatarBaseProps & {
    type?: 'icon';
    /**
    * Icon name
    */
    iconName?: IconName;
};
export declare type AvatarLetterProps = AvatarBaseProps & {
    type?: 'letter';
    /**
    * Label text
    */
    text?: string;
};
export declare type AvatarProps = AvatarImageProps | AvatarIconProps | AvatarLetterProps | AvatarAnonymousProps;
export {};
