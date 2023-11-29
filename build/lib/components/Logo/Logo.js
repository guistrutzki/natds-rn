import React from 'react';
import { SvgCss } from 'react-native-svg';
import styled, { useTheme } from 'styled-components/native';
import { getColorByName, getCustomLogoA, getCustomLogoB, getNeutralLogoA, getNeutralLogoB, getSize } from '../../common/themeSelectors';
const setStyle = ({ hexColor, width, height }, svg) => {
    const fillPattern = /path\s+?\{\s+?fill:\s+?(#[a-zA-Z\d]{6,8})\s+?\}/gm;
    const widthPattern = /width="(\d+)"/;
    const heightPattern = /height="(\d+)"/;
    return svg
        .replace(fillPattern, `path { fill: ${hexColor || '$1'} }`)
        .replace(widthPattern, `width="${width || '$1'}"`)
        .replace(heightPattern, `height="${height || '$1'}"`);
};
const getLogoType = (color) => (color === 'neutral' ? 'neutral' : 'custom');
const getCustomColor = (color, theme) => (color === 'neutral' ? undefined : getColorByName(theme, color));
const getLogoByProps = (color, model, theme) => {
    const type = getLogoType(color);
    /* eslint-disable id-length */
    const logo = {
        custom: {
            a: getCustomLogoA(theme),
            b: getCustomLogoB(theme)
        },
        neutral: {
            a: getNeutralLogoA(theme),
            b: getNeutralLogoB(theme)
        }
    };
    /* eslint-enable id-length */
    return logo[type][model];
};
const Container = styled.View(() => ({
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
}));
export const Logo = ({ accessibilityLabel, color = 'neutral', model = 'a', size = 'veryHuge' }) => {
    const theme = useTheme();
    const { file, height, width } = getLogoByProps(color, model, theme);
    const logo = setStyle({
        height: (getSize(theme, size) * height) / width,
        hexColor: getCustomColor(color, theme),
        width: getSize(theme, size)
    }, file);
    return (<Container>
      <SvgCss accessible={!!accessibilityLabel} accessibilityLabel={accessibilityLabel} accessibilityRole="image" testID="logo" xml={logo}/>
    </Container>);
};
//# sourceMappingURL=Logo.js.map