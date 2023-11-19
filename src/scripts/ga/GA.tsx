import Script from 'next/script';
import React from 'react';

const loadDevGA = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-test_test"
      strategy="afterInteractive"
    />
    <Script id="ga-dev" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-test_test');
        `}
    </Script>
  </>
);

const loadProdGA = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=test_test"
      strategy="afterInteractive"
    />
    <Script id="ga-prod" strategy="afterInteractive">
      {/* not implemented */}
    </Script>
  </>
);

const loadGA = () => {
  if (process.env.GA_ENV === 'production') {
    return loadProdGA();
  }

  return loadDevGA();
};

export { loadGA };
