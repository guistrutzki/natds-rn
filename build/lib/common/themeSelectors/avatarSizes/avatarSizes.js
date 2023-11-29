import { getSize } from '../sizes/sizes';
export const getAvatarBySize = (size, theme) => {
    const sizes = {
        tiny: 'standard',
        small: 'semi',
        standard: 'semiX',
        large: 'medium',
        huge: 'largeXX'
    };
    const fontSize = {
        tiny: '12px',
        small: '14px',
        standard: '16px',
        large: '16px',
        huge: '24px'
    };
    return {
        size: getSize(theme, sizes[size]),
        fontSize: fontSize[size]
    };
};
//# sourceMappingURL=avatarSizes.js.map