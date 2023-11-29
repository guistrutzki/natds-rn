/// <reference types="react" />
import { RatingCounterProps, RatingInputProps, RatingProps, RatingReadOnlyProps } from './Rating.types';
export declare const isRatingInput: (props: RatingProps) => props is RatingInputProps;
export declare const isRatingCounter: (props: RatingProps) => props is RatingCounterProps;
export declare const isRatingReadOnly: (props: RatingProps) => props is RatingReadOnlyProps;
export declare const renderTimes: (props: RatingProps) => 1 | 5;
export declare const isFilled: (value: number, props: RatingProps) => boolean | 0 | undefined;
export declare const isActive: (value: number, props: RatingProps) => boolean;
export declare const isDisabled: (props: RatingProps) => boolean | undefined;
export declare const Rating: (props: RatingProps) => JSX.Element;
