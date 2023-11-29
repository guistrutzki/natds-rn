import { ReactNode } from 'react';
export declare const DialogOverlay: any;
export declare const DialogWrapper: any;
export declare const DialogContainer: any;
export declare const DialogTitle: (props: any) => JSX.Element;
export declare const DialogContentText: any;
export interface DialogContentProps {
    /**
     * The optional children
     * Can receive any component as a child to be used as content
     */
    children?: ReactNode;
    /**
     * The optional divider
     * When true, a top and bottom line of content will appear
     */
    divider?: boolean;
}
export declare const DialogContent: ({ children, divider }: DialogContentProps) => JSX.Element;
export declare type AlignmentOptions = 'side-by-side' | 'stacked';
export interface DialogActionsProps {
    /**
     * @deprecated `actionsAlignment` prop since 7.4.0
     */
    actionsAlignment?: AlignmentOptions;
}
export declare const DialogActions: any;
