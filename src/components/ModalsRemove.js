import React, {Component} from 'react';
import {Modal} from 'antd';

class ModalsRemove extends Component {
    state = {
        loading: false,
        visible: false,
    }

    handleOk(e) {
        this.props.fromSon(false);
        this.setState({
            visible: false,
        });
    }

    handleCancel(e) {
        this.props.fromSon(false);
        this.setState({
            visible: false,
        });
    }

    render() {
        const { visible } = this.props;
        return (
                // eslint-disable-next-line react/jsx-no-undef
                <Modal
                    visible={visible}
                    title="你确定删除吗"
                    placement="topRight"
                    onConfirm={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    okText="确定"
                    cancelText="取消"
                   >
                </Modal>
        )
    }
}

export default ModalsRemove;