/* eslint-disable @typescript-eslint/quotes */
// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const propertyView = {
  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  buttons: [
    {
      icons: '',
      label: 'Share',
      link: '/',
    },
    {
      icons: '',
      label: 'Favorite',
      link: '/',
    },
    {
      icons: '',
      label: 'View on Map',
      link: '/',
    },
  ],
  viewButton: {
    icon: '',
    label: 'View all photos',
    link: '/',
  },
  requestCard: {
    buy: 'Buy Price',
    applyButton: {
      label: 'Apply Now',
      icon: '',
      link: '',
    },
    sendRequest: {
      heading: 'Request a home tour',
      buttons: [
        {
          icons: '',
          label: "In Person",
        },
        {
          icons: '',
          label: "Virtual",
        },
      ],
      requestButton: {
        icon: '',
        label: 'Request a tour',
        link: '',
      },
    },
  },
  features: {
    heading: 'Rental Features',
    listedLabel: 'Listed on ',
    dateLabel: 'Date available ',
    typeLabel: ' Type ',
    laundryLabel: ' Laundry ',
    coolingLabel: 'Cooling',
    heatingLabel: 'Heating',
    cityLabel: 'City',
    yearLabel: 'Year Built',
    countryLabel: 'Country',
    sizeLabel: 'Lot Size',
    parkingLabel: 'Parking Area',
    codeLabel: 'Pin code',
  },
  bedrooms: {
    label: 'Bedrooms',
    icon: '',
  },
  bathrooms: {
    label: 'Bathrooms',
    icon: '',
  },
  squareArea: {
    label: 'Square Area',
    icon: '',
  },
  repair: {
    label: 'Repair Quality',
    icon: '',
  },
  statusVal: {
    label: 'Status',
    icon: '',
  },
  mapHeading: 'Map',
  heading: 'About this home',
  privacyText: "You agree to Terms of Use & Privacy Policy. By choosing to contact a property, you also agree that landlords, and property managers may call or text you about any inquiries you submit through our services, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.",

};
export { propertyView };
