/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*
 * @Author: geng
 * @Date: 2019-09-19 23:44:10
 * @Last Modified by: geng
 * @Last Modified time: 2019-09-22 21:01:38
 */
import React, { useState, useEffect } from "react";
import style from "./index.css";
import { Table, TreeSelect } from "antd";
import ModalsRemove from "@/components/ModalsRemove";
import ModalsEdit from "@/components/ModalsEdit";
import { grade } from "@/services/grade";
import { edit } from "@/services/edit";
import { student } from "@/services/student";

const { TreeNode } = TreeSelect;

function Grade() {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [value, setValue] = useState();
  const [data, setData] = useState([
    {
      key: "1",
      stuid: "1",
      record_date: "1111111",
      theory_score: "89",
      skill_score: "New York No. 1 Lake Park",
      analysis:
        "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
      week_record: "0"
    },
    {
      key: "2",
      stuid: "2",
      record_date: "1111111",
      theory_score: "89",
      skill_score: "New York No. 1 Lake Park",
      analysis:
        "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
      week_record: "0"
    },
    {
      key: "3",
      stuid: "3",
      record_date: "1111111",
      theory_score: "89",
      skill_score: "New York No. 1 Lake Park",
      analysis:
        "对方过后就给范的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
      week_record: "1"
    },
    {
      key: "4",
      stuid: "4",
      record_date: "1111111",
      theory_score: "89",
      skill_score: "New York No. 1 Lake Park",
      analysis:
        "对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和",
      week_record: "1"
    }
  ]);
  const editSource = (info, e) => {
    setEditModal(true);
    //console.log(info, "info");
  };
  // eslint-disable-next-line no-undef
  const removeSource = (info, e) => {
    setShowModal(true);
  };
  // eslint-disable-next-line no-undef
  const closeModal = status => {
    setShowModal(status);
    setEditModal(status);
  };
  const onChange = value => {
    console.log(value);
    setValue(value);
  };
  const [columns, setColumns] = useState([
    {
      title: "序号",
      dataIndex: "stuid",
      render: text => <a>{text}</a>
    },
    {
      title: "日期",
      dataIndex: "record_date"
    },
    {
      title: "理论",
      dataIndex: "theory_score"
    },
    {
      title: "技能",
      dataIndex: "skill_score"
    },
    {
      title: "分析和解决",
      dataIndex: "analysis"
    },
    {
      title: "是否周考",
      dataIndex: "week_record"
    },
    {
      title: "操作",
      dataIndex: "操作",

      render: (text, record) => (
        <span>
          <a className="btn-table-edit" onClick={editSource}>
            编辑&nbsp;、
          </a>
          <a className="btn-table-edit" onClick={removeSource}>
            删除
          </a>
        </span>
      )
    }
  ]);
  
  return (
    <div className={`${style.grade}`}>
      <div className={`${style.title} ${style.border}`}>
      XX学生日周考试成绩统计表
      </div>
      <div className={`${style.nav} ${style.border} ${style.color}`}>
        <div className={`${style.left}`}>
          <span className={`${style.teacher} ${style.font}`}>讲师：XXX</span>
          <span className={`${style.stduent} ${style.font}`}>学生：XXX</span>
        </div>
        <div className={`${style.right}`}>
          <TreeSelect className={style.tree}
            showSearch
            value={value}
            dropdownStyle={{ maxHeight: 258, overflow: "auto" }}
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
                <TreeNode
                  value="sss"
                  title={<b style={{ color: "#08c" }}>sss</b>}
                  key="random3"
                />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </div>
      </div>
      <div className={`${style.tbble} ${style.border} ${style.color}`}>
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
  );
}

export default Grade;
