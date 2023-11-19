// /* eslint-disable react-hooks/exhaustive-deps */

// import React, { useState } from 'react';

// const PropertiesController = (props?: any) => {
//   // console.log('🚀 ~ file: PropertiesController.tsx:6 ~ PropertiesController ~ props:', props);
//   const {
//     children,
//     response,
//     ...rest
//   } = props;

//   const [loading, setLoading] = useState<boolean>(false);

//   const [isNav, setIsNav] = useState<any>(response.navbar);
//   const [isProperties, setIsProperties] = useState<any>(response.properties);
//   const [isFooter, setIsFooter] = useState<any>(response.footer);

//   setIsNav(response.navbar);
//   setIsProperties(response.properties);
//   setIsFooter(response.footer);

//   const viewProps = {
//     loading,
//     setLoading,
//     isNav,
//     isProperties,
//     isFooter,

//   };

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

// export { PropertiesController };
