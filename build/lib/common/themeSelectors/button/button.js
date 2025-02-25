import { checkTheme } from '../theme/theme';
const getButtonProps = (theme) => checkTheme(theme).button;
const getButtonPropsByType = (theme, type) => getButtonProps(theme)[type];
export const getDefaultButtonProps = (theme) => getButtonPropsByType(theme, 'contained');
//# sourceMappingURL=button.js.map