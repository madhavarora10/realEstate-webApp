import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const footer = {

  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  descp: 'We have built our reputation as true local area experts.',
  newsletter: {
    heading: 'Newsletter',
    placeholder: 'Input your email',
    button: {
      label: 'Send',
      link: '/',
    },
  },
  body: [
    {
      label: 'Service',
      body: [
        {
          label: 'About us',
          link: PAGES.HOME,
        },
        {
          label: 'Careers',
          link: PAGES.HOME,
        },
        {
          label: 'Terms & Conditions',
          link: PAGES.HOME,
        },
        {
          label: 'Privacy & Policy',
          link: PAGES.HOME,
        },
      ],
    },
    {
      label: 'Community',
      body: [
        {
          label: 'Find agents',
          link: PAGES.HOME,
        },
        {
          label: 'Lifestyle',

          link: PAGES.HOME,
        },
        {
          label: 'Legal notice',
          link: PAGES.HOME,
        },
      ],
    },
  ],
  socials: {
    heading: 'Follow us on',
    socialsLinks: [
      {
        icons: 'github',
        link: '/',
      },
      {
        icons: 'youtube',
        link: '/',
      },
      {
        icons: 'facebook',
        link: '/',
      },
    ],
  },

};
export { footer };
