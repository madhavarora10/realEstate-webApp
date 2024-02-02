// others
import React from 'react';
import Footer from '../../common/components/Footer';
import NavBanner from '../../common/components/navbar';
import { PostPropertyComp } from './components/PostProperty';
import { PostPropertyViewProps } from './types/postproperty-view';

const PostPropertyView = (props) => {
  const {
    navbar,
    postProperty,
    footer,
  }:PostPropertyViewProps = props;
  // console.log(props);

  return (
    <div>
      <div className="flex w-full flex-col items-center overflow-x-hidden  ">
        <NavBanner heros={navbar} />
        <div className="element__container">
          <PostPropertyComp heros={postProperty} />
        </div>
        <Footer heros={footer} />
      </div>
    </div>
  );
};
export default PostPropertyView;
