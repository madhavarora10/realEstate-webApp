// others
import React from 'react';

import { TermsViewProps } from './types/terms-view';
import Service from './components/termsPage/index';
// import { motion } from 'framer-motion';
const TermsView = (props?: any) => {
  const {

    isTermsPage,

  }: TermsViewProps = props;
  // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  // console.log(isPriceCardSection);
  // style={{display:'grid',placeItems:'center',alignContent:'center',minHeight:'100vh'}}
  return (
    <div className="element__container">

      <div className="flex w-full flex-col justify-center overflow-x-hidden ">

        <Service heros={isTermsPage} />

      </div>
    </div>
  );
};

export default TermsView;
