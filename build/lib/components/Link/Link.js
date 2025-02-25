import React from 'react';
import { Label } from './Link.styles';
export const Link = ({ children, onPress, testID, type = 'standard', accessibilityHint, accessibilityRole }) => (<Label accessibilityHint={accessibilityHint} accessibilityRole={accessibilityRole} onPress={onPress} testID={testID} type={type}>
    {children}
  </Label>);
//# sourceMappingURL=Link.js.map