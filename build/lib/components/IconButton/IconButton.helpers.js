import { getColorByName, buildColorWithOpacity, getColorHighlight, getOpacityVeryHigh, getShadowBySize } from '../../common/themeSelectors';
export const getContainerBackgroundColor = ({ theme, backgroundStyle = 'none', disabled }) => {
    const float = disabled
        ? getColorByName(theme, 'lowEmphasis')
        : getColorByName(theme, 'surface');
    const backgroundColor = {
        float,
        none: 'transparent',
        overlay: buildColorWithOpacity(getColorHighlight, getOpacityVeryHigh, theme)
    };
    return backgroundColor[backgroundStyle];
};
export const getIconSize = (size) => {
    const iconSize = {
        medium: 'semiX',
        semi: 'standard',
        semiX: 'semi',
        small: 'standard'
    };
    return iconSize[size];
};
export const getIconColor = (color, disabled) => {
    const highEmphasis = disabled ? 'mediumEmphasis' : 'highEmphasis';
    const iconColor = {
        default: highEmphasis,
        highEmphasis,
        light: disabled ? 'lowEmphasis' : 'surface',
        primary: disabled ? 'mediumEmphasis' : 'primary'
    };
    return iconColor[color];
};
export const getContainerElevation = (backgroundStyle, theme) => (backgroundStyle === 'float'
    ? getShadowBySize(theme, 'micro')
    : { elevation: 0 });
//# sourceMappingURL=IconButton.helpers.js.map