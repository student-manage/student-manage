import React, { Component } from 'react';
import { Switch,Button } from 'antd';
import "./index.css";
function onChange(checked) {
    console.log(`switch to ${checked}`);
}
class President extends Component {
    state = {}
    render() {
        return (
            <div className="wrap">
                <div className="page_top">
                    <div className="page_top_top">
                        <span>重点关注学生考试成绩统计图</span>
                    </div>
                    <div className="page_top_bottom">
                       <div className="choose">
                            <div className="choose_left">
                                <span>选择班级:</span>
                            </div>
                            <div className="choose_right">
                                <ul>
                                    <li>1703D</li>
                                    <li>1704A</li>
                                    <li>1704A</li>
                                    <li>1704A</li>
                                    <li>1704A</li>
                                    <li>1704A</li>
                                    <li>1704A</li>
                                    <li>1704A</li>
                                </ul>
                            </div>
                       </div>
                        <div className="people_roll">
                            <div className="roll_left">
                                <span>名单:</span>
                            </div>
                            <div className="roll_right">
                                <div className="left">
                                    张三,张立,王强(3/人)
                                </div>
                                <div className="right">
                                    <Switch defaultChecked onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page_bottom"></div>
            </div>
        );
    }
    
}

export default (President);