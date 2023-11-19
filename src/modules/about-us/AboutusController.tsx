/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

// import { aboutUs } from '../../../assets/aboutUs';

const AboutusController = (props?: any) => {
  // console.log('🚀 ~ file: AboutusController.tsx:6 ~ AboutusController ~ props:', props);
  const {
    children,
    aboutUs,
    navbar,
    footer,
    ...rest
  } = props;
  // console.log(aboutUs);
  const [loading, setLoading] = useState<boolean>(false);

  const [isAboutUs, setIsAboutUs] = useState<any>(aboutUs);
  const [isNav, setIsNav] = useState<any>(navbar);
  const [isFooter, setIsFooter] = useState<any>(footer);

  useEffect(() => {
    setIsAboutUs(aboutUs);
    setIsNav(navbar);
    setIsFooter(footer);
  }, [aboutUs, navbar, footer]);

  const viewProps = {
    loading,
    setLoading,
    isNav,
    isAboutUs,
    isFooter,

  };

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

export { AboutusController };
