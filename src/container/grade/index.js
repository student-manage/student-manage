/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*
 * @Author: geng 
 * @Date: 2019-09-19 23:44:10 
 * @Last Modified by: geng
 * @Last Modified time: 2019-09-20 14:22:04
 */
import React, { useState } from "react";
import style from "./index.css";
import { Table, TreeSelect } from "antd";
import ModalsRemove from "@/components/ModalsRemove";
import ModalsEdit from "@/components/ModalsEdit";

const { TreeNode } = TreeSelect;

function Grade() {

  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [value, setValue] = useState();
  const [data, setData] = useState([
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
  ])
  const editSource = (info, e) => {
    setEditModal(true)
  }
  // eslint-disable-next-line no-undef
  const removeSource = (info, e) => {
    setShowModal(true)
  };
  // eslint-disable-next-line no-undef
  const closeModal = (status) => {
    setShowModal(status);
    setEditModal(status)
  };
  const onChange = value => {
    console.log(value);
    setValue(value)
  };
  const [columns, setColumns] = useState([
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
            onClick={editSource.bind(this, text)}
          >
            编辑&nbsp;、
          </a>
          <a
            className="btn-table-edit"
            onClick={removeSource.bind(this, text)}
          >
            删除
          </a>
        </span>
      )
    }
  ])

  return (
    <div className={style.grade}>
      <div className={style.title}>XX学生日周考试成绩统计表</div>
      <div className={style.nav}>
        <div className={style.left}>
          <span className={style.teacher}>讲师：XXX</span>
          <span className={style.stduent}>学生：XXX</span>
        </div>
        <div className={style.right}>
          { /*<input className={style.choose} />*/}
          <TreeSelect
            showSearch
            style={{ width: 224,marginRight:49,height:40 }}
            value={value}
            dropdownStyle={{ maxHeight: 258, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
          >
            <TreeNode value="parent 1" title="parent 1" key="0-1">
              <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                <TreeNode value="leaf1" title="my leaf" key="random" />
                <TreeNode value="leaf2" title="your leaf" key="random1" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </div>
      </div>
      <div className={style.table}>
        <Table columns={columns} dataSource={data} size="middle" />
        {showModal ? (
          <ModalsRemove
            visible={showModal}
            fromSon={status => {
              closeModal(status);
            }}
          />
        ) : null}
        {editModal ? (
          <ModalsEdit
            visible={editModal}
            fromSon={status => {
              closeModal(status);
            }}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Grade;
