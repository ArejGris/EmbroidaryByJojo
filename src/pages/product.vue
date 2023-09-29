<template>
  <section>
    <div class="head">
  <h4 class="t1">{{ page }}</h4><router-link class="t2" to="/products">more products<span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
</div>
  <v-divider></v-divider>
<ul  class="slick-slider1">
  <li v-for="prod in products" :key="prod.id">
    <router-link :to="`/product/${prod.id}`">  <Cart3 :id="prod.id" :img="prod.image_190x230" :price="prod.price" :product-name="prod.product_name"/></router-link>
   </li>
</ul>
  </section>

</template>
<style >
h6{
  white-space: nowrap;
}
  .slick-slider1{
    width: 100vw;
    display: flex;
    overflow: hidden;
}
.slick-slider1 li{
  margin-left: 10px;
  margin-right: 10px;
  width: 200px;
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

  .slick-next {
    z-index: 9;
}
.slick-prev{
  z-index: 9;
  left:10px;
}

@media screen and (max-width:530px) {
 
 .slick-next {
   right: -6px;
}
.slick-prev{
 left:5px
}
}
.slick-next ,.slick-prev {
  background-color: gainsboro;
  border-radius: 100%;
}
</style>
<script>
import Cart from '../components/Cart.vue'
import Cart2 from '../components/Cart2.vue'
import Cart3 from '../components/Cart3.vue'
import { useMyStore } from '../store'
export default{
props:['products','page'],
    mounted() {
      
    },
    components: { Cart ,Cart2,Cart3},
    data(){
      return{
       
      }

    },
    computed:{
       products1(){
        const store=useMyStore()
        return store.products

      }
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
  width: 99vw;
  display: flex;
  align-items: center;
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

