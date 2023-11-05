<template>
    <section>
        <div class="container">
    <div class="row ">
        <div class="col-lg-3  hide">
           <div class="sidebar">
            <ul class="sidelist">
                <li>
                    <span data-v-3b91b666="" class="mdi mdi-view-dashboard-outline mdi-18px"></span> all offer</li>
                <li v-for="cat in catigories" :key="cat.id">
                    <span data-v-3b91b666="" class="mdi mdi-view-dashboard-outline mdi-18px"></span> 
                    <router-link :to="`/catigories/${cat.id}`">{{ cat.title }}</router-link>
                </li>
                <li ><router-link to="/catigories" class="color">view all categories <i class="fa fa-angle-right"></i></router-link></li>

                
            </ul>
           </div>

        </div>
        <div class=" col-lg-9">
            <div class="row " >
        <div class="col-lg-12">
            <div class="img">
                <img src="../assets/default-image-970x400.png" alt="">
            </div>
        </div>
        <div class="col-lg-12">
            <div class="sec-banner">
                
            <div class="banner">
                
                <a href="" class="banner-item"><img src="../assets/default-image-220x125.png" alt=""></a>
                <a href="" class="banner-item"><img src="../assets/default-image-220x125.png" alt=""></a>
                <a href="" class="banner-item"><img src="../assets/default-image-220x125.png" alt=""></a>
                <a href="" class="banner-item"><img src="../assets/default-image-220x125.png" alt=""></a>
    
                </div>

            </div>
        </div>
       </div>

        </div>
        
       </div>
    
    
</div>
    </section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-6 two"><div class="img"><img src="../assets/default-image-620x320.png" alt=""></div></div>
        <div class=" col-md-6 two"><div class="img"><img src="../assets/default-image-620x320.png" alt=""></div></div>
    
        </div>
    </div>
</section>
</template>
<script >
import { useMyStore2 } from '../store2';
export default{
    computed:{
       catigories(){
    const store=useMyStore2()
    return store.categories
}
    }
  
}
</script>
<style scoped>
a{
    text-decoration: none;
}
ul{
    padding-left: 0;
}
.img{
    text-align: center;
    transition: all .2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.img img{
    width: 100%;
    height: 100%;
}
.img:hover{
    cursor: pointer;
    transform: translateZ(100)

}
.col-12{
    margin-bottom: 1rem;
}
.col-12,.col-6{
 
    padding: 10px; 
}
.col-6{
    margin-bottom: 1rem;
  
}
.two{
    margin-top: 10px;
}

.col-6{
    margin-top: 10px;
}
.sec-banner{
    margin-top: 16px;
}
.banner{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-start;
}
.banner-item{
    
    flex: 0 0 48%;
    overflow-x: hidden;
    max-width: 48%;
}
.browser{
    display: flex;
    justify-content: space-between;
}
.sidebar{
    height: 100%;
    width: 100%;
}
.sidelist{
    list-style: none;
    text-align: left;
    margin-top: 1%;
}
.sidelist li{
    border: .1px solid rgba(128, 128, 128, 0.295);
    transition: all .3s ease-in-out;
    padding: .6rem 2rem;
    white-space: nowrap;
}

.sidelist li a:not(.color){
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.675);
}
.sidebar li:not(:last-child){
    border-bottom: none;
}
.sidelist li:hover {
    border-left: 1px solid  rgb(255, 196, 0);
    color:  rgb(255, 196, 0);
    background-color:  #fcb80010;
}
.sidelist li:hover a{

    color:  rgb(255, 196, 0);
}
.sidelist li span{
    margin-right: 1rem;
}
@media screen and (max-width:991px) {
    .hide{
        display: none;
    }
}
@media screen and (max-width:769px ){
   
   
    .col-6{
    height: 100px;
}


}
.sidebar{
    width: auto;
}
.color{
color: rgb(255, 196, 0);
}
</style>