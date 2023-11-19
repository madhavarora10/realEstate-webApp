/* eslint-disable react/no-array-index-key */
// import Link from 'next/link';
import _ from 'lodash';
import Accordion from '../accordion/index';
import classes from './questionsPage.module.scss';

type faqsProps = {
  heros: any
};

const questionsPage = (props: faqsProps) => {
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

export default questionsPage;
