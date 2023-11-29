/// <reference types="react" />
import { BadgeProps, BadgeStandardProps } from './Badge.types';
export declare const buildValue: ({ value, limit }: BadgeStandardProps) => string | number;
export declare const isBadgeStandard: (props: BadgeProps) => props is BadgeStandardProps;
export declare const Badge: (props: BadgeProps) => JSX.Element;
