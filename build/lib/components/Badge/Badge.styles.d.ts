import { Theme } from '../../common/themeSelectors';
export declare type BadgeVariant = 'standard' | 'pulse' | 'dot';
export declare const convertPulseToDot: (variant: BadgeVariant) => "dot" | "standard";
export declare const getHorizontalPadding: (variant: BadgeVariant, theme: Theme) => false | {
    paddingHorizontal: number;
};
export declare const getWidthByVariant: (variant: BadgeVariant, theme: Theme) => false | {
    width: number;
};
export declare const Container: any;
export declare const BadgeBase: any;
export declare const Circle: any;
export declare const Label: any;
