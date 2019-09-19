import React, { Component } from "react";
import style from "./index.css";
import { Table } from "antd";
import ModalsRemove from "@/components/ModalsRemove";
import ModalsEdit from "@/components/ModalsEdit";

const data = [
  {
    key: "1",
    序号: "1",
    日期: "1111111",
    理论: 89,
    技能: "New York No. 1 Lake Park",
    分析和解决:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    是否周考: "否"
  },
  {
    key: "2",
    序号: "2",
    日期: "1111111",
    理论: 89,
    技能: "New York No. 1 Lake Park",
    分析和解决:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    是否周考: "是"
  },
  {
    key: "3",
    序号: "3",
    日期: "1111111",
    理论: 89,
    技能: "New York No. 1 Lake Park",
    分析和解决:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    是否周考: "否"
  },
  {
    key: "4",
    序号: "4",
    日期: "1111111",
    理论: 89,
    技能: "New York No. 1 Lake Park",
    分析和解决:
      "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
    是否周考: "否"
  }
];

class Grade extends Component {
  state = {
    //删除
    showModal: false,
    //编辑
    editModal:false,
    columns: [
      {
        title: "序号",
        dataIndex: "序号",
        render: text => <a>{text}</a>
      },
      {
        title: "日期",
        dataIndex: "日期"
      },
      {
        title: "理论",
        dataIndex: "理论"
      },
      {
        title: "技能",
        dataIndex: "技能"
      },
      {
        title: "分析和解决",
        dataIndex: "分析和解决"
      },
      {
        title: "是否周考",
        dataIndex: "是否周考"
      },
      {
        title: "操作",
        key: "操作",
        render: (text, record) => (
          <span>
            <a
              className="btn-table-edit"
              onClick={this.editSource.bind(this, text)}
            >
              编辑&nbsp;、
            </a>
            <a
              className="btn-table-edit"
              onClick={this.removeSource.bind(this, text)}
            >
              删除
            </a>
          </span>
        )
      }
    ]
  };
  editSource(info, e) {
    this.setState({
      editModal: true
    });
  }
  removeSource(info, e) {
    this.setState({
      showModal: true
    });
  }
  closeModal(status) {
    this.setState({
      showModal: status,
      editModal: status
    });
  }
  render() {
    return (
      <div className={style.grade}>
        <div className={style.title}>XX学生日周考试成绩统计表</div>
        <div className={style.nav}>
          <div className={style.left}>
            <span className={style.teacher}>讲师：XXX</span>
            <span className={style.stduent}>学生：XXX</span>
          </div>
          <div className={style.right}>
            <input className={style.choose} />
          </div>
        </div>
        <div className={style.table}>
          <Table columns={this.state.columns} dataSource={data} size="middle" />
          {this.state.showModal ? (
            <ModalsRemove
              visible={this.state.showModal}
              fromSon={status => {
                this.closeModal(status);
              }}
            />
          ) : null}
          {this.state.editModal ? (
            <ModalsEdit
              visible={this.state.editModal}
              fromSon={status => {
                this.closeModal(status);
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Grade;
