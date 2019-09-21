import React,{ useState, useEffect } from 'react';
import { Switch,Button } from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import echarts from 'echarts';
let onChange=(checked)=>{
    console.log(`switch to ${checked}`);
}
const President=props=>{
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
    let options = {
        title: {
            text: '某地区蒸发量和降水量',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['蒸发量', '降水量']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
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
    useEffect(() => {
        var myChart = echarts.init(document.getElementById('pies'));
        // var myChart1 = echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption(options);
        // myChart1.setOption(options);
    })
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
                        <div id="pie" style={{ width: '800px', height: '400px' }}></div>
                        <div className="echertsbot">
                            <div className="echertsbot_top">
                                <p>2019-08-30</p>
                                <p>今日分析及解决方案</p>
                                <p>点击查看历史记录</p>
                            </div>
                            <div className="echertsbot_bottom">
                                撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好
                            </div>
                        </div>
                        <div className="line1">
                            <div id="pies" style={{ width: '800px', height: '400px' }}></div>
                        <div className="echertsbot">
                            <div className="echertsbot_top">
                                <p>2019-08-30</p>
                                <p>今日分析及解决方案</p>
                                <p>点击查看历史记录</p>
                            </div>
                            <div className="echertsbot_bottom">
                                撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好
                            </div>
                            
                        </div>
                        <div className="last_box">
                                    <div>
                                        <p>2019-08-21</p>
                                        <p>撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大</p>
                                    </div>
                                    <div>
                                        <p>2019-08-20</p>
                                        <p>secondary text</p>
                                    </div>
                                    <div>
                                        <p>2019-08-20</p>
                                        <p>secondary text</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

export default President;
