

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
onMounted(()=>{
const wide=window.innerWidth
if(Number(wide)>800){
    wideOrNarrow.value=true
}
else{
    wideOrNarrow.value=false
}

})

</script>
<style scoped>
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
@media screen and (max-width: 600px) {
    nav.hide{
        display: none;
    }
    nav.hide1{
        display: flex;
    }
}
</style>
