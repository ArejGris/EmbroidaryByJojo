<template>
    <TopNav/>
    <Transition name="nav1">
        
    <NavDrw1 v-if="navdrw" @click="deleteaction"/>

    </Transition>
    <Transition name="nav1">

        <NavDrw2 v-if="navdrw2" @click="deleteaction"/>
    </Transition>
    <Navbar2  />
    <LargeNav @send="toggle" class="hide"/>
    <!-- <NavbarLargeScreen @send="toggle" v-if="wideOrNarrow"  /> -->
    <SideBar v-if="show" @clickme="show=false" />

    <router-view ></router-view>
    <div class="arrow " @click="gototop"><i class="fa fa-angle-up"></i></div>
    <Footer/>
   
    <NavBar @sendaction="action" class="hide1"/>
    
</template>
<script setup>
import TopNav from './components/TopNav.vue'
import LargeNav from './components/LargeNav.vue';
import NavDrw2 from './components/NavDrw2.vue';
import NavDrw1 from './components/NavDrw1.vue';
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue'
import Navbar2 from './components/Navbar2.vue';
import Footer from './components/Footer.vue';
import {ref,onMounted} from 'vue'
const show=ref(false)
const navdrw=ref(false)
const navdrw2=ref(false)
const wideOrNarrow=ref(false)
const toggle=()=>{
show.value=!show.value
}
const action =(id)=>{
if(id===1){
navdrw.value=!navdrw.value}
if(id===2){
navdrw2.value=!navdrw2.value

}
}
const deleteaction=()=>{
    navdrw.value=false
    navdrw2.value=false
    show.value=false
}
const gototop=()=>{
    window.scrollTo(0,0)
}
onMounted(()=>{


})

</script>
<style scoped>
.arrow{
    width: 45px;
    height: 45px;
    border-radius: 100%;
    color:black ;
    position: fixed;
    z-index: 9999;
    bottom:10%;
    right:4%;
    font-size: 19px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  rgb(255, 196, 0);
    transition: all .3s ease-in-out;
}

.arrow:hover{
    background-color: transparent;
    border: 1px solid rgb(255, 196, 0);

}
.nav2{
    top:0;
    position: fixed;
}
#app{
    overflow: hidden;
    width: 100vw;
    display: block
}
.narrow{
    display: flex;
}
.nav1-enter-active{
    transition: all .5s ease-in-out;
}
.nav1-enter-from{
    transform:  translateX(-50);
    opacity: 0;
}
.nav1-enter-to{
    transform :translateX(0);
    opacity: 1;
}
.nav1-leave-active{
    transition: all .5s ease-in-out;
}
.nav1-leave-from{
    transform :translateX(0);
    opacity: 1;
}
.nav1-leave-to{
    opacity: 0;
    transform: translateX(-50);
}
nav.hide{
display: flex;
}
nav.hide1{
    display: none;
}
@media screen and (max-width:1000px) {
    nav.hide{
        display: none;
    }
    nav.hide1{
        display: flex;
    }
}
@media screen and (max-width: 600px) {
    .arrow{
        bottom:15%;
        width: 40px;
        height: 40px;
    }
   
   
}
</style>
