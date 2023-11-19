/* eslint-disable react/no-array-index-key */
// import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import { FormContact } from '../form';
// import classes from './aboutQr.module.scss';

type contactUsProps = {
  heros: any
};

const ContactUs = (props: contactUsProps) => {
  const {
    heros,
  } = props;
  // console.log(heros);
  if (_.isEmpty(heros) === true) {
    return null;
  }
  if (heros.status === 0) {
    return null;
  }
  return (
  <>
  </>
  );
};

export default ContactUs;
