import { ReactElement } from 'react';
import { Theme } from '../../common/themeSelectors';
export declare type ListItemFeedback = 'ripple' | 'selection';
export interface ListItemProps {
    /**
     * The children list item elements
     */
    children: ReactElement;
    /**
     * Controls the element feedback type `ripple` | `selection`
     * @Default ripple
     */
    feedback?: ListItemFeedback;
    /**
     * Controls the element selected styles when feedback type is `selection`
     * @Default false
     */
    selected?: boolean;
    /**
     * onPress event handler
     */
    onPress?(): void;
    /**
     * Id for testing
     */
    testID?: string;
    /**
     * App's theme
     */
    theme?: Theme;
}
export declare const ListItem: ({ children, onPress, testID, feedback, ...rest }: ListItemProps) => JSX.Element;
