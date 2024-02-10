// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { service } from '../../../assets/service';

// const TermsController = (props?: any) => {
//   const {
//     children,
//     index,
//     ...rest
//   } = props;

//   const [loading, setLoading] = useState<boolean>(false);

//   const [isTermsPage, setIsTermsPage] = useState<any>(service);

//   useEffect(() => {
//     setIsTermsPage(service);
//   }, [service]);

//   const viewProps = {
//     loading,
//     setLoading,
//     isTermsPage,
//   };
//   // console.log(isTermsPage);

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

// export { TermsController };
