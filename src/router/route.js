import home from "@/container/home";
import user from "@/container/user";
import login from "@/container/user/login";
import registry from "@/container/user/registry";
import show from "@/container/show";
import president from "@/container/president";
import grade from "@/container/grade";

const route = [
  {
    path: "/home",
    component: home
  },
  {
    path: "/user",
    component: user,
    children: [
      {
        path: "/user/login",
        component: login
      },
      {
        path: "/user/registry",
        component: registry
      }
    ]
  },{
    //统计表
    path:"/grade",
    component:grade
  },{
    //可视化展示
    path:"/show",
    component:show
  },{
    //院长视角
    path:"/president",
    component:president
  }
  
];

export default route;
