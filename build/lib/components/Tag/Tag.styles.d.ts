import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { TagColors, TagPositions, TagSizes } from './Tag.types';
import { BrandTypes } from '../../common/brandTypes/brandTypes';
declare type TagStyleBaseProps = {
    theme: Theme;
};
declare type ContainerStyleProps = TagStyleBaseProps & {
    color?: TagColors;
    size?: TagSizes;
    borderPosition?: TagPositions;
    brand?: BrandTypes;
};
declare type LabelStyleProps = TagStyleBaseProps & {
    color?: TagColors;
    brand?: BrandTypes;
};
export declare const getBorderPosition: ({ theme, size, borderPosition }: ContainerStyleProps) => {
    borderRadius: number;
} | {
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
} | {
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
};
export declare const getTextColorByName: ({ theme, color, brand }: LabelStyleProps) => string;
export declare const getPaddingBySize: ({ theme, size }: ContainerStyleProps) => {
    paddingHorizontal: number;
    paddingVertical: number;
} | {
    paddingHorizontal: number;
    paddingVertical?: undefined;
};
export declare const getBackGroundColor: ({ theme, color, brand }: ContainerStyleProps) => string;
export declare const Container: any;
export declare const Label: any;
export {};
