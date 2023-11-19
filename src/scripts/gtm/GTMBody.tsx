import React from 'react';

const loadDevGTMBody = () => (
  <noscript>
    <iframe
      title="gtm-body-dev"
      src="https://www.googletagmanager.com/ns.html?id=GTM-test_test&gtm_auth=test_test&gtm_preview=env-3&gtm_cookies_win=x"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);

const loadProdGTMBody = () => (
  <noscript>
    <iframe
      title="gtm-body-prod"
      src="https://www.googletagmanager.com/ns.html?id=GTM-test_test&gtm_auth=test_test-test_test&gtm_preview=env-4&gtm_cookies_win=x"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);

const loadGTMBody = () => {
  if (process.env.GTM_ENV === 'production') {
    return loadProdGTMBody();
  }

  return loadDevGTMBody();
};

export { loadGTMBody };
