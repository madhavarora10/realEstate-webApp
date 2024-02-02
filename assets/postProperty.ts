// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const postProperty = {

  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  body: {
    heading: 'Post your property',
    firstForm: {
      heading: 'Property Details',
      name: 'Enter name of your Project',
      descp: 'Enter a Description of your Property',
      sqft: 'Square Area',
      parkingSelect: {
        text: 'Parking Area',
        select: ['Yes', 'No'],
      },
      deposit: 'Deposit',
      price: 'Price',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      repairQuality: 'Repair Quality',
    },
    secondForm: {
      heading: 'Address Details',
      city: 'City',
      state: 'State',
      country: 'Country',
      address: 'Enter your Address',
      pincode: 'Pincode',
      coordinates: {
        text: 'Coordinates',
        lat: 'Enter latitude',
        long: 'Enter longitude',
      },
      type: {
        text: 'Type',
        select: ['House', 'Villa', 'PentHouse'],
      },
      laundry: {
        text: 'Laundry',
        select: ['In Unit', 'No'],
      },
      cooling: {
        text: 'Cooling',
        select: ['Air Conditioner', 'No'],
      },
      heating: {
        text: 'Heating',
        select: ['Forced Air', 'No'],
      },
    },
    thirdForm: {
      heading: 'Upload Property Images',
      imageCover: 'Upload Image Cover',
      images: 'Upload images',
    },
    modalContent: {
      title: 'Property Posted!',
      content: 'Your Property has uploaded successfully',
    },
    nextButton: 'Next',
    prevButton: 'Previous',
    submitButton: 'Submit',
  },

};
export { postProperty };
