/* eslint-disable react/no-array-index-key */
// import Link from 'next/link';
import _ from 'lodash';
// import Image from 'next/image';
import React from 'react';
// import classes from './topPage.module.css'
type topPageProps = {
  heros: any
};

const TermsPage = (props: topPageProps) => {
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

export default TermsPage;
