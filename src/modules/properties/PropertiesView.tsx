import React from 'react';
import { PropertiesViewProps } from './types/properties-view';
import PropertiesPage from './components/properites';
import NavBanner from '../../common/components/navbar/index';
import Footer from '../../common/components/Footer';

const PropertiesView = (props?: any) => {
  const {
    properties,
    navbar,
    footer,
  }:PropertiesViewProps = props;
  // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  // console.log(props);
  // style={{display:'grid',placeItems:'center',alignContent:'center',minHeight:'100vh'}}
  return (
    <div className="">
      <div className="flex w-full flex-col justify-center overflow-x-hidden ">
        <NavBanner heros={navbar} />
        <div className="element__container">
          <PropertiesPage heros={properties} />
        </div>
        <Footer heros={footer} />
      </div>
    </div>
  );
};

export default PropertiesView;
