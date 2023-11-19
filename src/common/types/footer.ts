import { buttonObj, socialsLinksObj } from './hero';

type Body = {

  label: string,
  body: buttonObj[],

};
export type Footer = {

  showMobile: number,
  status: number,
  descp: string,
  newsletter: {
    heading: string,
    placeholder: string,
    button:buttonObj,
  },
  body: Body[],
  socials: {
    heading: string,
    socialsLinks:socialsLinksObj[]
  },

};
