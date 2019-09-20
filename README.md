# 学生管理
    启动服务
      npm run start
# 登录login
  ~~~
    登录页面  响应式布局 完成  （PC端 平板端  移动端）
  ~~~
# 学生日周考试成绩统计表
```js
  引入
    import React, {useState } from "react";
  定义
    const [showModal,setShowModal]=useState(false);
  设置
    setShowModal(true)

  响应式布局
    @media screen and (min-width: 1000px) {
      ....
    }
    @media screen and (max-width: 400px) {
        html, body {
          height: 100%;
          width: 100%;
          font-size: calc(100/750*100vw);
      }
    }