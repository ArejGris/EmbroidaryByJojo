<template>
    <section>
        <div class="browse">

            <h3>Popular Products</h3>  <router-link to="/catigories"><h3>Browse All Catigories</h3><span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
        </div>
        <v-divider></v-divider>
        <ul class="slick-slider" ref="slider">
            <li v-for="c in this.categories" :key="c.id">
                <router-link :to="`/catigories/${c.id}`">
                    <div class="card">
                 
                 <img :src="c.popular_image" alt="" class="image">
                     
                 <div class="title">
                     {{ c.title }}
 
                 </div>
                    </div>

                </router-link>
                
            </li>
        </ul>
    </section>
</template>

<script>
import 'slick-carousel/slick/slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from "jquery"
import { useMyStore } from '../store'
export default{
    props:['categories'],
  
     mounted(){
    
        $(this.$refs.slider).slick({
            
            slidesToShow: 5,
            slidesToScroll: 2,
            arrow:false,
            responsive:[
               { breakpoint: 1024,
                settings: { 
                    slidesToShow: 4,
                    slidesToScroll: 2,

                }},
                { breakpoint: 600,
                settings: { 
                    slidesToShow: 3,
                    slidesToScroll: 2,

                }},
                { breakpoint: 480,
                settings: { 
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }}
            ]
        })
}  
}
</script>
<style scoped>
.card{
    width: 200px;
    height: 200px;
    padding: 0;
    position: relative;
}
.image{
    width: 100%;
    height: 90%;
}
.title{
    position: absolute;
    top: 80%;
    width: 100%;
    text-align: center;
}
.browse{
    padding: 0px 1rem;
    display: flex;
    justify-content: space-between;
}
a{
    display: flex;
    text-decoration: none;
    color: gray;
    font-family: Poppins;

}
h3{
    font-size: 19px;
    white-space: nowrap;
}
@media  screen and (max-width:450px) {
    h3{
        font-size: 15px;
        margin-right: 4px;
    }
    .card{
        height: 150px;
        .title{
            top:70%
        }
    }
}
</style>