<style scoped>

.navbar{
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height:60px;
    bottom: 0;
    left: 0;
    
background: rgb(255, 196, 0);
}
.navbar1{
  width: 100%;
  height: 100%;
}
.navbar-nav1{
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
color:white;
list-style: none;
}
.nav-item{
    margin:.5rem .2rem;
    cursor: pointer;
}
.nav-item a{
    color:white  
}
a img{
    width: 28px;
}
@media screen and (max-width:500px){
  .nav-item{
    margin: .1rem .1rem;
  }
  a img{
    width: 20px;
  }
}
@media screen and (max-width:377px){
  .nav-item{
    margin: 5px ;
  }
  a img{
    width: 20px;
  }
  .nav-link{
    padding: 5px;
  }
}
@media screen and (max-width:330px){
  .nav-item{
    margin: 0px;
  }
}
</style>
<template>

        <nav class="nav navbar">
   
   <ul class="navbar1 navbar-nav1">
       <li class="nav-item">
           <a class="nav-link" @click="sendaction(1)"><img src="../assets/list.svg" alt=""></a>
       </li>
       <li class="nav-item">
           <router-link class="nav-link" to="/"><img src="../assets/home.svg" alt="" class="img-svg"></router-link>
       </li>
       <li class="nav-item">
           <a class="nav-link" @click="sendaction(2)"><img src="../assets/menu.svg" alt=""></a>
       </li>
       <li class="nav-item">
           <a class="nav-link"><img src="../assets/shopping-bag.svg" alt=""></a>
       </li>
       <li class="nav-item">
           <router-link class="nav-link" to="/sign-in"><img src="../assets/user.svg" alt=""></router-link>
       </li>
   </ul>
</nav>
</template>
<script>
export default{
    emits:['sendaction'],
    methods:{
        sendaction(id){
            console.log('navbar')
            this.$emit('sendaction',id)
        }
    }
}
</script>
