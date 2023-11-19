import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const navbar = {

  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  navLinks: [
    {
      label: 'Home',
      link: PAGES.HOME,
    },
    {
      label: 'Property',
      link: PAGES.PROPERTY,
    },
    {
      label: 'About',
      link: PAGES.ABOUT_US,
    },
    {
      label: 'Service',
      link: PAGES.SERVICE,
    },
    {
      label: 'Contact',
      link: PAGES.CONTACT_US,
    },

  ],
  signupLinks: {
    label: 'Sign In',
    link: PAGES.SIGN_UP,
  },
  loginLinks: {

    label: 'Login',
    link: PAGES.LOGIN,

  },

};
export { navbar };
