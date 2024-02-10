import { MOBILE_STATUS, STATUS, TYPE_NAME } from '../src/common/constants/status';

const faqs = {
  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  body: {
    buttons: [
      {
        link: '/',
        text: 'Share',
        icon: 'share',
      },
      {
        link: '/',
        text: 'Favorite',
        icon: 'favorite',
      },
      {
        link: '/',
        text: 'Browse nearby listings',
        icon: 'browse',
      },
    ],
    img: [
      {
        url: '/home-page/houseimage1.png',
        height: '248',
        width: '348',
        alt: 'house Image',
      },
      {
        url: '/home-page/houseimage1.png',
        height: '248',
        width: '348',
        alt: 'house Image',
      },
      {
        url: '/home-page/houseimage1.png',
        height: '248',
        width: '348',
        alt: 'house Image',
      },
    ],

    button: {
      link: '/',
      text: 'View More',
    },
    ammentities: [
      {

        label: 'Living Area',
        icon: 'area',
      },
      {

        label: 'Bedrooms',
        icon: 'bedroom',
      },
      {

        label: 'Bathrooms',
        icon: 'bathroom',
      },
      {

        label: 'Repair Quality',
        icon: 'brush',
      },
      {

        label: 'Status',
        icon: 'tick',
      },
    ],
    features: [
      {
        label: 'Listed on ',

      },
      {
        label: 'City',

      },
      {
        label: 'Date available',

      },
      {
        label: 'Year Built',

      },
      {
        label: 'Type',

      },
      {
        label: 'Size',

      },
      {
        label: 'Laundry',

      },
      {
        label: 'Lot Size',

      },
      {
        label: 'Cooling',

      },
      {
        label: 'Parking Area',

      },
      {
        label: 'Heating',

      },
      {
        label: 'Deposit & Fees',

      },
    ],
    listedHeading: 'Listed By Agent:',
    pfpImage: '/place-holder/pfp2.png',
  },

};
export { faqs };
