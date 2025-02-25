import React from 'react';
import { Icon } from '../Icon';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { Container, Box, Label, Wrapper } from './Checkbox.styles';
const getIconName = (indeterminate) => (indeterminate
    ? 'outlined-action-subtract'
    : 'outlined-action-done');
const SelectedIcon = ({ indeterminate }) => (<Icon color="surface" name={getIconName(indeterminate)} size="small"/>);
export const Checkbox = ({ accessibilityHint, accessibilityLabel, accessibilityRole, accessibilityState, color = 'primary', disabled = false, indeterminate = false, label, brand, mode, onPress, selected = false, testID = 'checkbox', value = '' }) => {
    const onPressWithValue = () => {
        if (onPress) {
            onPress(value);
        }
    };
    const checkbox = (<Container accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole={accessibilityRole} accessibilityState={accessibilityState} disabled={disabled} onPress={onPressWithValue} testID={testID}>
      <TouchableRipple size={20} color={color} onPress={onPressWithValue} disabled={disabled} style={{ borderRadius: 50 }}>
        <Wrapper>
          <Box brand={brand} mode={mode} disabled={disabled} color={color} selected={selected} testID={`${testID}-box`}>
            {selected
        ? <SelectedIcon indeterminate={indeterminate}/>
        : null}
          </Box>
        </Wrapper>
      </TouchableRipple>
      {label
        && <Label brand={brand} mode={mode} testID={`${testID}-label`} disabled={disabled}>{label}</Label>}
    </Container>);
    return checkbox;
};
//# sourceMappingURL=Checkbox.js.map