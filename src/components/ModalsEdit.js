/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Modal, Form, Input, Select, Checkbox } from "antd";

const { Option } = Select;
const { TextArea } = Input;

function ModalsEdit(props) {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  function handleOk(e) {
    props.fromSon(false);
    //console.log(props,"edit")
    setVisible(false);
  }

  function handleCancel(e) {
    props.fromSon(false);
    setVisible(false);
  }
  function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
  }
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Modal
      visible={props.visible}
      title="编辑内容"
      onConfirm={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
    >
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
        <Form.Item label="理论">
          <Input placeholder="0-100之间数字" />
          {/*getFieldDecorator('note', {
                       rules: [{ required: true, message: 'Please input your note!' }],
                     })(<Input />)*/}
        </Form.Item>
        <Form.Item label="技能">
          <Input placeholder="0-100之间数字" />
        </Form.Item>
        <Form.Item label="">
          <div style={{marginLeft:100}}>
            <Checkbox onChange={onChange}>日考</Checkbox>
            <Checkbox onChange={onChange}>周考</Checkbox>
          </div>
        </Form.Item>
        <Form.Item label="分析解决方案">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalsEdit;
