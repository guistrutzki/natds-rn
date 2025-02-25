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
import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { ListItem as ListItemComponent } from './ListItem.styles';
const ListWrapper = (_a) => {
    var { onPress, children, feedback } = _a, props = __rest(_a, ["onPress", "children", "feedback"]);
    if (!onPress) {
        return (<View>
        {children}
      </View>);
    }
    if (feedback === 'ripple') {
        return (<TouchableRipple onPress={onPress} {...props}>
        {children}
      </TouchableRipple>);
    }
    return (<TouchableWithoutFeedback onPress={onPress} {...props}>
      {children}
    </TouchableWithoutFeedback>);
};
export const ListItem = (_a) => {
    var { children, onPress, testID = 'list-item', feedback = 'ripple' } = _a, rest = __rest(_a, ["children", "onPress", "testID", "feedback"]);
    return (<ListWrapper color="highlight" hideOverflow onPress={onPress} testID={`${testID}-wrapper`} feedback={feedback}>
    <ListItemComponent testID={testID} onPress={onPress} {...rest}>
      {children}
    </ListItemComponent>
  </ListWrapper>);
};
//# sourceMappingURL=ListItem.js.map