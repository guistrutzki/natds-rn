import { Size } from '@naturacosmeticos/natds-themes/react-native';
import { Theme } from '../../common/themeSelectors';
export interface RatingBaseProps {
    testID?: string;
    onPress?: () => void;
    disabled?: boolean;
    size: keyof Size;
    accessibilityHint?: string;
    accessibilityLabel?: string;
    iconActive?: boolean;
    iconFilled?: boolean;
    isClickable?: boolean;
    theme: Theme;
}
export declare const RatingBase: any;
