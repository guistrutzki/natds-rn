/// <reference types="react" />
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { ImageBaseProps } from './Image.types';
declare type FadeProps = {
    theme: Theme;
} & Pick<ImageBaseProps, 'fade' | 'variant' | 'source'>;
export declare const getFadePosition: (fade?: any) => any;
export declare const isHighlight: (props: ImageBaseProps) => props is ImageBaseProps;
export declare const Fade: (props: FadeProps) => JSX.Element;
export declare const Highlight: any;
export {};
