/// <reference types="react" />
import { AvatarIconProps, AvatarImageProps, AvatarLetterProps, AvatarProps } from './Avatar.types';
/**
 * Get the first character from first and last word
 * @param text string
 */
export declare const getTextValue: (text?: string) => string;
export declare const isAvatarLetter: (props: AvatarProps) => props is AvatarLetterProps;
export declare const isAvatarImage: (props: AvatarProps) => props is AvatarImageProps;
export declare const isAvatarIcon: (props: AvatarProps) => props is AvatarIconProps;
export declare const Avatar: (props: AvatarProps) => JSX.Element;
