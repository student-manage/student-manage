import React, { useState , useEffect  } from 'react'
import styles from './login.css'

function Login () {
    const [con,setCon]=useState(0)
    const [spn,spnCon]=useState("登入")
    let arr =["登入","注册"]

    return (
        <div className={styles.loginBox}>
            
            <div className={styles.loginFrame}>
    
                <h1>网址工程</h1>
                <h3>
                    {
                        arr.map((v,i)=>{
                            return <span key={i} className={i===con?styles.Spn:''} onClick={()=>{
                                setCon(i)
                                spnCon(v)
                            }}>
                                {v}
                            </span>
                        })
                    }
                </h3>
                <input type="text" className={styles.ipt}/>
                <input type="text" className={styles.ipt}/>
                <div className={styles.pCheck}> <input type="checkbox"/>两周内自动登录</div>
                <button className={styles.btnLxt}>
                    登入
                </button>
            </div>
                
        </div>
    );
}
export default (Login);