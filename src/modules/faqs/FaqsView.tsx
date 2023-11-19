// others

import React from 'react';
import { HomeViewProps } from './types/faqs-view';
import NavBanner from '../../common/components/navbar/index';
import QuestionsPage from './components/questionsPage';
import Footer from '../../common/components/Footer';

const HomeView = (props?: any) => {
  const {
    isNav,
    isQuestionsPage,
    isFooter,

  }: HomeViewProps = props;
  // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  // console.log(isPriceCardSection);
  // style={{display:'grid',placeItems:'center',alignContent:'center',minHeight:'100vh'}}
  return (
    <div className="element__container">
      <NavBanner heros={isNav} />
      <div className="flex w-full flex-col justify-center overflow-x-hidden ">

        <QuestionsPage heros={isQuestionsPage} />
        <Footer heros={isFooter} />

      </div>
    </div>
  );
};

export default HomeView;
