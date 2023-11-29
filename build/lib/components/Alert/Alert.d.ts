/// <reference types="react" />
import { AlertCustomProps, AlertProps } from './Alert.types';
export declare const isAlertCustom: (props: AlertProps) => props is AlertCustomProps;
export declare const Alert: (props: AlertProps) => JSX.Element;
