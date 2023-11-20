import React from 'react';
import { Spin } from 'antd';

const Spinner: React.FC< { loading:boolean }> = (props) => {
  const {
    loading,
  } = props;
  if (!loading) {
    return null;
  }
  return (
    <div className=" w-full flex justify-center items-center pt-6 ">
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
