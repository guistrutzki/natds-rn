import { AccessibilityState } from 'react-native';
import { Theme } from '../../common/themeSelectors';
import { TabButtonTypes, IconPositions } from './Tab.types';
interface TabBase {
    type: TabButtonTypes;
    theme: Theme;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityState?: AccessibilityState;
    accessible?: boolean;
}
interface TextBase extends TabBase {
    iconPosition?: IconPositions;
    disabled?: boolean;
}
interface DisplayText {
    theme: Theme;
    iconPosition?: IconPositions;
}
interface TabWrapperProp {
    theme: Theme;
    elevation?: boolean;
    backgroundColor?: boolean;
    iconPosition?: IconPositions;
}
export declare const getTabTextStyles: (theme: Theme, type: TabButtonTypes) => string;
export declare const getDisplayTextStyles: ({ theme, iconPosition }: DisplayText) => {};
export declare const getTabTextColor: ({ disabled, theme, type }: TextBase) => {
    color: string;
};
export declare const getTabWrapperElevation: ({ elevation, theme }: TabWrapperProp) => {
    elevation: number;
    shadowColor: string;
    shadowOffset: string;
    shadowOpacity: number;
    shadowRadius: number;
} | {
    elevation: number;
};
export declare const TabWrapper: any;
export declare const TabButton: any;
export declare const TabText: any;
export declare const TabButtonContent: any;
export declare const TabIcon: any;
export {};
