// others
import React from 'react';
import { HomeViewProps } from './types/home-view';
import NavBanner from '../../common/components/navbar/index';
import TopPage from './components/topPage/index';
import Newsletter from './components/Newsletter/index';
import MiddlePage2 from './components/middlePage2/index';
import ReviewSection from './components/reviewSection/index';
import AboutUs from './components/aboutUs/index';
import Footer from '../../common/components/Footer';

const HomeView = (props?: any) => {
  const {
    navbar,
    index,
    footer,

  }: HomeViewProps = props;
  // console.log(index);
  // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  return (
    <div>
      <div className="flex w-full  flex-col items-center overflow-x-hidden ">
        <NavBanner heros={navbar} />
        <TopPage heros={index.topPage} />
        <MiddlePage2 heros={index.middlePage2} />
        <AboutUs heros={index.aboutUs} />
        <ReviewSection heros={index.reviews} />
        <Newsletter heros={index.Newsletter} />
        <Footer heros={footer} />
      </div>
    </div>
  );
};

export default HomeView;
