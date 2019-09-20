import React, { Component, useState , useEffect   } from 'react'
import styles from './index.css'
import { Switch} from 'antd';
import LineEcharts from './echartsLxt/LineEcharts';
function Show() {
    let arr=["1703C","1703E","1703F"]
    const [con,setCon]=useState(0)
    const [falg,setFalg]=useState(true)//自动登录
    const [btnFalg,setbtnFalg]=useState(false)//显示弹出框
    const [Time,setTime]=useState('')//获取时间
    const [str,setStr]=useState('')//判断 成绩 和 分析
    const [strFalg,setStrflag]=useState(true)//判断 成绩 和 分析 显示 规定
    const [skill,setSkill]=useState('')//成绩 技能
    const [theory,setTheory]=useState('')//成绩 理论
    const [analysis,setAnalysis]=useState('')//分析 分析
    const [plan,setPlan]=useState('')//分析 解决方案
    useEffect(()=>{

    },[setbtnFalg])

    function clickOk(){
        if (str=="成绩") {
            console.log(str,'str')
            // 技能 skill   理论 theory   时间 Time
        }else{
            console.log("分析")
        }
        setbtnFalg(false)
    }
    function clickNo(date, dateString){
        setbtnFalg(false)
    }
    return (
        <div className={styles.showLxt}>
            <div className={styles.HshowHeaderLxt}>重点关注学生考试成绩统计图</div>
            <div className={styles.showNavLxt}>
                <ul>
                    <li>切换班级:</li>
                    {
                        arr.map((v,i)=>{
                            return <li className={con==i?styles.lisActive:''} key={i} onClick={()=>{
                                setCon(i)
                            }}>{v}</li>
                        })
                    }
                    <li className={styles.btnLisLxt}>创建班级+</li>
                </ul>
                <p><Switch defaultChecked onChange={(checked)=>{
                    setFalg(checked)
                }} />柱形图/线形图</p>
            </div>

            <div className={styles.sectionsLxt}>
                <p>
                    添加学生+:
                </p>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button>添加</button>
            </div>
            <LineEcharts falg={falg}/>
            <div className={styles.footerLxt}>
                <p>
                    <span onClick={()=>{
                        setStr("成绩")
                        setbtnFalg(true)
                        setStrflag(true)
                    }}>
                        添加成绩+
                    </span>
                    <span onClick={()=>{
                        setStr("分析")
                        setbtnFalg(true)
                        setStrflag(false)
                    }}>
                        添加分析和解决方案+
                    </span>
                </p>
                <p>
                    <span>
                        查看和编辑该生所有成绩
                    </span>
                </p>
            </div>
            {btnFalg&&
                <div className={styles.kuangLxt}>
                    <h3>添加{str}--XX同学</h3>
                    <p className={styles.ps}>
                        <input type="date" className={styles.timeLxt} onChange={(e)=>{
                            setTime(e.target.value)
                        }} />
                        <button className={styles.timeBtn}>
                            昨天
                        </button>
                    </p>
                    {strFalg&&
                        <div className={styles.strFalg}>
                            <p>技能<input type="text" onChange={(e)=>{
                                setSkill(e.target.value)
                            }}/></p>
                            <p>理论<input type="text" onChange={(e)=>{
                                setTheory(e.target.value)
                            }}/></p>
                        </div>
                    }
                    {!strFalg&&
                        <div className={styles.strFalg}>
                            <p>分析
                                <textarea  name="" id="" cols="30" rows="10" onChange={(e)=>{
                                    setAnalysis(e.target.value)
                                }}></textarea>
                            </p>

                            <p>解决方案
                                <textarea  name="" id="" cols="30" rows="10" onChange={(e)=>{
                                    setPlan(e.target.value)
                                }}></textarea>
                            </p>
                        </div>
                    }
                    
                    <div className={styles.kuangFoot}>
                        <button className={styles.btnOk} onClick={clickOk}>
                            确定
                        </button>
                        <button className={styles.btnNo} onClick={clickNo}>
                            取消
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Show;