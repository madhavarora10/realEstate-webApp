// others
import React from 'react';
import { AboutusViewProps } from './types/aboutus-view';
import AboutUs from './components/aboutUs/index';
import NavBanner from '../../common/components/navbar/index';
import Footer from '../../common/components/Footer';

const AboutusView = (props?: any) => {
  const {
    isAboutUs,
    isNav,
    isFooter,
  }: AboutusViewProps = props;
  // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  // console.log(isPriceCardSection);
  // style={{display:'grid',placeItems:'center',alignContent:'center',minHeight:'100vh'}}
  return (
    <div className="element__container">
      <NavBanner heros={isNav} />
      <div className="flex w-full flex-col justify-center overflow-x-hidden ">
        <AboutUs heros={isAboutUs} />
        <Footer heros={isFooter} />
      </div>
    </div>
  );
};

export default AboutusView;
