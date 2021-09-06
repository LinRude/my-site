//入口文件
import './mock'
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less";
import router from './router';
import './api/banner'
import showMessage  from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
new Vue({
  router, //把路由的配置 配置到Vue实例去
  
  render: h => h(App),
}).$mount('#app')
