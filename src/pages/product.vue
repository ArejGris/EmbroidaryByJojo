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
  z-index: 9999;
}
.slick-prev{
  left: -15px;
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
}
.slick-slide{
  width: auto;
}
@media screen and (max-width:370px){
  .slick-slider1 li{
  padding: 0;
  margin-left: 10px;
  margin-right: 10px;

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

  margin-left: 20px;
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
props:['products','page','x'],
    mounted() {
      let n=0
      if(this.x==6){
        n=6
      }
      document.getElementById('slider').style.width="auto"
      $(this.$refs.slider1).slick({
           initialSlide:n,
            slidesToShow: 6,
            slidesToScroll: 4,
            arrows:true,
            responsive:[
               { breakpoint: 1024,
                settings: { 
                    slidesToShow: 4,
                    slidesToScroll: 4,

                }},
                { breakpoint: 768,
                settings: { 
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }},
                { breakpoint: 480,
                settings: { 
                    slidesToShow: 2,
                    slidesToScroll: 2,

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
  list-style: none;
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
  font-size: 20px;
  font-family: 'Poppins' sans-serif;
  font-weight: 600;
  margin-right: 1rem;
  white-space: nowrap;
  margin-bottom: 0px;
}
.t2{
  color: rgba(0, 0, 0, 0.548);
  white-space: nowrap;
}
.t2:hover{
  color: red;
}

.t2{
  margin-left: auto;

  text-align: right;
  align-self: flex-end;
}
@media screen and (min-width:1400px) {
  .t1{
  margin-left: 25px;
}
}
@media screen and (max-width:400px) {
  .t1{

  font-size: 16px;
}
}
</style>

