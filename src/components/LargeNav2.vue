<template>
<div class="navbar navbar-light bg-warning" id="nav" >
    <div class="nav-group" @click="this.$emit('send')">
    <img src="../assets/format-list-bulleted-square.svg"/>All Categories
    </div>
    <div class="nav-group">
        <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="catigories">Categories</router-link></li>
        <li><router-link to="/">Brands</router-link></li>
        <li><router-link to="/">Compaigns</router-link></li>
        <li><router-link to="/">Sellers</router-link></li>
        <li>
             <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                    </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Blog</a>
                    <a class="dropdown-item" href="#">About us</a>
                    <a class="dropdown-item" href="#">Connect us</a>
                </div>
            </div>
        </li>

        </ul>

    </div>
    <div class="nav-group2">
    </div>
</div>
</template>
<script>
export default{
    emits:['send'],
    mounted(){
        const nav=document.getElementById('nav')
document.addEventListener('scroll',()=>{
const h=window.screenY
if(h>160){
nav.classList.add('nav1')
}else{

    nav.classList.remove('nav1')
}
})
    }
}
</script>
<style scoped>
.navbar{
   width: 100wv;
    padding: 2rem;
}
.nav1{
    position: fixed;
    top:0
}
.nav-group1{
margin-right: auto;
}
.nav-group2{
    margin-left: auto;
}
.nav-group2 ul{
    display: flex;
    list-style: none;
}
.nav-group2 ul li{
    margin-left: 10px;
}
</style>
