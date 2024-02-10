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
    heading: string,
    listedLabel: string,
    dateLabel: string,
    typeLabel: string,
    laundryLabel: string,
    coolingLabel: string,
    heatingLabel: string,
    cityLabel: string,
    yearLabel: string,
    countryLabel: string,
    sizeLabel: string,
    parkingLabel: string,
    codeLabel: string,
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
  listedHeading:string,
  pfpImage:string

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

export type AgentCardProps = {
  placeholder:string,
  heading:string,
  data:{
    id: number;
    name: string;
    email: string;
    active: string
  }
};
