import { IconColors } from '../Icon/Icon.types';
import { Theme } from '../../common/themeSelectors';
import { IconButtonColors, IconContainerProps, IconButtonBackgroundStyle, IconButtonSizes } from './IconButton.types';
export declare const getContainerBackgroundColor: ({ theme, backgroundStyle, disabled }: Pick<IconContainerProps, "disabled" | "backgroundStyle"> & {
    theme: Theme;
}) => string;
export declare const getIconSize: (size: IconButtonSizes) => "small" | "none" | "medium" | "large" | "micro" | "tiny" | "standard" | "semi" | "semiX" | "mediumX" | "largeX" | "largeXX" | "largeXXX" | "huge" | "hugeX" | "hugeXX" | "hugeXXX" | "veryHuge";
export declare const getIconColor: (color: IconButtonColors, disabled: boolean) => IconColors;
export declare const getContainerElevation: (backgroundStyle: IconButtonBackgroundStyle, theme: Theme) => {
    elevation: number;
    shadowColor: string;
    shadowOffset: string;
    shadowOpacity: number;
    shadowRadius: number;
} | {
    elevation: number;
};
