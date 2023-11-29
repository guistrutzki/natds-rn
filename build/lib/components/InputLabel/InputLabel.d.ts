/// <reference types="react" />
export interface LabelProps {
    color?: string;
    content: string;
    required?: boolean;
}
export declare const Label: any;
export declare const InputLabel: ({ color, content, required }: LabelProps) => JSX.Element;
