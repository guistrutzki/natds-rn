import { ButtonBaseProps } from './Button.types';
declare type SurfaceProps = Pick<ButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size' | 'brand'>;
export declare const getButtonStylesBySize: ({ size, theme }: Pick<SurfaceProps, 'size' | 'theme'>) => {
    minHeight: number;
    paddingHorizontal: number;
} | {
    minHeight: number;
    paddingHorizontal: number;
} | {
    minHeight: number;
    paddingHorizontal: number;
} | {
    minHeight: number;
    paddingHorizontal: number;
} | {
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
export declare const Surface: any;
export declare const Label: any;
export declare const LabelText: any;
export {};
