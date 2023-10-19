<script >
import { useMyStore } from '../store';
export default{
    props:['sidebar'],
    emits:['clickme'],
    methods:{
        clickme(){
            this.$emit('clickme')
        }
    },
    computed:{
       catigories(){
    const store=useMyStore()
    return store.categories
}
    }
  
}
</script>
<template>

<div class="sidebar" @click="clickme">
            <ul class="sidelist">
                <li v-for="cat in catigories" :key="cat.id">
                    <span data-v-3b91b666="" class="mdi mdi-view-dashboard-outline mdi-18px"></span> 
                    <router-link :to="`/catigories/${cat.id}`">{{ cat.title }}</router-link>
                </li>
                <li class="color"><router-link to="/catigories">view all categories<i class="fa fa-angle-right"></i></router-link></li>
                
            </ul>
           </div>


</template>

<style scoped>
    .sidebar{
        z-index: 999;
        background-color: white;
        position: fixed;
        top:28%;
        left: .8rem;
        width: 500px;
    }
    
.sidebar{
    width: 300px;
}
.sidelist{
    list-style: none;
    text-align: left;
}
.color a{
    color:rgb(255, 196, 0)
}
.sidelist li{
    border: .1px solid rgba(128, 128, 128, 0.295);

    border-bottom: none;
    padding: 1rem 2rem;
    width: 100%;
    white-space: nowrap;
}

.sidelist li:not(:last-child){
    border-bottom: none;
}
.sidelist li:hover {
    border-left: 1px solid  rgb(255, 196, 0);
    color:  rgb(255, 196, 0);
}
.sidelist li:hover a{

    color:  rgb(255, 196, 0);
}
.sidelist li span{
    margin-right: 1rem;
}
ul.sidelist{
    padding-left: 0px;
 }  
@media screen and (max-width:996px) {
.sidebar{
    left:0
}
 
}
</style>