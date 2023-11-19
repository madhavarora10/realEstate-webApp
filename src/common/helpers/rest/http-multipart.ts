// import {
//   Platform,
// } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import NetInfo from '@react-native-community/netinfo';
// import { appVersionInfo } from '../../../../react-native.config';

// import {
//   APP,
//   KEYS,
//   MESSAGES,
//   SIGN_IN_OPERATIONS,
// } from '../../constants';

// import {
//   AsyncStorageUtil,
//   BuildConfig,
//   DateTimeUtils,
//   EncryptionUtil,
//   LoggerUtil,
//   Utils,
// } from '../../utils';

// class HttpMultipartPostRequest {
//   static getRequestObj = () => {
//     const requestObj = {
//       key: '',
//       data: null,
//     };
//     return (
//       requestObj
//     );
//   };

//   static getMultipartImageObj = () => {
//     const multipartImageObj = {
//       key: '',

//       // array of image object
//       images: [],
//     };
//     return (
//       multipartImageObj
//     );
//   };

//   static getImageObj = () => {
//     const imageObj = {
//       fileName: '',
//       uri: '',
//     };
//     return (
//       imageObj
//     );
//   };

//   /* eslint-disable max-depth */
//   request = async (serviceType, url, requestObject, multipartImages) => {
//     try {
//       // user and device info
//       let userId = await AsyncStorageUtil.getFromAsyncStorage(KEYS.STORAGE.USER_ID);
//       let selectedCurrency = await AsyncStorageUtil.
// getFromAsyncStorage(KEYS.STORAGE.SELECTED_CURRENCY);
//       if (!Utils.isEmptyField(selectedCurrency)) {
//         selectedCurrency = JSON.parse(selectedCurrency);
//         selectedCurrency = selectedCurrency.value;
//       } else {
//         selectedCurrency = '';
//       }

//       // pre request checks
//       if (Utils.isEmptyField(userId) && !isOperationAllowed(serviceType, url)) {
//         throw new Error(APP.NETWORK_ERROR_CODE.REQUIRE_SIGNIN);
//       }

//       const environmentInfo = await getEnvironmentInfo();

//       // create url
//       const absoluteUrl = getAbsoluteUrl(serviceType, url);
//       LoggerUtil.debug(`HTTP URL: ${absoluteUrl}`);

//       // override userId
//       if (!Utils.isEmptyObject(requestObject)
//         && !Utils.isEmptyObject(requestObject.data)
//         && !Utils.isEmptyField(requestObject.data.userId)) {
//         userId = requestObject.data.userId;
//       }

//       // create encrypted body and header
//       let dataValue = '';
//       let dataValueString = '';
//       let encryptedData = '';
//       if (requestObject) {
//         dataValue = {
//           currency: selectedCurrency,
//           ...requestObject.data,
//           ...environmentInfo,
//         };
//       } else {
//         dataValue = {
//           currency: selectedCurrency,
//           ...environmentInfo,
//         };
//       }
//       dataValueString = JSON.stringify(dataValue);

//       LoggerUtil.debug(`${'HTTP REQUEST BODY (plain): UserId: '}${userId}
// DataValue: ${dataValueString}`);

//       if (dataValueString) {
//         encryptedData = EncryptionUtil.getEncryptDataAndUserId(dataValueString, userId);
//       } else {
//         encryptedData = EncryptionUtil.getEncryptedUserId(userId);
//       }

//       const body = JSON.stringify(encryptedData);

//       LoggerUtil.debug(`${'HTTP REQUEST BODY (encrypted):
// Token: '}${encryptedData.token} Body: ${body}`);

//       const formData = new FormData();
//       formData.append(requestObject.key, body);

//       if (multipartImages) {
//         for (let i = 0; i < multipartImages.length; i++) {
//           const multipartItem = multipartImages[i];
//           const imagesKey = multipartItem.key;
//           const { images } = multipartItem;

