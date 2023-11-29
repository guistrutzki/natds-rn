import React from 'react';
import Modal from '../../common/Modal';
import { DialogWrapper, DialogOverlay, DialogContainer } from './Dialog.styles';
export const Dialog = ({ testID = 'ds-dialog', children, visible, onRequestClose, hardwareAccelerated, onShow, supportedOrientations, onOrientationChange, onDismiss }) => (<Modal animationType="fade" visible={visible} transparent onRequestClose={onRequestClose} hardwareAccelerated={hardwareAccelerated} supportedOrientations={supportedOrientations} onShow={onShow} onOrientationChange={onOrientationChange} onDismiss={onDismiss}>
    <DialogWrapper>
      <DialogOverlay />
      <DialogContainer testID={testID}>
        {children}
      </DialogContainer>
    </DialogWrapper>
  </Modal>);
//# sourceMappingURL=Dialog.js.map