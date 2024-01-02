import React, { useState } from 'react';
import { Modal, Button } from 'antd';

 type ModalProps = {
   state:boolean,
   title:string,
   content:string,
   activeState(state:boolean):void
 };
const ModalContainer: React.FC<ModalProps> = (props) => {
  const {
    state, title, content, activeState,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(state);

  const handleOk = () => {
    setIsModalOpen(false);
    activeState(false);
  };

  return (
    <Modal title={title} visible={isModalOpen} footer={null}>
      <p>{content}</p>
      <Button type="primary" style={{ backgroundColor: ' #5cb85c' }} className=" border-2 mt-12  text-white w-16 h-10 " onClick={handleOk}>OK</Button>
    </Modal>
  );
};

export default ModalContainer;
