'use client';

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';

/*  PAGE DATA SOURCE  */
// import { contactUs } from '../../../assets/contactUs';

const ContactController = (props?: any) => {
  const {
    children,
    contactUs,
    navbar,
    footer,
    ...rest
  } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [isNav, setIsNav] = useState<any>(navbar);
  const [isContactPage, setIsContactPage] = useState<any>(contactUs);
  const [isQuestions, setIsQuestions] = useState<any>(contactUs.questions);
  const [isFooter, setIsFooter] = useState<any>(footer);

  // console.log(contactUs);
  useEffect(() => {
    setIsNav(navbar);
    setIsContactPage(contactUs);
    setIsQuestions(contactUs.faqs);
    setIsFooter(footer);
  }, [contactUs, navbar, footer]);

  const viewProps = {
    loading,
    setLoading,
    isNav,
    isContactPage,
    isQuestions,
    isFooter,
  };
  // console.log(index.aboutQr);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...rest, ...viewProps });
    }

    return child;
  });

  return (
    <div>
      { childrenWithProps }
    </div>
  );
};

export { ContactController };
