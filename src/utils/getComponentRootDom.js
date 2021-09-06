import Vue from "vue";
//得到组件渲染的DOM
/**
 * 获取某个组件渲染的DOM根元素
 * @param {*} comp 组件名
 * @param {*} props 组件的props
 * @returns 
 */
export default function(comp,props){
    const vm = new Vue({
        render : h=> h(comp,{props})
    })
    vm.$mount();
    return vm.$el;
}