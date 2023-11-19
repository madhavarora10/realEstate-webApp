/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';

const FaqsController = (props?: any) => {
  const {
    children,
    faqs,
    navbar,
    footer,
    ...rest
  } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const [isNav, setIsNav] = useState<any>(navbar);

  const [isQuestionsPage, setIsQuestionsPage] = useState<any>(faqs);
  const [isFooter, setIsFooter] = useState<any>(footer);

  useEffect(() => {
    setIsNav(navbar);
    setIsQuestionsPage(faqs);
    setIsFooter(footer);
  }, [navbar, faqs, footer]);

  const viewProps = {
    loading,
    setLoading,
    isNav,
    isQuestionsPage,
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

export { FaqsController };
