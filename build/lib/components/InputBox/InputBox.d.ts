import { ReactNode } from 'react';
import { InputStates } from '../InputFeedbackContainer/InputFeedbackHelper';
interface InputBoxProps {
    boxColor?: string;
    boxState?: Extract<InputStates, 'active'>;
    children: ReactNode;
}
export declare const InputBox: ({ boxColor, boxState, children }: InputBoxProps) => JSX.Element;
export {};
