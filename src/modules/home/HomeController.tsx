// /* eslint-disable max-len */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-unused-expressions */
// import React, { useEffect, useState } from 'react';

// const HomeController = (props?: any) => {
//   const {
//     children,
//     response,
//     ...rest
//   } = props;
//   // console.log(response);

//   const [loading, setLoading] = useState<boolean>(false);

//   const [isNav, setIsNav] = useState<any>(response.navbar);
//   const [isTopPage, setIsTopPage] = useState<any>(response.index.topPage);
//   const [isMiddlePage, setIsMiddlePage] = useState<any>(response.index.middlePage);
//   const [isMiddlePage2, setIsMiddlePage2] = useState<any>(response.index.middlePage2);
//   const [isPriceCardSection, setIsPriceCardSection] = useState<any>(response.index.priceCardSection);
//   const [isAboutUsComponent, setIsAboutUs] = useState<any>(response.index.aboutUs);
//   const [isReview, setIsReview] = useState<any>(response.index.reviews);
//   const [isFooter, setIsFooter] = useState<any>(response.footer);

//   useEffect(() => {
//     setIsNav(response.navbar);
//     setIsTopPage(response.index?.topPage);
//     setIsMiddlePage(response.index.middlePage);
//     setIsMiddlePage2(response.index.middlePage2);
//     setIsPriceCardSection(response.index.priceCardSection);
//     setIsAboutUs(response.index.aboutUs);
//     setIsReview(response.index.reviews);
//     setIsFooter(response.footer);
//   }, [response.index, response.navbar, response.footer]);

//   const viewProps = {
//     loading,
//     setLoading,
//     isNav,
//     isTopPage,
//     isMiddlePage,
//     isMiddlePage2,
//     isPriceCardSection,
//     isAboutUsComponent,
//     isReview,
//     isFooter,
//   };
//   // console.log(index.aboutQr);

//   const childrenWithProps = React.Children.map(children, (child) => {
//     if (React.isValidElement(child)) {
//       return React.cloneElement(child, { ...rest, ...viewProps });
//     }

//     return child;
//   });

//   return (
//     <div>
//       { childrenWithProps }
//     </div>
//   );
// };

// export { HomeController };
