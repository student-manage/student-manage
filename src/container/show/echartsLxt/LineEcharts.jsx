import React, { useState , useEffect  } from 'react';
import styles from '../index.css'
// 引入 echarts 主模块。
import echarts from "echarts"
function LineEcharts(props){
    let {falg}=props;
        // console.log(falg)
        let str=''
        if (falg) {
            str="bar"
        }else{
            str="line"
        }
    useEffect(()=>{
        // console.log(props)
        // console.log(str,'str')
        var myChart = echarts.init(document.getElementById('main'));
                // 绘制图表
                myChart.setOption({
                    title: { text: 'XX 同学的日周考成绩统计' },
                    tooltip: {
                        
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar', 'tiled']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {//取消 y轴 实线
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data:['悟生境','廖修亭']
                    },
                    series: [{
                        name: '悟生境',
                        type: str,//bar 柱状  line 线
                        data: [5, 20, 36, 10, 10, 20],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },{
                        name: '廖修亭',
                        type: str,//bar 柱状  line 线
                        data: [1, 30, 50, 80, 60, 20],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }]
                });
    })
    return(
        <div id="main" className={styles.EcharSLxt}></div>
    )
}
export default LineEcharts;
