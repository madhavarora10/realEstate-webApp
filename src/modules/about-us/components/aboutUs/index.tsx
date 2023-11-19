/* eslint-disable max-len */
// import Link from 'next/link';
import Image from 'next/image';
import _ from 'lodash';
import React from 'react';
// import classes from './aboutQr.module.css';

type aboutPageProps = {
  heros: any
};

const aboutPage = (props: aboutPageProps) => {
  const {
    heros,
  } = props;
  // console.log(heros)
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

export default aboutPage;
