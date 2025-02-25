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
import React, { forwardRef } from 'react';
import * as S from './Image.styles';
import { Highlight } from './Hightlight';
export const Image = forwardRef((props, ref) => {
    const { variant = 'standard', radius = 'none', fade, children, testID } = props, rest = __rest(props, ["variant", "radius", "fade", "children", "testID"]);
    return (<S.Wrapper radius={radius} testID={testID}>
        {radius !== 'circle' && (<S.Content>
          {children}
        </S.Content>)}
        {variant === 'highlight' && <Highlight fade={fade} variant={variant}/>}
        <S.Image ref={ref} {...rest}/>
      </S.Wrapper>);
});
//# sourceMappingURL=Image.js.map