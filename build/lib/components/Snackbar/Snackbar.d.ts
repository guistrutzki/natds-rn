/// <reference types="react" />
export declare type SnackbarType = 'standard' | 'success' | 'error' | 'warning' | 'info';
export interface SnackbarProps {
    /**
     * Snackbar's message content
     */
    message: string;
    /**
     * Snackbar's button text content when available
     */
    buttonText?: string;
    /**
     * Snackbar's type
     */
    type?: SnackbarType;
    /**
     * Snackbar's shown duration.
     */
    autoHideDuration?: number;
    /**
     * Whether the Snackbar is open
     */
    open: boolean;
    /**
     * How many message lines to be shown before clipping
     */
    numberOfLines?: number;
    /**
     * Callback when Snackbar is closed. The 'open' prop needs to be updated when this is called
     */
    onClose?: () => void;
}
export declare const Snackbar: ({ message, buttonText, type, autoHideDuration, open, numberOfLines, onClose }: SnackbarProps) => JSX.Element | null;
