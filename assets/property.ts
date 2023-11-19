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
    heading: 'Beverly Springfield',
    location: '2821 Green valley, Highland Lake,Fl',
    price: '$2700 /month',
    button: {
      link: '/',
      text: 'View More',
    },
    ammentities: [
      {
        text: '6x7 m',
        label: 'Living Area',
        icon: 'area',
      },
      {
        text: '4',
        label: 'Bedrooms',
        icon: 'bedroom',
      },
      {
        text: '2',
        label: 'Bathrooms',
        icon: 'bathroom',
      },
      {
        text: 'ModrenLoft',
        label: 'Repair Quality',
        icon: 'brush',
      },
      {
        text: 'Active',
        label: 'Status',
        icon: 'tick',
      },
    ],
    descp: 'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease',
    features: [
      {
        label: 'Listed on ',
        text: '1 week',
      },
      {
        label: 'City',
        text: 'Houston',
      },
      {
        label: 'Date available',
        text: 'Available now',
      },
      {
        label: 'Year Built',
        text: '2018',
      },
      {
        label: 'Type',
        text: 'Home',
      },
      {
        label: 'Size',
        text: '2,173 sqft',
      },
      {
        label: 'Laundry',
        text: 'In unit',
      },
      {
        label: 'Lot Size',
        text: '9,060 sqft',
      },
      {
        label: 'Cooling',
        text: 'Air Conditioner',
      },
      {
        label: 'Parking Area',
        text: 'Yes',
      },
      {
        label: 'Heating',
        text: 'Forced Air',
      },
      {
        label: 'Deposit & Fees',
        text: '$2,700',
      },
    ],
  },

};
export { faqs };
