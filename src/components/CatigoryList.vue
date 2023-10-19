<template>
    <div class="container">
        <div class="row">
<div class="col-12">
    <ul class="slick-slider" ref="slider2" id="slider">
<li v-for="c in this.categories" :key="c.id">
        <div class="card">
     
    <router-link :to="`/catigories/${c.id}`">
     <img :src="c.popular_image" alt="" class="image" >
     <div class="title">
         {{ c.title }}

     </div>
    </router-link>
         
     
        </div>

    
</li>
</ul>

</div>


        </div>
       
    </div>
</template>

<script>
import 'slick-carousel/slick/slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from "jquery"
export default{
    props:['categories','title'],
  
     mounted(){
        document.getElementById('slider').style.width="100%"
        $(this.$refs.slider2).slick({
            
            slidesToShow: 6,
            slidesToScroll: 2,
            arrow:false,
            responsive:[
               { breakpoint: 1024,
                settings: { 
                    slidesToShow: 4,
                    slidesToScroll: 2,

                }},
                { breakpoint: 750,
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
.slick-slider{
    width: 100%;
}
.slick-slide{
    width: auto;
}
.card{
    width: 100%;
    height: 100%;
    padding: 0px;
    position: relative;
    border: none;
    border-radius: 4px;
    
   
}
.col-12{
    width: 100%;;
}
.card:hover{
    border: 1px solid red;
}
.card:hover .title{
    color: red;
}
.image{
}
img{
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
}
a{
    width: 100%;
    height: 100%;
    padding:20px 10px;
    display: block;
    text-align: center;
    background-color: #fcb80010;
 
}

.title{
    width: 90%;
    text-align: center;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
}
.category-slider a span{
    overflow: hidden;
    white-space: nowrap;

}
.browse{
    padding: 0px 1rem;
    display: flex;
    justify-content: space-between;
}
a{
    text-decoration: none;
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