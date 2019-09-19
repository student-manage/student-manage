import request from '../utils/request'

// 登录
export let UserLogin =(params)=>{
    let url ='/api/emstu/teacher/login';
    return request.post(url,params)
}
// 注册
export let UserRegister =(params)=>{
    let url ='/api/emstu/teacher/register';
    return request.post(url,params)
}