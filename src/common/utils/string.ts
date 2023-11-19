import _ from 'lodash';

const isValidJSON = (text: string) => {
  if (_.isEmpty(text)) {
    return false;
  }
  let isValid = true;
  try {
    JSON.parse(text);
  } catch (exception) {
    isValid = false;
  }

  return isValid;
};

const createQueryString = (params:any) => {
  if (_.isEmpty(params) === true) {
    return '';
  }
  const keyValuePairs:any = [];

  Object.keys(params).forEach((key) => {
    const value = params[key];
    keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });
  return keyValuePairs.join('&');
};

export const stringUtils = {
  isValidJSON,
  createQueryString,
};
