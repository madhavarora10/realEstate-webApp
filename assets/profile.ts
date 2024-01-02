// import { BUTTON } from '../../src/services/constants';

import { PAGES } from '../src/common/constants';
import { MOBILE_STATUS, STATUS } from '../src/common/constants/status';

const profile = {

  showMobile: MOBILE_STATUS.ENABLE,
  status: STATUS.ENABLE,
  body: {
    heading: 'Edit Profile',
    heading2: 'Change Password',
    userImg: '/home-page/user-img.png',
    userName: 'Your Name',
    form: {
      name: 'Change your Name',
      emailLabel: 'Enter your Email',
      passwordLabel: 'Enter New Password',
      passwordConfirmLabel: 'Confirm your New Password',
      saveButton: 'Save',
    },
    modalContent: {
      title: 'Password Changed',
      content: 'Your Password has changed successfully',
    },
    imageModalContent: {
      title: 'Image Uploaded',
      content: 'Your Image has uploaded successfully',
    },
    nameModalContent: {
      title: 'Name Changed',
      content: 'Your name has changed successfully',
    },
  },

};
export { profile };
