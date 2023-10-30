<template>
<nav class="nav navbar-nav navbar-light " id="navbar2">
    
    <div class="navbar">
        <router-link to="/" class="navbar-brand">
        <img src="../assets/embroidary-logo.png" alt="logo" class="logo">
            
        </router-link>
        <div class="nav-search">
            <input type="text" placeholder="I m looking for ...">
            
            <i class="fa fa-search"></i>
        </div>
     <div class="icon-list">
        <ul class="mdi-icons">
            <li class="hide1"><img src="../assets/compare.svg" alt=""></li>
            <li class="hide2"><img src="../assets/heart.svg" alt=""></li>
            <li class="hide2"><img src="../assets/bag.svg" alt=""></li>
            <li>
                <img src="../assets/phone.svg" alt=""> 
                <div class="nav-item1">
        <router-link class="nav-link" to="/register">
            Register
        </router-link>
        <router-link class="nav-link" to="/sign-in">
        sign in
        </router-link>
        </div>
    </li>
        </ul>

     </div>
       
      
    </div>
</nav>
</template>
<script>
export default{
    mounted(){
        
    }
}


</script>
<style scoped>
.nav{
    height: 100px;
    align-items: center;
    overflow: hidden;
    width: 100%;
}
input{
    border: none;
    background-color: white;
    color:black
}
.navbar{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
}


.nav-link{
    padding: 0;
}
.mdi-icons{
    list-style: none;
    display: flex;
    justify-content: center;
}
.mdi-icons li{
    display: flex;
    align-items: center;
}
.mdi-icons li img{
    width: 28px;
    height: 28px;
}
.nav{
    width: 100vw;
}
@media screen and (max-width:800px) {
    .nav{
        height: 160px;
        margin-top: 0px;
    }
}
.nav-item1{

}
.nav-item a{
    color: black;
    cursor: pointer;
}
.nav-item{
    margin-right: 4rem;
}
.nav-item1 i{
    
    font-size: 27px;
    margin-left: 1rem;
    cursor: pointer;
}
.nav-search{
    width: 40%;
    border: 1px solid rgba(0, 0, 0, 0.226);
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media screen and (max-width: 990px){
    .nav-search{
        margin-top: 20px;
        order:1;
        flex:0 0 100%
    }
}
.nav-search input{
    width: 60%;
}
.nav-search input:focus{
outline: none;

padding-left: 10px;
}
li.hide1{
    display: none;
}
li.hide2{
    display: flex;
}
.hide1 ,.hide2{
    margin :1px 10px;
}
@media screen and (max-width:997px){
    li.hide1{
        display: flex;
    }
    li.hide2{
        display: none;
    }
}
@media screen and (max-width:338px){
    .mdi-icons li img{
width:20px
    }
    a{
        font-size: 10px;
    }
    .navbar-brand{
        width: 30px;
    }
}
</style>