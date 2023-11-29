var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable max-len */
import React from 'react';
import { Wrapper, Content, Label } from './Rating.styles';
import { RatingBase } from './RatingBase';
export const isRatingInput = (props) => props.variant === 'input';
export const isRatingCounter = (props) => props.variant === 'counter';
export const isRatingReadOnly = (props) => props.variant === 'read-only';
export const renderTimes = (props) => (isRatingCounter(props) ? 1 : 5);
export const isFilled = (value, props) => !isRatingInput(props) || (props.rate && value + 1 <= props.rate);
export const isActive = (value, props) => (!isRatingCounter(props) && (props.rate && value + 1 <= props.rate)) || isRatingCounter(props);
export const isDisabled = (props) => isRatingInput(props) && props.disabled;
export const Rating = (props) => {
    const { size = 'semi', variant, testID = 'ds-rating' } = props, rest = __rest(props, ["size", "variant", "testID"]);
    const renderRatingLabel = () => {
        if ((isRatingInput(props) || isRatingCounter(props))) {
            const { label } = props;
            return <Label testID={`${testID}-label`} variant={variant}>{label}</Label>;
        }
        return null;
    };
    return (<Wrapper testID={testID} variant={variant} {...rest}>
      <Content testID={`${testID}-content`} variant={variant} {...rest}>
        {Array(renderTimes(props)).fill(0).map((_, index) => ((isRatingCounter(props) || isRatingReadOnly(props) || isRatingInput(props)) && (<RatingBase testID={`${testID}-${index + 1}`} key={index.toString()} size={size} onPress={isRatingInput(props) ? () => props.onPress(index + 1) : undefined} iconActive={!!isActive(index, props)} iconFilled={!!isFilled(index, props)} disabled={isDisabled(props)} isClickable={isRatingInput(props)}/>)))}
      </Content>
      {renderRatingLabel()}
    </Wrapper>);
};
//# sourceMappingURL=Rating.js.map