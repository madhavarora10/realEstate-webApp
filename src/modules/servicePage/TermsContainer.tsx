import type { NextPage } from 'next';
import React from 'react';

import { TermsController } from './TermsController';
import TermsView from './TermsView';
// import { LoadingView } from '../../common/components/LoadingView';

const TermsContainer: NextPage = (props) => (
  <div>
    <TermsController {...props}>
      <TermsView />

      {/* <LoadingView /> */}
    </TermsController>
  </div>
);

export default TermsContainer;
