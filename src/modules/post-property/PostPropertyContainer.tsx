import React from 'react';
import PostPropertyView from './PostPropertyView';
import { PostPropertyContainerProps } from './types/postproperty-view';

const PostPropertyContainer = (props) => {
  const {
    response,
  }:PostPropertyContainerProps = props;
  // console.log(signUp, 'from cn');
  return (
    <div>
      <PostPropertyView {...response} />
    </div>
  );
};
export default PostPropertyContainer;
