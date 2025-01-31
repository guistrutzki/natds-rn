import { StyleProp, TextStyle, AccessibilityProps } from 'react-native'
import { IconName } from '@naturacosmeticos/natds-icons'
import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

/**
 * @deprecated Deprecated sizes: `small` and `large`, use `semi` and `medium` instead.
 */
type ButtonSizesDeprecated = 'small' | 'large'
export type ButtonSizes = 'semi' | 'semiX' | 'medium' | ButtonSizesDeprecated

export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type IconPositions = 'left' | 'right'

export interface ButtonBaseProps extends ButtonProps {
  theme: Theme;
  textLabelStyle?: StyleProp<TextStyle>;
}

type AccessibilityButtonProps = Pick<AccessibilityProps,
  'accessibilityActions' |
  'onAccessibilityAction' |
  'accessibilityHint' |
  'accessibilityLabel'
>

export interface ButtonProps extends AccessibilityButtonProps {
  /**
   * A disabled button is unusable and un-clickable.
   * The disabled attribute can be set to keep a user from clicking on the button until some
   * other condition has been met (like selecting a checkbox, etc.).
   * @default false
   */
  disabled?: boolean;
  /**
   * Name of the icon that will be rendered on the button at the previously selected position.
   */
  iconName?: IconName;
  /**
   * Name of the icon that will be rendered on the button at the previously selected position.
   */
  brand?: BrandTypes;
  /**
   * Position of the icon to be rendered in relation to the label text.
   *
   * - Available positions: `left`, `right`.
   */
  iconPosition?: IconPositions;
  /**
   * Handler to be called when the user taps the button.
   */
  onPress: () => void;
  /**
  * Optional ID for testing.
  */
  testID?: string;
  /**
   * This defines the height of the button, according to corresponding theme Size token.
   *
   * - Available sizes: `semi`, `semiX`, `medium`.
   *
   * #### Deprecated sizes: `small` and `large`.
   * @default `semiX`
   */
  size?: ButtonSizes;
  /**
   * Text to display inside the button.
   * @required
   */
  text: string;
  /**
   * Parameter that will determine button style such as border rendering and background color.
   *
   * - Available types: `contained`, `outlined`, `text`.
   * @default `contained`
   */
  type?: ButtonTypes;
}
