//入口文件
import './mock'
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less";
import router from './router';
import './api/banner'
import showMessage  from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from './directives/loading'
Vue.directive('loading',vLoading);

new Vue({
  router, //把路由的配置 配置到Vue实例去
  render: h => h(App),
}).$mount('#app')


// // 随便测试一下
// import * as blogApi from './api/blog';

// blogApi.getBlogTypes().then(r=>{
//   console.log('博客分类',r);
// })

// blogApi.getBlogs(2, 10, 3).then((r) => {
//   console.log("博客", r);
// });

// blogApi.getBlog('aaaa').then(r=>{
//   console.log(r)
// })

// blogApi.postComment({
//   nickname:'昵称',
//   conten:'评论内容，纯文本',
//   blogId:'123'
// }).then(r => {
//   console.log(r);
// })

// blogApi.getComments('123123').then(r =>{
//   console.log(r);
// })

// // 测试事件总线
// import eventBus from "./eventBus";

// function handler1(data){
//   console.log("handler1",data);
// }
// function handler2(data){
//   console.log("handler2",data);
// }
// eventBus.$on('event1',handler1)
// eventBus.$on('event1',handler2)
// eventBus.$on('event2',handler1)
// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;