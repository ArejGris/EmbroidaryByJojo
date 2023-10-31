<template>
    <nav class="navbar navbar-expand-sm  navbar-light bg-warning" id="nav">
        <div class="container">
         
                <a class="navbar-brand b1" href="#" @click="send">
                <img src="../assets/format-list-bulleted-square.svg" alt="" class="img-svg">
                ALL CATEGORIES</a>

            <!-- List of links -->
            <ul  class="navbar-nav" id="myList">
                
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link" href="#">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link" href="#">products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/catigories" class="nav-link" href="#">Categories</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#">Brands</router-link>
                    </li> 
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#">Compaigns</router-link>
                    </li> 
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#">Sellers</router-link>
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
            <div class="navbar-nav">
                <div class="nav-item ">
                   <i class="fa fa-pencil" id="pencil"></i>
                        <h6>
                        Daily Deals</h6>
                  
                   
                      </div>
            </div>

            

            <!-- Replace this with your own logo -->
          
        </div>
    </nav>
</template>
<style scoped>
a{
    cursor: pointer;
}
.b1{
   padding-left: 2rem ;
}
.navbar{
    width: 100vw;
    height: 60px;
}
ul.navbar-nav{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0px 2rem;
}
#pencil{
    transform: rotateZ(90deg);
    margin-right: 7px;
    margin-bottom: 5px;
}

.img-svg{
    width: 30px;
}
.sticky-top{
    top:0;
    position: fixed;
    width: 100vw;
}
.navbar-brand{
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 15px;
    margin-right: 21px;
}

.nav-item{
    color: black;
    display: flex;
    align-items: center;
}
.nav-item h6{
    white-space: nowrap;
    line-height: 1.3;
    font-weight: 400;
}
a{
    font-size: 15px;
    font-weight: 500;
    color: black;
}
</style>
<script>
export default{
    emits:['send'],
    mounted(){
        const nav=document.getElementById('nav')

document.addEventListener('scroll',()=>{
    const height=window.scrollY
    if(height>160){
nav.classList.add('sticky-top')

}else{
    
nav.classList.remove('sticky-top')
}
})
    },
    methods:{
        send(){
this.$emit('send')
        }
    }
}

</script>