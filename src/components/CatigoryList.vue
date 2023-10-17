<template>
    <div class="container">
        <div class="row">
<div class="col-12">
    <ul class="slick-slider" ref="slider2" id="slider">
<li v-for="c in this.categories" :key="c.id">
        <div class="card">
     
    <router-link :to="`/catigories/${c.id}`">
     <img :src="c.popular_image" alt="" class="image" ></router-link>
         
     <div class="title">
         {{ c.title }}

     </div>
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
.slick-slider{
    width: 100%;
}
.slick-slide{
    width: auto;
}
.card{height: 150px;
    padding: 0;
    position: relative;
   
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
    width: 100%;
    height: 100%;
}
img{
    width: 190px;
}
a{
    height: 100%;
    background-color: #fcb80010;
}

.title{
    position: absolute;
    top: 80%;
    width: 100%;
    text-align: center;
    font-weight: 500;
    padding-bottom: 1rem;
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