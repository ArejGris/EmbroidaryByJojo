<template>
    <nav class="navbar navbar-expand-sm  navbar-light bg-warning" id="nav">
        <div class="container">
            <!-- Replace this with your own logo -->
            <a class="navbar-brand" href="#" @click="send">
                <img src="../assets/format-list-bulleted-square.svg" alt="" class="img-svg">
                All Categories</a>

            <!-- Toggler/collapsibe Button for small screens -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myList"
                aria-controls="myList" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- List of links -->
            <div class="collapse navbar-collapse" id="myList">
                <ul class="navbar-nav">
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
            </div>
            <div class="navbar-nav">
                <div class="nav-item ">
                   <i class="fa fa-pencil" id="pencil"></i>
                        <h6>
                        Daily Deals</h6>
                  
                   
                      </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.navbar{
    width: 100vw;
}
#pencil{
    transform: rotateZ(90deg);
}
.img-svg{
    width: 30px;
}
.sticky-top{
    top:0;
    position: fixed;
    width: 100vw;
}


.nav-item{
    color: black;
    display: flex;
    align-items: center;
}
.nav-item h6{
    white-space: nowrap;
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