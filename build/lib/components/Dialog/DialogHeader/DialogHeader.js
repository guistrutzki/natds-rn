import React from 'react';
import { DialogHeaderContainer, DialogHeaderContent } from './DialogHeader.styles';
export const DialogHeader = ({ children, testID = 'ds-dialog-header', icon }) => (<DialogHeaderContainer testID={testID}>
    {children}
    <DialogHeaderContent>{icon}</DialogHeaderContent>
  </DialogHeaderContainer>);
//# sourceMappingURL=DialogHeader.js.map