<template>
    <div class="drawer">
        <div class="top"> 
            <img src="../assets/embroidary-logo.png" alt="" class="logo"> 
            <div class="fa fa-close" @click="close"></div>
        </div>
       <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>

            
            <li>
                <router-link to="/products">Products</router-link>
            </li>
            
            <li>
                <router-link to="/catigories">Catigories</router-link>
            </li>
            
            <li>
                <router-link to="">Brand</router-link>
            </li>
            
            <li>
                <router-link to="">Campaigns</router-link>
            </li>
            
            <li>
                <router-link to="">Sellers</router-link>
            </li>
            
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
</template>
<script>
export default{
    emits:['close'],
    methods:{
        close(){
            this.$emit('close')

        }
    }
}
</script>
<style scoped>
.drawer{
    z-index: 1024;
    position:fixed;
    left: 0;
    top:0;
    height: 100%;
    background-color: white;
    width: 300px;
    text-align: left;
}
@media screen and (max-width:350px){
    .drawer{
        width: 200px;
    }
}
ul{
    list-style: none;
    padding-left: 0px;
}
ul li{
    padding: 10px;
cursor: pointer;

text-align: left;
padding-left: 10px;
}
ul li:not(:last-child){
    
border-bottom: .1px solid rgba(128, 128, 128, 0.192);
}
.dropdown-menu.show {
    border: 0px;
}
ul li a{
    text-decoration: none;
    color: black;
}
.logo{
  width: 100px;
  height: 70px;
  margin-left: 10px;

}
.divider{
    width: 100%;
    height: .1px;
    background-color:rgba(128, 128, 128, 0.192);
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
}
.btn{
    width: 100%;
    text-align: left;
}
.dropdown-toggle::after{
    margin-right: auto;
    position: absolute;
    right: 10px;
    top: 40%;
}
</style>