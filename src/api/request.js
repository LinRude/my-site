import axios from 'axios';
import showMessage from '../utils/showMessage';

const ins = axios.create(); //创建一个axios的实例
// 加入一个拦截器
// 凡是得到响应都会执行一下这个函数
ins.interceptors.response.use(function(resp){
    console.log('拦截器');
    if(resp.data.code !== 0){
        showMessage({
            content:resp.data.msg,
            type:'error',
            duration:1500
        })
        return null;
    }
    return resp.data.data;
})
export default ins