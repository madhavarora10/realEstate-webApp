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
      label: 'Buy Properties',
      link: PAGES.PROPERTY,
    },
    {
      label: 'Sell',
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
    label: 'Sign Up',
    link: PAGES.SIGN_UP,
  },
  loginLinks: {

    label: 'Login',
    link: PAGES.LOGIN,

  },
  userImg: '/home-page/user-img.png',
  itemsArray: [
    {
      label: 'Profile',
      link: '/profile',
      key: '0',
    },
    {
      label: 'My Listings',
      link: '/listings',
      key: '1',
    },
  ],
};
export { navbar };
