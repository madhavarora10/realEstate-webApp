export {};
// import React, {
//   createContext,
//   useEffect,
//   useMemo,
//   useState,
// } from 'react';

// import {
//   AppStateContextType,
//   AppStateProviderProps,
// } from '../types';

// const AppStateContext = createContext<AppStateContextType | null>(null);

// const AppStateProvider: React.FC<AppStateProviderProps> = (props: AppStateProviderProps) => {
//   const {
//     children,
//   } = props;

//   const [captchaSecret, setCaptchaSecret] = useState<string>('');

//   useEffect(() => {
//     // const fetch = async () => {
//     //   const { secretValue, error } = await getSecret
//     // 'captchaSecret', process.env.RECAPTCHA_V2_SECRET_KEY_NAME);

//     //   if (error) {
//     //     return;
//     //   }
//     //   setCaptchaSecret(secretValue);
//     // };
//     // fetch();
//   }, []);

//   const contextParams = useMemo(() => ({
//     captchaSecret,
//     setCaptchaSecret,
//   }), [captchaSecret, setCaptchaSecret]);

//   return (
//     <AppStateContext.Provider
//       value={contextParams}
//     >
//       {children}
//     </AppStateContext.Provider>
//   );
// };

// export {
//   AppStateContext,
//   AppStateProvider,
// };
