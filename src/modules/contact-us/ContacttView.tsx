// others

import React from 'react';
import { ContactViewProps } from './types/contacts-view';
import NavBanner from '../../common/components/navbar/index';
import ContactPage from './components/contact-us/index';
import Footer from '../../common/components/Footer';
import QuestionsComponent from '../../common/components/Questions';

const ContactView = (props?: any) => {
  const {
    isNav,
    isContactPage,
    isFooter,
    isQuestions,
  }: ContactViewProps = props;
  // console.log('🚀 ~ file: HomeView.tsx:9 ~ HomeView ~ isHero:', isHero);
  // console.log(isPriceCardSection);
  // style={{display:'grid',placeItems:'center',alignContent:'center',minHeight:'100vh'}}
  return (
    <div className="element__container">
      <NavBanner heros={isNav} />
      <div className="flex w-full flex-col items-center overflow-x-hidden ">
        <ContactPage heros={isContactPage} />
        <QuestionsComponent heros={isQuestions} />
        <Footer heros={isFooter} />

      </div>
    </div>
  );
};

export default ContactView;
