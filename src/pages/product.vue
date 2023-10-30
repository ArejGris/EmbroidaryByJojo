<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <div class="head">
  <h4 class="t1">{{ page }}</h4><router-link class="t2" to="/products">more products<span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
</div>
 <div class="divider"></div>
<ul  class="slick-slider slick-slider1" ref="slider1" id="slider">
  <li v-for="prod in products" :key="prod.id">
    <router-link :to="`/product/${prod.id}`">  <Cart3 :id="prod.id" :img="prod.image_190x230" :price="prod.price" :product-name="prod.product_name"/></router-link>
   </li>
</ul>

      </div>
 

    </div>

  </div>

</template>
<style >
h6{
  white-space: nowrap;
}
.divider{
  width: 100%;
  height: .1px;
  background-color: rgba(128, 128, 128, 0.185);
  margin-bottom: 20px;
}
.slick-prev,.slick-next,.slick-arrow{
  z-index: -9999;
}
.slick-track{
}
  .slick-slider1{
    display: flex;
    overflow: hidden;
}
.slick-slider1 li{
  margin-left: 10px;
  margin-right: 10px;
  width: 200px;
}
.slick-slide{
  width: auto;
}
@media screen and (max-width:370px){
  .slick-slider1 li{
  padding: 0;
  margin-left: 10px;
  margin-right: 10px;
  width: 150px;
}
}
@media screen and (max-width:300px){
  .slick-slider1 li{
padding: 1px;
  margin-left: 2px;
  margin-right: 2px;
}
}
.slick-slider1 .slick-slide{
  width: 200px;
}




</style>
<script>
import 'slick-carousel/slick/slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from "jquery"
import Cart3 from '../components/Cart3.vue'
import { useMyStore2 } from '../store2'
export default{
props:['products','page'],
    mounted() {
      document.getElementById('slider').style.width="auto"
      $(this.$refs.slider1).slick({
            
            slidesToShow: 6,
            slidesToScroll: 2,
            arrow:false,
            responsive:[
               { breakpoint: 1024,
                settings: { 
                    slidesToShow: 4,
                    slidesToScroll: 2,

                }},
                { breakpoint: 700,
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
    },
    components: {Cart3},
    data(){
      return{
       
      }

    },
    computed:{
     
    }

}
</script>
<style scoped>
ul{
  padding-left: 0px;
  width: 100%;
}
section{
  width: 100vw;


}
a{
  text-decoration: none;
}
.head{
  position: relative;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
  left: 0;
}
.t1{
  text-align: left;
  margin-left: 15px;
  font-size: 18px;
  margin-right: 1rem;
  white-space: nowrap;
}
.t2{
  color: rgba(0, 0, 0, 0.548);
}
@media screen and (min-width:1400px) {
  .t1{
  margin-left: 25px;
}
}
.t2{
  margin-left: auto;

  text-align: right;
  align-self: flex-end;
}
</style>

