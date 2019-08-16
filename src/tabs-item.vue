<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabs-item",
        inject:['eventBus'],
        data(){
            return{
                active:false
            }
        },
        props:{
            disabled:{
                type: Boolean ,
                default:true
            },
            name:{
                type:String | Number,
                required:true
            }
        },
        created() {
            this.$eventBus.$on('update:selected',(name)=>{
                if(name===this.name){
                    console.log(`{$this.name}被选中了`);
                }else {
                    console.log(`{$this.name}没被选中了`);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
    }
</style>