//           // if (images.length > 1) {
//           //     imagesKey = imagesKey + "[]";
//           // }
//           for (let j = 0; j < images.length; j++) {
//             const imageItem = images[j];
//             if (typeof imageItem.uri === 'number') {
//               continue;
//             }
//             if (typeof imageItem.uri === 'string' && imageItem.uri.includes('http')) {
//               continue;
//             }
//             formData.append(imagesKey, {
//               uri: imageItem.uri,
//               type: 'image/*',
//               name: imageItem.filename || `filename${j}.png`,
//             });
//           }
//         }
//       }

//       return await fetch(absoluteUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           token: encryptedData.token,
//         },
//         body: formData,
//       }).then((response) => {
//         if (response.status !== 200) {
//           LoggerUtil.debug(`HTTP ERROR: ${response.status}`);
//           throw new Error(MESSAGES.ALERTS.COMMON.REQUEST_FAILED);
//         }
//         const responseText = response.text();
//         return responseText;
//       })
//         .then((responseText) => {
//           LoggerUtil.debug(`HTTP RESPONSE: ${responseText}`);
//           if (Utils.isValidJSON(responseText)) {
//             return JSON.parse(responseText);
//           }
//           return responseText;
//         })
//         .catch((error) => {
//           LoggerUtil.debug(`HTTP ERROR: ${error.message}`);
//           throw new Error(error.message);
//         });
//     } catch (error) {
//       LoggerUtil.debug(`HTTP ERROR: ${error.message}`);
//       throw new Error(error.message);
//     }
//   };
//   /* eslint-enable max-depth */
// }

// const getAbsoluteUrl = (serviceType, url) => {
//   const baseUrl = BuildConfig.getBaseURL(serviceType);
//   if (url.includes('piggyride.in')) {
//     return url;
//   }
//   if (url.includes('amazonaws.com')) {
//     return url;
//   }
//   return baseUrl + url;
// };

// const isOperationAllowed = (serviceType, requestedEndPoint) => {
//   let isAllowed = true;

//   // const baseURL = BuildConfig.getBaseURL(serviceType);
//   if (SIGN_IN_OPERATIONS.includes(requestedEndPoint)) {
//     isAllowed = false;
//   }
//   return isAllowed;
// };

// /* eslint-disable camelcase */
// const getEnvironmentInfo = async () => {
//   let environmentInfo = null;

//   const deviceUniqueId = await DeviceInfo.getUniqueId();
//   const deviceId = await DeviceInfo.getDeviceId();
//   const systemVersion = await DeviceInfo.getSystemVersion();
//   const brand = await DeviceInfo.getManufacturer();
//   const timezone_label = DateTimeUtils.getDeviceTimeZone();
//   const timezone_offset = DateTimeUtils.getDeviceTimeZoneGMTOffset();
//   const netInfo = await NetInfo.fetch();
//   let ipAddress = '';
//   let networkType = 'wifi';
//   if (netInfo) {
//     if (netInfo.details && netInfo.details.ipAddress) {
//       ipAddress = netInfo.details.ipAddress;
//     }

//     if (netInfo.type === 'cellular' && netInfo.details && netInfo.details.cellularGeneration) {
//       networkType = netInfo.details.cellularGeneration;
//     }
//   }

//   const reqSource = 'APP';
//   let appVersion = '';
//   if (Platform.OS === 'ios') {
//     appVersion = appVersionInfo.CFBundleShortVersionString;
//   }
//   if (Platform.OS === 'android') {
//     appVersion = appVersionInfo.versionName;
//   }
//   let os = '';
//   if (Platform.OS === 'ios') {
//     os = 'ios';
//   }
//   if (Platform.OS === 'android') {
//     os = 'android';
//   }

//   environmentInfo = {
//     deviceUniqueId,
//     deviceId,
//     systemVersion,
//     os,
//     brand,
//     timezone_label,
//     timezone_offset,
//     ipAddress,
//     networkType,
//     appVersion,
//     reqSource,
//   };
//   return environmentInfo;
// };
// /* eslint-enable camelcase */

// export { HttpMultipartPostRequest };

const requestMultipart = () => {

};
export { requestMultipart };
