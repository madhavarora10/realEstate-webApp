/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
// import { TEXT } from '../../services/constants';

const getTextProperty: any = (size: any) => {
//   if (size === TEXT.TYPE_35_700_BLUE) {
//     return '!text-font-size-3.5 !font-font-weight-700 !text-color-5865F2  ';
//   }
//   if (size === TEXT.TYPE_15_700_GREY_UPPER) {
//     return '!text-font-size-1.5 !font-font-weight-700 !text-color-60656F uppercase';
//   }
//   if (size === TEXT.TYPE_15_700_BLACK_UPPER) {
//     return '!text-font-size-1.5 !font-font-weight-700 !text-color-232721 uppercase';
//   }
//   if (size === TEXT.TYPE_15_700_WHITE_UPPER) {
//     return '!text-font-size-1.5 !font-font-weight-700 !text-color-FFFFFF uppercase';
//   }
//   if (size === TEXT.TYPE_15_700_BLUE) {
//     return '!text-font-size-1.5 !font-font-weight-700 !text-color-5865F2 !leading-lh-1.75';
//   }
//   if (size === TEXT.TYPE_125_300_GREY) {
//     return '!text-font-size-1.25 !font-font-weight-300 !leading-lh-1.75 !text-color-60656F';
//   }
//   if (size === TEXT.TYPE_125_300_BLUE) {
//     return '!text-font-size-1.25 !font-font-weight-300 !leading-lh-1.75 !text-color-5865F2';
//   }
//   if (size === TEXT.TYPE_2_700_UPPER) {
//     return '!text-font-size-2 !font-font-weight-700 !leading-lh-2 !uppercase';
//   }
//   if (size === TEXT.TYPE_2_700) {
//     return '!text-font-size-2 !font-font-weight-700 !leading-lh-2.5';
//   }
//   if (size === TEXT.TYPE_2_700_BLUE) {
//     return '!text-font-size-2 !font-font-weight-700 !leading-lh-2 !text-color-5865F2 ';
//   }
//   if (size === TEXT.TYPE_15_700_BLACK) {
//     return '!text-font-size-1.5 !font-font-weight-700 !leading-lh-2 !text-color-232721';
//   }
//   if (size === TEXT.TYPE_125_300_WHITE) {
//     return '!text-font-size-1.25 !font-font-weight-300 !leading-lh-1.75 !text-color-FFFFFF';
//   }

  //   if (size === TEXT.TYPE_125_500_GREY) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-60656F';
  //   }
  //   if (size === TEXT.TYPE_1_300_GREY) {
  //     return '!text-font-size-1 !font-font-weight-300 !text-color-60656F';
  //   }
  //   if (size === TEXT.TYPE_1_500_GREY) {
  //     return '!text-font-size-1 !font-font-weight-500 !text-color-60656F';
  //   }
  //   if (size === TEXT.TYPE_1_500_BLUE) {
  //     return '!text-font-size-1 !font-font-weight-500 !text-color-5865F2';
  //   }
  //   if (size === TEXT.TYPE_1_300_WHITE) {
  //     return '!text-font-size-1 !font-font-weight-300 !text-color-FFFFFF';
  //   }
  //   if (size === TEXT.TYPE_1_500_WHITE_UPPER) {
  //     return '!text-font-size-1 !font-font-weight-500 !text-color-FFFFFF !uppercase';
  //   }
  //   if (size === TEXT.EMPTY) {
  //     return '';
  //   }
  //   // if (size === TEXT.TYPE_125_300_WHITE) {
  //   //   return '!text-font-size-1.25 !font-font-weight-300 !text-color-FFFFFF';
  //   // }
  //   if (size === TEXT.TYPE_2_700_WHITE) {
  //     return '!text-font-size-2 !font-font-weight-700 !text-color-FFFFFF  ';
  //   }
  //   if (size === TEXT.TYPE_2_700_BLUE_UPPER) {
  //     return '!text-font-size-2 !font-font-weight-900 !text-color-5865F2 !leading-lh-2.5 uppercase  ';
  //   }
  //   if (size === TEXT.TYPE_2_700_BLACK_UPPER) {
  //     return '!text-font-size-2 !font-font-weight-900 !text-color-232721 !leading-lh-2.5 uppercase  ';
  //   }
  //   if (size === TEXT.TYPE_125_500_GREY_UPPER) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-60656F uppercase  ';
  //   }
  //   if (size === TEXT.TYPE_125_500_BLUE_UPPER) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-5865F2 uppercase  ';
  //   }
  //   if (size === TEXT.TYPE_125_500_WHITE_UPPER) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-FFFFFF uppercase  ';
  //   }
  //   if (size === TEXT.TYPE_125_500_BLACK) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-232721';
  //   }
  //   if (size === TEXT.TYPE_125_500_BLACK_UPPER) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-232721 uppercase';
  //   }
  //   if (size === TEXT.TYPE_125_500_BLUE) {
  //     return '!text-font-size-1.25 !font-font-weight-500 !text-color-5865F2';
  //   }
  //   if (size === TEXT.TYPE_125) {
  //     return 'text-font-size-1.25 ';
  //   }
  //   if (size === TEXT.TYPE_15_500_BLACK) {
  //     return '!text-font-size-1.5 !font-font-weight-500 !leading-lh-2 !text-color-232721 ';
  //   }
  //   if (size === TEXT.TYPE_0875_300_GREY) {
  //     return '!text-font-size-0.875 !font-font-weight-300 !text-color-60656F ';
  //   }
  //   if (size === TEXT.TYPE_125_700_BLACK) {
  //     return '!text-font-size-1.25 !font-font-weight-700 !text-color-232721  ';
  //   }

//   return '';
};

export { getTextProperty };
