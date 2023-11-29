/* eslint-disable max-len */
/* eslint-disable max-lines */
import React, { forwardRef, useState } from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { getPlaceholderTextColor, Input } from './TextField.styles';
import { InputFeedbackContainer } from '../InputFeedbackContainer';
import { TextFieldAction, TextFieldPasswordAction } from './TextFieldAction';
const statusActiveHandler = (event, nativeEvent, status, setActive) => {
    setActive(status);
    if (event)
        event(nativeEvent);
};
const isFieldFilled = ({ readonly, value }) => !readonly && value !== '';
const isEditable = ({ disabled, readonly }) => !disabled && !readonly;
const hasActionIcon = ({ action, actionComponent }) => !!(action === 'icon' && actionComponent);
const isNumberType = (type) => type === 'number';
const getKeyboardType = ({ keyboardType, type }) => (isNumberType(type) ? 'numeric' : keyboardType);
const handleOnChangeText = ({ onChangeText, text, type, setNumberValue }) => (isNumberType(type) ? setNumberValue(text.replace(/\D/g, '')) : onChangeText(text));
const getFieldValue = ({ numberValue, type, value }) => (isNumberType(type) ? numberValue : value);
const isPasswordType = (type) => type === 'password';
const isSecureText = ({ secureState, secureTextEntry, type }) => (isPasswordType(type) ? secureState : secureTextEntry);
const getContainerProps = ({ active, disabled, feedback, helperText }) => {
    if (disabled)
        return { disabled, helperText };
    if (feedback)
        return { active, feedback, helperText };
    return { active };
};
// eslint-disable-next-line complexity
export const TextField = forwardRef((props, ref) => {
    const theme = useTheme();
    const [active, setActive] = useState(false);
    const [numberValue, setNumberValue] = useState('');
    const { action, actionComponent, brand, disabled = false, feedback, helperText = '', keyboardType = 'default', label, onBlur = () => ({}), onChangeText = () => ({}), onFocus = () => ({}), readonly = false, required = false, secureTextEntry = false, size = 'mediumX', type = 'text', value = '', testID = 'ds-input', multiline = false } = props;
    const [secureState, setSecureState] = useState(isPasswordType(type));
    const fieldValue = getFieldValue({ numberValue, type, value });
    const isAndroidMultiline = Platform.OS === 'android' && multiline;
    return (<InputFeedbackContainer brand={brand} filled={isFieldFilled({ readonly, value })} helperText={helperText} label={label} required={required} 
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...getContainerProps({
        active, disabled, feedback, helperText
    })}>
      <Input ref={ref} style={{ textAlignVertical: isAndroidMultiline ? 'top' : 'auto' }} testID={testID} disabled={disabled} editable={isEditable({ disabled, readonly })} hasActionIcon={hasActionIcon({ action, actionComponent })} keyboardType={getKeyboardType({ keyboardType, type })} onBlur={(nativeEvent) => statusActiveHandler(onBlur, nativeEvent, false, setActive)} onChangeText={(text) => handleOnChangeText({
        onChangeText, setNumberValue, text, type
    })} onFocus={(nativeEvent) => !readonly
        && statusActiveHandler(onFocus, nativeEvent, true, setActive)} placeholderTextColor={getPlaceholderTextColor(disabled, theme)} readonly={readonly} secureTextEntry={isSecureText({ secureState, secureTextEntry, type })} size={size} value={fieldValue} accessible={props.accessible} accessibilityActions={props.accessibilityActions} accessibilityLabel={props.accessibilityLabel} accessibilityRole={props.accessibilityRole} accessibilityState={props.accessibilityState} accessibilityHint={props.accessibilityHint} accessibilityValue={props.accessibilityValue} onAccessibilityAction={props.onAccessibilityAction} allowFontScaling={props.allowFontScaling} autoCapitalize={props.autoCapitalize} autoComplete={props.autoCompleteType} autoCorrect={props.autoCorrect} autoFocus={props.autoFocus} blurOnSubmit={props.blurOnSubmit} clearButtonMode={props.clearButtonMode} clearTextOnFocus={props.clearTextOnFocus} contextMenuHidden={props.contextMenuHidden} dataDetectorTypes={props.dataDetectorTypes} defaultValue={props.defaultValue} disableFullscreenUI={props.disableFullscreenUI} enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically} importantForAutofill={props.importantForAutofill} inputAccessoryViewID={props.inputAccessoryViewID} keyboardAppearance={props.keyboardAppearance} maxFontSizeMultiplier={props.maxFontSizeMultiplier} maxLength={props.maxLength} multiline={multiline} numberOfLines={props.numberOfLines} onChange={props.onChange} onContentSizeChange={props.onContentSizeChange} onEndEditing={props.onEndEditing} onKeyPress={props.onKeyPress} onScroll={props.onScroll} onSelectionChange={props.onSelectionChange} onSubmitEditing={props.onSubmitEditing} onTextInput={props.onTextInput} passwordRules={props.passwordRules} placeholder={props.placeholder} rejectResponderTermination={props.rejectResponderTermination} returnKeyLabel={props.returnKeyLabel} returnKeyType={props.returnKeyType} scrollEnabled={props.scrollEnabled} selection={props.selection} selectionState={props.selectionState} selectTextOnFocus={props.selectTextOnFocus} showSoftInputOnFocus={props.showSoftInputOnFocus} spellCheck={props.spellCheck} textBreakStrategy={props.textBreakStrategy} textContentType={props.textContentType}/>
      {actionComponent && !!action
        && (<TextFieldAction accessibilityButtonHint={props.accessibilityButtonHint} accessibilityButtonLabel={props.accessibilityButtonLabel} accessibilityButtonRole={props.accessibilityButtonRole} action={action} actionComponent={actionComponent} size={size}/>)}
      {!actionComponent && type === 'password'
        && (<TextFieldPasswordAction accessibilityButtonHint={props.accessibilityButtonHint} accessibilityButtonLabel={props.accessibilityButtonLabel} secureState={secureState} onPress={() => setSecureState(!secureState)}/>)}
    </InputFeedbackContainer>);
});
//# sourceMappingURL=TextField.js.map