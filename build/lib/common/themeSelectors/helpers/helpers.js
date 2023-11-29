export const buildColorWithOpacity = (colorSelector, opacitySelector, theme) => {
    const colorHex = colorSelector(theme);
    const opacityScaleOne = opacitySelector(theme);
    const opacityScaleHundred = opacityScaleOne && typeof opacityScaleOne === 'number'
        ? opacityScaleOne * 100
        : '';
    return `${colorHex}${opacityScaleHundred}`;
};
//# sourceMappingURL=helpers.js.map