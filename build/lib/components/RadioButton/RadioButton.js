import React from 'react';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { Container, Circle, Center, Label, Wrapper } from './RadioButton.styles';
export const RadioButton = ({ color = 'primary', onPress, selected, disabled = false, label, brand, value = '', testID = 'radio-button' }) => {
    const onPressWithValue = () => {
        if (onPress) {
            onPress(value);
        }
    };
    const radio = (<TouchableRipple size={20} color={color} onPress={onPressWithValue} disabled={disabled} testID={testID} style={{ borderRadius: 50 }}>
      <Wrapper>
        <Circle brand={brand} disabled={disabled} color={color} selected={selected} testID={`${testID}-circle`}>
          {selected
        ? (<Center brand={brand} disabled={disabled} color={color} selected={selected} testID={`${testID}-circle-selected`}/>) : null}
        </Circle>
      </Wrapper>
    </TouchableRipple>);
    if (label) {
        return (<Container disabled={disabled} testID={`${testID}-label`} onPress={onPressWithValue}>
        {radio}
        <Label disabled={disabled}>{label}</Label>
      </Container>);
    }
    return radio;
};
//# sourceMappingURL=RadioButton.js.map