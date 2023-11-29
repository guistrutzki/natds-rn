/// <reference types="react" />
import { IconName } from '@naturacosmeticos/natds-icons';
import { Theme } from '../../common/themeSelectors';
import { IconColors, IconProps } from './Icon.types';
export declare const getIconColor: (theme: Theme, color: IconColors) => string;
export declare const IconComponent: any;
export declare const checkIconName: (iconName: IconName) => string;
export declare const Icon: ({ accessibilityHint, accessibilityLabel, accessibilityRole, color, name, testID, theme, size, style }: IconProps) => JSX.Element;
