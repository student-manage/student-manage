import React, { useEffect } from "react";
import echarts from "echarts";


function President () {
    useEffect(()=>{
      var myChart = echarts.init(document.getElementById('president'));
      myChart.setOption({
        title: {
            text: 'XX同学的日周考成绩统计图',
            subtext: '仅供参考'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['技能','理论']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-09','08-10','08-11','08-12','08-13']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name:'技能',
                type:'line',
                data:[30, 50, 70, 22, 25, 76.7,36.05,60,32,20,8,23],
                markPoint: {
                    
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'理论',
                type:'line',
                data:[30, 60, 90, 30, 24, 25, 70,76,82.2,49,20,60,19],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            
                        }, {
                            symbol: 'circle',
                            label: {
                               
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
      });
    })
    return <div id="president" style={{width: '1140px', height:'700px'}}>President</div>;
}

export default President;
