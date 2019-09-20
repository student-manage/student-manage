/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal } from "antd";

function ModalsRemove(props) {
  //console.log(props);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleOk(e) {
    props.fromSon(false);
     setVisible(false);
  }

  function handleCancel(e) {
    props.fromSon(false);
    setVisible(false);
    //console.log(e,"删除")
  }

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Modal
      visible={props.visible}
      title="你确定删除吗"
      // eslint-disable-next-line no-undef
      onConfirm={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
    ></Modal>
  );
}

export default ModalsRemove;
