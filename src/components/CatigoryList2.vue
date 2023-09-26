<template>
<ul class="slick-slider">
    <div v-for="cat in catigories" :key="cat.id">
                <router-link :to="`/catigories/${cat.id}`">
                    <div class="card">
                 
                 <img src="../assets/img.jpg" alt="" class="image">
                     
                 <div class="title">
                     {{ cat.title }}
 
                 </div>
                    </div>

                </router-link>
                
            </div>
        </ul>
</template>
<script>
// import slick from 'vue-slick-carousel'
import $ from "jquery"
import 'slick-carousel/slick/slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default{
    props:['categories'],
    components:{
       
    },
    data(){
        return{
           
        }
    },
    mounted(){
        $('.slick-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
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
ul{
    padding-left: 0px;
}
section{
    width: 100vw;
   margin: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   overflow-x: scroll;


}
a{
    color: black;
text-decoration: none;
font-size: 19px;
font-weight: 500;
cursor: pointer;
}
a:hover{
    color: red;
}
ul{
    list-style: none;
    display: flex;
}
ul li{
    margin-left: 10px;
    cursor: pointer;

}
ul li .card{
text-align: center;
position: relative;
padding: 0px;
height: 200px;
width: 200px;
transition: all .5s ease-in-out;
}
ul li:hover .card{
 border: 1px solid red;

color: red;
}
.card .image{
    border-radius: 10px;
    width:100%;
    height: 100%;
}
.card .title{
    position: absolute;
    text-align: center;
    top:80%;
    left:30%;
    font-size: 19;
    font-weight: 700;
    white-space: nowrap;
    
}
.browse{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}
.browse h3{
margin-right: 1rem;
}
.browse h3,.browse a{
    font-size: 20px;
}
@media screen and (max-width:520px){
    
.browse{
    width: 90%;
}
.browse h3,.browse a{
    font-size: 16px;
    white-space: nowrap;
}
ul li{
margin-left: 3px;
}
ul li  .card{
    width:160px;
    height: 160px;
   }
   .card .title{
    font-size: 14px;
   } 
}
@media screen and (max-width:360px){
    ul li{
        margin-left: 1px;
    }
    ul li .card{
        width: 130px;
        height: 130px;
    }
}
  .slick-sliders{
    width: 100%;
}



.slick-sliders li{
  width: 200px;
}
.slick-sliders .slick-slide{
  width: 200px;
}

</style>