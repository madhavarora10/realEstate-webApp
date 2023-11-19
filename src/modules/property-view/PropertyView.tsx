import React from 'react';
import { PropertyViewProps } from './types/property-view';
import PropertyPage from './components/property/index';
import NavBanner from '../../common/components/navbar/index';
import Footer from '../../common/components/Footer';

const PropertyView = (props?: any) => {
  const {
    response,
    doc,
  }:PropertyViewProps = props;
    // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  // console.log(response,'heelo');
  // style={{display:'grid',placeItems:'center',alignContent:'center',minHeight:'100vh'}}
  return (
    <div className="">
      <div className="flex w-full flex-col justify-center overflow-x-hidden ">
        <NavBanner heros={response.navbar} />
        <div className="element__container">
          <PropertyPage heros={response.propertyView} doc={doc} />
        </div>
        <Footer heros={response.footer} />
      </div>
    </div>
  );
};

export default PropertyView;
