/* eslint-disable @typescript-eslint/quotes */
// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const properties = {
  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  heading: 'Search properties to Buy',
  searchBar: {
    placeholder: 'Search...',
    link: '/',
  },
  viewMapButton: 'View on Map',
  searchNav: {
    body: [
      {
        input: 'inputbox',
        label: 'Location',
        apiLabel: 'location',
        placeholder: 'Location',
        options: [
          { label: 'Austin', value: 'Austin' },
          { label: 'California', value: 'California' },
          { label: 'Arizona', value: 'Arizona' },
          { label: 'Missouri', value: 'Missouri' },
          { label: 'Florida', value: 'Florida' },
        ],

      },
      // {
      //   input: 'calendar',
      //   label: 'When',
      //   placeholder: 'Select Move-in Date',

      // },
      {
        input: 'inputbox',
        label: 'Price',
        apiLabel: 'priceLte',
        placeholder: 'price',
        options: [
          { label: '80,000', value: 80000 },
          { label: '$100,000', value: 100000 },
          { label: '$150,000', value: 150000 },
          { label: '$200,000', value: 200000 },
          { label: '$250,000+', value: 250000 },
        ],

      },
      {
        input: 'inputbox',
        label: 'Property Type',
        apiLabel: 'propertyType',
        placeholder: 'House',
        options: [
          { label: 'House', value: 'House' },
          { label: 'Townhouses', value: 'Townhouses' },
          { label: 'Flat', value: 'Flat' },
        ],

      },
    ],
    button: {
      label: 'Search',
      link: '/',
    },

  },
  cards: [
    {
      popular: true,
      img: {
        url: '/home-page/houseimage1.png',
        height: '248',
        width: '348',
        alt: 'house Image',
      },
      heading: 'Beverly Springfield',
      location: '2821 Green valley, Highland Lake,Fl',
      price: '$2700 /month',
      area: {
        text: '6x7 m',
        areaSpace: 'Living Area',
      },
      button: {
        link: '/',
        text: 'View More',
      },
    },
    {
      popular: true,
      img: {
        url: '/home-page/houseimage2.png',
        height: '248',
        width: '348',
        alt: 'house Image',
      },
      heading: 'Faulkner Ave',
      location: '909 Wooodland, Michigan,Fl',
      price: '$4500 /month',
      area: {
        text: '8x10 m',
        areaSpace: 'Living Area',
      },
      button: {
        link: '/',
        text: 'View More',
      },
    },
    {
      popular: true,
      img: {
        url: '/home-page/houseimage3.png',
        height: '248',
        width: '348',
        alt: 'house Image',
      },
      heading: 'Palm Harbor',
      location: '2699 Green valley, Highland Lake,Fl',
      price: '$2400 /month',
      area: { text: '5x7 m', areaSpace: 'Living Area' },
      button: {
        link: '/',
        text: 'View More',
      },
    },
  ],

};
export { properties };
