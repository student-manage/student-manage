import request from '../utils/request'

// 登录
export let UserLogin =(params)=>{
    let url ='/emstu/teacher/login';
    return request.post(url,params)
}
// 注册
export let UserRegister =(params)=>{
    let url ='/emstu/teacher/register';
    return request.post(url,params)
}
// 添加成绩   /emstu/student/addrecord
export let Useraddrecord =(params)=>{
    let url ='/api/emstu/student/addrecord';
    return request.put(url,params)
}
// 创建班级 /emstu/class/create
export let Usercreate =(params)=>{
    let url ='/api/emstu/class/create';
    return request.put(url,params)
}
// 成绩列表 /emstu/student/recordlists
export let Userrecordlists =(params)=>{
    let url ='/emstu/student/recordlists';
    return request.get(url,params)
}
// 重点名单 /emstu/student/lists
export let Userlists =(params)=>{
    let url ='/api/emstu/student/lists';
    return request.get(url,params)
}