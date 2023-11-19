const BASE_URL = {
  SURAKSHAQR: process.env.BE_BASE_URL,
  GOOGLE_CAPTCHA: 'https://www.google.com/recaptcha/api/siteverify',
};

const ABOUT = '/api/v/1/about-us';
const CONTACT = '/api/v/1/contact-us';
const HOME = '/api/v/1/home';
const PRIVACY = '/api/v/1/privacy-policy';

const COUNTRIES = '/api/v/1/countries';

const HEADER = {
  WHITE: 0,
  BLUE: 1,
};

const BUTTON = {
  BLUE_FILL: 0,
  EMPTY: 1,
  WHITE_FILL: 2,
  BLUE_EMPTY: 3,
};
const THEME = {
  TYPE_1: 0,
  TYPE_2: 1,
};

const TEMPLATE = {
  ROW: 0,
  ROW_REVERSE: 1,
};

export {
  BASE_URL,
  ABOUT,
  CONTACT,
  HOME,
  PRIVACY,
  COUNTRIES,
  HEADER,
  BUTTON,
  TEMPLATE,
  THEME,
};
