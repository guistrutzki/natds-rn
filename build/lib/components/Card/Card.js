import React from 'react';
import { CardBase } from './Card.styles';
export const Card = ({ children, testID = 'card', type = 'base', elevation = true, radius = true }) => (<CardBase testID={testID} type={type} elevation={elevation} radius={radius}>
    {children}
  </CardBase>);
//# sourceMappingURL=Card.js.map