/* eslint-disable react-hooks/rules-of-hooks */
// import Link from 'next/link';
// import Image from 'next/image';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import {
  motion,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classes from './qrBanner.module.scss';

type qrBannerProps = {
  heros: any
};

const QrBanner = (props: qrBannerProps) => {
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

export default QrBanner;
