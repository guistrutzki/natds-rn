import { Theme } from '../../common/themeSelectors';
export declare type DividerTypes = 'fullBleed' | 'inset' | 'middle';
export interface DividerProps {
    /**
     * Divider variants `fullBleed` | `inset` | `middle`
     */
    type?: DividerTypes;
    /**
     * The divider theme
     */
    theme: Theme;
    /**
     * Optional ID for testing
     */
    testID?: string;
}
export declare const Divider: any;
