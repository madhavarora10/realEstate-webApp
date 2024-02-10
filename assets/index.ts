/* eslint-disable @typescript-eslint/quotes */
// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const index = {
  topPage: {
    showMobile: MOBILE_STATUS.ENABLE,
    status: STATUS.ENABLE,
    heading: 'REAL ESTATE',
    subHeading: "Let's hunt for your dream residence",
    descp: 'Explore our range of beautiful properties with the addition of separate accommodation suitable for you.',
    buttons: [
      {
        label: 'Buy',
        id: 'buy',
      },
      {
        label: 'Rent',
        id: 'rent',
      },
    ],
    searchBar: [
      {
        label: 'Location',
        options: [
          { label: 'location1', value: 'location1' },
          { label: 'location2', value: 'location2' },
          { label: 'location3', value: 'location3' },

        ],
      },
      {
        label: 'Type',
        options: [
          { label: 'location1', value: 'location1' },
          { label: 'location2', value: 'location2' },
          { label: 'location3', value: 'location3' },

        ],
      },
      {
        label: 'Price Range',
        options: [
          { label: 'location1', value: 'location1' },
          { label: 'location2', value: 'location2' },
          { label: 'location3', value: 'location3' },

        ],
      },
    ],
    searchButton: {
      label: 'Search',
      href: '/',
    },
  },
  Newsletter: {
    showMobile: MOBILE_STATUS.ENABLE,
    status: STATUS.ENABLE,
    heading: 'Subscribe Our Newsletter',
    descp: 'Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces. Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.',
    emailInput: {
      placeholder: "Enter your Email",
      buttonText: 'Get a Quote',
    },
    houseImage: "/home-page/3d-house.png",
  },
  middlePage2: {
    showMobile: MOBILE_STATUS.ENABLE,
    status: STATUS.ENABLE,
    heading: 'OUR ADVANTE',
    subHeading: 'Giving you peace of mind',
    cards: [
      {
        icon: {
          url: '/home-page/icons/heart.png', alt: 'icon', height: '44', width: '44',
        },
        heading: 'Comfortable',
        descp: "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
      },
      {
        icon: {
          url: '/home-page/icons/shield-done.png', alt: 'icon', height: '44', width: '44',
        },
        heading: 'Extra security',
        descp: "You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.",
      },
      {
        icon: {
          url: '/home-page/icons/star.png', alt: 'icon', height: '44', width: '44',
        },
        heading: 'Luxury',
        descp: "Find out how we provide the highest standard of professional property management to give you all the benefits of property.",
      },
      {
        icon: {
          url: '/home-page/icons/ticket-star.png', alt: 'icon', height: '44', width: '44',
        },
        heading: 'Best price',
        descp: "Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.",
      },
      {
        icon: {
          url: '/home-page/icons/location.png', alt: 'icon', height: '44', width: '44',
        },
        heading: 'Strategic location',
        descp: "located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.",
      },
      {
        icon: {
          url: '/home-page/icons/graph.png', alt: 'icon', height: '44', width: '44',
        },
        heading: 'Efficient',
        descp: "Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent",
      },
    ],
  },
  aboutUs: {
    showMobile: MOBILE_STATUS.ENABLE,
    status: STATUS.ENABLE,
    heading: 'ABOUT US',
    subHeading: 'How much is your property worth now?',
    descp: 'We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.',
    button: {
      label: 'Learn More',
      link: '/',
    },
    ratingsBg: {
      url: '/home-page/ratings.png',
      alt: 'about-bg',
      width: 196,
      height: 200,
    },
    cards: [
      {
        number: '250+',
        descp: 'Property Sale',
      },
      {
        number: '550+',
        descp: 'Appartment Rent',
      },
    ],

  },
  reviews: {
    showMobile: MOBILE_STATUS.ENABLE,
    status: STATUS.ENABLE,
    button: {
      label: 'Learn More',
      href: '/',
    },
    heading: 'CUSTOMER TESTIMONIAL',
    subHeading: 'Peopel say about us?',
    cards: [
      {
        commasImage: {
          url: '/home-page/invertedCommas.png',
          alt: 'inverted commas',
          width: 60,
          height: 60,
        },
        heading: 'It proved to be exactly the kind of home we wanted.',
        descp: 'We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.',
        pfp: {
          url: '/home-page/pfp1.png',
          width: '40',
          height: '40',
          alt: 'pfp',
        },
        name: 'Madhav Arora',
        profile: 'Fullstack Developer',
      },
      {
        commasImage: {
          url: '/home-page/invertedCommas.png',
          alt: 'inverted commas',
          width: 60,
          height: 60,
        },
        heading: 'Nobody knows Portland and the peninsula better than Madhav.',
        descp: 'My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland.',
        pfp: {
          url: '/home-page/pfp2.png',
          width: '40',
          height: '40',
          alt: 'pfp',
        },
        name: 'Madhav Arora',
        profile: 'Fullstack Developer',
      },
      {
        commasImage: {
          url: '/home-page/invertedCommas.png',
          alt: 'inverted commas',
          width: 60,
          height: 60,
        },
        heading: 'He keeps his clients best interests in sharp focus',
        descp: "After working with Madhav to sell my home in 2013, I was convinced that hes the only realtor Ill ever need. Since then, Ive bought two properties and sold one.",
        pfp: {
          url: '/home-page/pfp3.png',
          width: '40',
          height: '40',
          alt: 'pfp',
        },
        name: 'Madhav Arora',
        profile: 'Fullstack Developer',
      },
    ],
  },
};
export { index };
