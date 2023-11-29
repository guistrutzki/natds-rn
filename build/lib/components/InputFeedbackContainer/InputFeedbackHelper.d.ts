export declare type InputStates = 'active' | 'default' | 'disabled' | 'error' | 'filled' | 'success';
export interface InputFeedbackProps {
    active?: boolean;
    disabled?: boolean;
    filled?: boolean;
    feedback?: 'success' | 'error';
}
export declare const buildInputState: ({ active, disabled, feedback, filled }: InputFeedbackProps) => InputStates;
