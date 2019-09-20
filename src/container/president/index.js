import React, { Component } from 'react';
import { Switch,Button } from 'antd';
// import {  } from "";
import 'antd/dist/antd.css';
import "./index.css";
import echarts from 'echarts';

const option = {
    title: {
        text: 'xxx同学的日周考成绩统计图',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['技能', '理论']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '技能',
            type: 'line',
            stack: '总量',
            data: [23, 70, 21, 25, 76.7, 36.5, 61, 37, 20, 9, 22, 10, 90]
        },
        {
            name: '理论',
            type: 'line',
            stack: '总量',
            data: [26, 70, 26, 25, 76.7, 82.2, 61, 37, 20, 9, 22, 13, 56]
        }
    ]
};
useEffect(() => {
    var myChart = echarts.init(document.getElementById('pie'));
    // var myChart1 = echarts.init(document.getElementById('myChart'));
    // 绘制图表
    myChart.setOption(option);
    // myChart1.setOption(options);
})
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
                                    <Switch defaultChecked onChange={onChange} />柱形图,线图
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page_bottom">
                    <div className="line">
                        <div id="pie" style={{ width: '450px', height: '400px' }}></div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default (President);