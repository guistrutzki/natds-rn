import { checkTheme } from '../theme/theme';
const getTypographyBody1 = (theme) => checkTheme(theme).body1;
const getTypographyCaption = (theme) => checkTheme(theme).caption;
const getTypographySubtitle2 = (theme) => checkTheme(theme).subtitle2;
const getBody1Styles = (theme) => ({
    fontSize: getTypographyBody1(theme).fontSize,
    fontWeight: getTypographyBody1(theme).fontWeight,
    letterSpacing: getTypographyBody1(theme).letterSpacing
});
const getCaptionStyles = (theme) => ({
    fontSize: getTypographyCaption(theme).fontSize,
    fontWeight: getTypographyCaption(theme).fontWeight,
    letterSpacing: getTypographyCaption(theme).letterSpacing
});
const getSubtitle2Styles = (theme) => ({
    fontSize: getTypographySubtitle2(theme).fontSize,
    fontWeight: getTypographySubtitle2(theme).fontWeight,
    letterSpacing: getTypographySubtitle2(theme).letterSpacing
});
export const getTypographyStyles = (theme) => ({
    body1: getBody1Styles(theme),
    caption: getCaptionStyles(theme),
    subtitle2: getSubtitle2Styles(theme)
});
//# sourceMappingURL=typography.js.map