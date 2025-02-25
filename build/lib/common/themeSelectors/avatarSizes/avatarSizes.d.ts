import { Theme } from '../theme/theme';
export declare type AvatarSize = 'tiny' | 'small' | 'standard' | 'large' | 'huge';
export declare const getAvatarBySize: (size: AvatarSize, theme: Theme) => {
    size: number;
    fontSize: string;
};
