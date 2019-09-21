import React, { useState , useEffect  } from 'react'
import styles from './login.css'
import { UserLogin,UserRegister } from './../../services/login';

function Login () {
    const [con,setCon]=useState(0)
    const [str,setStr]=useState("登入")

    const [username,setUsername]=useState("")//账号
    const [password,setPassword]=useState("")//密码
    const [check,setCheck]=useState(false)//自动登录
    const [phone,setPhone]=useState("")//手机号

    let arr =["登入","注册"]

    let handleSubmit =async ()=>{//登录 注册
        if (str==="登入") {
            let time=check?"24":"0";//判断自动登录时长
            let result = await UserLogin({
                "username":username,
                "password":password,
                "validlength":time
            })
            // console.log(username,'username',password,'password',time,'time')
            console.log(result)
            if (result.data.code==1) {
                console.log('登录成功')
            }else{
                console.log("登录失败，请去注册")
            }
        }
        if (str==="注册") {
            console.log(str,'str')
            let result = await UserRegister({
                "username":username,
                "password":password,
                "phone":phone
            })
            // console.log(username,'username',password,'password',phone,'phone')
            console.log(result)
            if (result.data.code==1) {
                console.log('注册成功')
            }else{
                console.log("注册失败，请重新注册")
            }
        }
    }

    return (
        <div className={styles.loginBox}>
            
            <div className={styles.loginFrame}>
    
                <h1>网址工程</h1>
                <h3>
                    {
                        arr.map((v,i)=>{
                            return <span key={i} className={i===con?styles.Spn:''} onClick={()=>{
                                setCon(i)
                                setStr(v)
                                setUsername("")
                                setPassword("")
                                setCheck(false)
                                setPhone("")
                            }}>
                                {v}
                            </span>
                        })
                    }
                </h3>
                <input type="text" placeholder="请输入账号" className={styles.ipt} value={username} onChange={(e)=>{
                        setUsername(e.target.value)
                }}/>
                <input type="password"  placeholder="请输入密码" className={styles.ipt} value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                }}/>
                {
                    str==="注册"&&
                    <input type="text" placeholder="请输入手机号"  className={styles.ipt} value={phone} onChange={(e)=>{
                        setPhone(e.target.value)
                    }}/>
                }
                {
                    str==="登入"&&
                    <div className={styles.pCheck}> <input type="checkbox" checked={check} onChange={(e)=>{
                        setCheck(e.target.checked)
                    }}/>两周内自动登录</div>
                }
                <button className={styles.btnLxt} onClick={handleSubmit}>
                    {str}
                </button>
            </div>
                
        </div>
    );
}
export default (Login);