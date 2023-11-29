/// <reference types="react" />
export interface HelperTextProps {
    color?: string;
    content: string;
    feedback?: 'success' | 'error';
}
export declare const InputHelperText: ({ color, content, feedback }: HelperTextProps) => JSX.Element;
