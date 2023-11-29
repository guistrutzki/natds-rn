import themes, { Theme as ExternalTheme } from '@naturacosmeticos/natds-themes/react-native';
export declare type Theme = ExternalTheme;
export declare type ThemeMode = 'dark' | 'light';
export declare type Brand = 'aesop' | 'avon' | 'avon_v2' | 'biome' | 'natura' | 'theBodyShop' | 'consultoriaDeBeleza' | 'natura_v2' | 'casaEestilo';
export interface ThemeSelector {
    (theme: Theme): string | number | undefined;
}
export declare const buildTheme: (brand: Brand, mode: ThemeMode) => themes.Theme;
export declare const getTheme: (selector: ThemeSelector) => ({ theme }: {
    theme: Theme;
}) => string | number | undefined;
export declare const checkTheme: (theme: Theme) => themes.Theme;
