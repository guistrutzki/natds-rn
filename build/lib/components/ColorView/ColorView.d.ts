declare type tokenLab = {
    labelToken: string;
    keyToken: string;
    deprecated?: boolean;
    internalOnly?: boolean;
};
declare const ColorView: ({ labelToken, keyToken, deprecated, internalOnly }: tokenLab) => JSX.Element;
export default ColorView;
