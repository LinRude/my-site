<template>
    <div>
       ChildComp，a:{{ a }},b:{{ b }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            a:1,
            b:2
        }
    },
    methods:{
        m1(){
            console.log("method");
        }
    }
}
</script>

<style>

</style>