import { GayaButtonBaseProps } from './GayaButton.types';
import { BrandTypes } from '../../common/brandTypes/brandTypes';
declare type SurfaceProps = Pick<GayaButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size' | 'brand' | 'color' | 'mode'>;
export declare const getButtonStylesBySize: ({ size, theme, brand, mode }: Pick<SurfaceProps, 'size' | 'theme' | 'brand' | 'mode'>) => {
    minHeight: number;
    paddingHorizontal: number;
} | undefined;
export declare const getButtonShadowByType: ({ disabled, theme, type }: Omit<SurfaceProps, 'size'>) => {
    elevation: number;
    shadowColor: string;
    shadowOffset: string;
    shadowOpacity: number;
    shadowRadius: number;
} | {
    elevation: number;
};
export declare const getSelectTheme: (brand: BrandTypes | undefined, { theme, type, color, mode }: Pick<SurfaceProps, 'theme' | 'type' | 'color' | 'mode'>) => {
    back?: undefined;
    border?: undefined;
    label?: undefined;
    buttonBorderRadius?: undefined;
    textransform?: undefined;
} | {
    back: string;
    border: string;
    label: string;
    buttonBorderRadius: number;
    textransform: string;
} | undefined;
export declare const Surface: any;
export declare const Label: any;
export declare const LabelText: any;
export {};
