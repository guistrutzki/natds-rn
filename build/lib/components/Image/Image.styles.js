import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
export const getBorderRadius = ({ theme, radius = 'none' }) => {
    const borders = {
        none: 0,
        medium: theme.borderRadius.medium,
        circle: Dimensions.get('window').width * 2
    };
    return borders[radius] || borders.none;
};
export const Wrapper = styled.View(({ theme, radius = 'none' }) => ({
    flex: 1,
    borderRadius: getBorderRadius({ theme, radius }),
    overflow: 'hidden'
}));
export const Image = styled.Image(() => ({
    flex: 1,
    aspectRatio: 1
}));
export const Content = styled.View(() => ({
    position: 'absolute',
    top: 0,
    zIndex: 2,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center'
}));
//# sourceMappingURL=Image.styles.js.map