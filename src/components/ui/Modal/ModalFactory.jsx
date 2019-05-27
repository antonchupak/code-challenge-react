import React from 'react';

import { MODAL_USER_DETAILS_KEY } from './../../../framework/constants';

import ModalUserDetails from './ModalUserDetails/ModalUserDetails';

export const ModalFactory = {
  [MODAL_USER_DETAILS_KEY]: (props) => (<ModalUserDetails {...props} />)
};
