import { PropertyType } from '../property-type';

export type propertyView = {
  showMobile: number,
  status: number
  buttons: [
    {
      icons: string,
      label: string,
      link: string,
    },
  ],
  viewButton: {
    icon: string,
    label: string,
    link: string,
  },
  requestCard: {
    buy: string,
    applyButton: {
      label: string,
      icon: string,
      link: string,
    },
    sendRequest: {
      heading: string,
      buttons: [
        {
          icons: string,
          label: string,
        },
      ],
      requestButton: {
        icon: string,
        label: string,
        link: string,
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
    label:string,
    icon: string,
  },
  bathrooms: {
    label:string,
    icon: string,
  },
  squareArea: {
    label:string,
    icon: string,
  },
  repair: {
    label:string,
    icon: string,
  },
  statusVal: {
    label:string,
    icon: string,
  },
  mapHeading: string,
  privacyText: string,
  heading: string,

};
export type PropertyPageProps = {
  heros:propertyView,
  doc:PropertyType
};

export type requestCard = {
  buy: string,
  price: number,
  applyButton: {
    label: string,
    icon: string,
    link: string,
  },
  sendRequest: {
    heading: string,
    buttons: [
      {
        icons: string,
        label: string,
      },
    ],
    requestButton: {
      icon: string,
      label: string,
      link: string,
    },
  },
};
