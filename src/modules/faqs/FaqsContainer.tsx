import type { NextPage } from 'next';
import React from 'react';
import HomeView from './FaqsView';
import { FaqsController } from './FaqsController';
// import { LoadingView } from '../../common/components/LoadingView';

const FaqsContainer: NextPage = (props) => (
  <div>
    <FaqsController {...props}>
      <HomeView />

      {/* <LoadingView /> */}
    </FaqsController>
  </div>
);

export default FaqsContainer;
