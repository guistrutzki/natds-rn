import { checkTheme } from '../theme/theme';
const getAssets = (theme) => checkTheme(theme).asset;
const getBrandAssets = (theme) => getAssets(theme).brand;
const getBrandAssetsByModel = (theme, type, model) => getBrandAssets(theme)[type][model];
export const getNeutralLogoA = (theme) => ({
    file: getBrandAssetsByModel(theme, 'neutral', 'a').file,
    height: getBrandAssetsByModel(theme, 'neutral', 'a').height,
    width: getBrandAssetsByModel(theme, 'neutral', 'a').width
});
export const getNeutralLogoB = (theme) => ({
    file: getBrandAssetsByModel(theme, 'neutral', 'b').file,
    height: getBrandAssetsByModel(theme, 'neutral', 'b').height,
    width: getBrandAssetsByModel(theme, 'neutral', 'b').width
});
export const getCustomLogoA = (theme) => ({
    file: getBrandAssetsByModel(theme, 'custom', 'a').file,
    height: getBrandAssetsByModel(theme, 'custom', 'a').height,
    width: getBrandAssetsByModel(theme, 'custom', 'a').width
});
export const getCustomLogoB = (theme) => ({
    file: getBrandAssetsByModel(theme, 'custom', 'b').file,
    height: getBrandAssetsByModel(theme, 'custom', 'b').height,
    width: getBrandAssetsByModel(theme, 'custom', 'b').width
});
//# sourceMappingURL=assets.js.map