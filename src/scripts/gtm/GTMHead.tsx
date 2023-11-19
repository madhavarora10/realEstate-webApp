import Script from 'next/script';
import React from 'react';

const loadDevGTMHead = () => (
  <Script id="gtm-head-dev" strategy="afterInteractive">
    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=test_test&gtm_preview=env-3&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-test_test'); `}
  </Script>
);

const loadProdGTMHead = () => (
  <Script id="gtm-head-prod" strategy="afterInteractive">
    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=test_test&gtm_preview=env-4&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-test_test');`}
  </Script>
);

const loadGTMHead = () => {
  if (process.env.GTM_ENV === 'production') {
    return loadProdGTMHead();
  }
  return loadDevGTMHead();
};

export { loadGTMHead };
