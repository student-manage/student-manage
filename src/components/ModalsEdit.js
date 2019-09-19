import React, { Component } from "react";
import { Modal, Form, Input, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

class ModalsEdit extends Component {
  state = {
    loading: false,
    visible: false
  };

  handleOk(e) {
    this.props.fromSon(false);
    this.setState({
      visible: false
    });
  }

  handleCancel(e) {
    this.props.fromSon(false);
    this.setState({
      visible: false
    });
  }

  render() {
    const { visible } = this.props;
    //const { getFieldDecorator } = this.props.form;
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <Modal
        visible={visible}
        title="编辑内容"
        onConfirm={this.handleOk.bind(this)}
        onCancel={this.handleCancel.bind(this)}
        okText="确定"
        cancelText="取消"
      >
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="理论">
            <Input placeholder="0-100之间数字" />
            {/*getFieldDecorator('note', {
                       rules: [{ required: true, message: 'Please input your note!' }],
                     })(<Input />)*/}
          </Form.Item>
          <Form.Item label="技能">
            <Input placeholder="0-100之间数字" />
          </Form.Item>
          <Form.Item>
           { /*<Select defaultValue="日考">
              <Option value="日考">日考</Option>
              <Option value="周考">周考</Option>
                    </Select>*/}
          </Form.Item>
          <Form.Item label="分析解决方案"> 
            <TextArea rows={4} />
          </Form.Item>
          {/*<Form.Item label="Gender">
                     {getFieldDecorator('gender', {
                       rules: [{ required: true, message: 'Please select your gender!' }],
                     })(
                       <Select
                         placeholder="Select a option and change input text above"
                         onChange={this.handleSelectChange}
                       >
                         <Option value="male">male</Option>
                         <Option value="female">female</Option>
                       </Select>,
                     )}
                     </Form.Item>*/}
        </Form>
      </Modal>
    );
  }
}

export default ModalsEdit;
