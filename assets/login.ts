// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const login = {

  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  body: {
    heading: 'Sign In',
    descp: 'Hey, Enter your details to login to your account',
    form: {
      emailLabel: 'Enter Email',
      passwordLabel: 'Enter Password',
      signButton: 'Sign in',
    },
    accountText: "Don't have an account yet?",
    Register: { text: 'Register now!', link: PAGES.SIGN_UP },

  },

};
export { login };
