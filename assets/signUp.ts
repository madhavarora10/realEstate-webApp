// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const signUp = {

  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  body: {
    heading: 'Sign Up',
    descp: 'Hey, Enter your details to create your account',
    form: {
      nameLabel: 'Enter your Name',
      emailLabel: 'Enter Email',
      passwordLabel: 'Enter Password',
      confirmPasswordLabel: 'Confirm your Password',
    },
    signButton: 'Sign Up',

  },

};
export { signUp };
