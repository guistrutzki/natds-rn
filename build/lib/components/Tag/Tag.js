import React from 'react';
import { Container, Label } from './Tag.styles';
export const Tag = (props) => {
    const { testID = 'ds-tag', color = 'primary', size = 'small', borderPosition = 'default', accessible, accessibilityRole, accessibilityHint, accessibilityLabel, accessibilityState, allowFontScaling, maxFontSizeMultiplier, text, brand } = props;
    return (<Container testID={testID} brand={brand} color={color} size={size} borderPosition={borderPosition}>
      <Label color={color} brand={brand} testID={`${testID}-label`} accessible={accessible} accessibilityRole={accessibilityRole} accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityState={accessibilityState} allowFontScaling={allowFontScaling} maxFontSizeMultiplier={maxFontSizeMultiplier}>
        {text}
      </Label>
    </Container>);
};
//# sourceMappingURL=Tag.js.map