import Vue from "vue"
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter); //使用一个vue插件

const router = new VueRouter({
    //配置
    routes, // 路由匹配规则
    mode : 'history'
})
// history：路由从浏览器地址栏中的location.pathname中获取路径，改变路径使用的H5的history api.
// history.pushState(null,null,"/blog"); 用这个改变可以实现无刷新 前提兼容H5

// abstract（不常见）
export default router;
