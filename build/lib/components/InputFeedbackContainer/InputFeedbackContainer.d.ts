import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { ReactNode } from 'react';
import { BrandTypes } from '../../common/brandTypes/brandTypes';
import { InputStates } from './InputFeedbackHelper';
declare type ContentProps = {
    children: ReactNode;
    filled?: boolean;
    helperText?: string;
    label?: string;
    required?: boolean;
    brand?: BrandTypes;
};
declare type FeedbackProps = {
    active?: boolean;
    disabled?: never;
    feedback?: 'error' | 'success';
} | {
    active?: never;
    disabled?: boolean;
    feedback?: never;
};
export declare type InputFeedbackContainerProps = ContentProps & FeedbackProps;
export declare const getElementsColorsByState: (element: 'box' | 'text', theme: Theme, brand?: "aesop" | "avon" | "avon_v2" | "biome" | "natura" | "theBodyShop" | "consultoriaDeBeleza" | "natura_v2" | "casaEestilo" | undefined) => (state: InputStates) => string;
export declare const InputFeedbackContainer: (props: InputFeedbackContainerProps) => JSX.Element;
export {};
