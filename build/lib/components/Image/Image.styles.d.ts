import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { ImageBaseProps } from './Image.types';
declare type WrapperStyleProps = {
    theme: Theme;
} & Pick<ImageBaseProps, 'radius'>;
export declare const getBorderRadius: ({ theme, radius }: WrapperStyleProps) => number;
export declare const Wrapper: any;
export declare const Image: any;
export declare const Content: any;
export {};
