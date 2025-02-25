import { ReactElement } from 'react';
declare type TokenMosaicData = Record<string, string>;
declare type TokenMosaicWithCategoriesData = Record<string, TokenMosaicData>;
interface ItemRenderer {
    (key: string, data: TokenMosaicData): ReactElement;
}
interface TokenColorProps {
    colorName: string;
    color: string;
}
interface TokenMosaicProps {
    data: TokenMosaicData;
    itemRenderer: ItemRenderer;
}
interface TokenMosaicWithCategoriesProps {
    categories: TokenMosaicWithCategoriesData;
    itemRenderer: ItemRenderer;
}
export declare const TokenMosaicWithCategories: ({ categories, itemRenderer }: TokenMosaicWithCategoriesProps) => JSX.Element;
export declare const TokenMosaic: ({ data, itemRenderer }: TokenMosaicProps) => JSX.Element;
export declare const TokenColor: ({ colorName, color }: TokenColorProps) => JSX.Element;
export {};
