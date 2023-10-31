<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="head">
  <h4 class="t1">{{ page }}</h4><router-link class="t2" to="/products">more products<span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
</div>
<div class="divider"></div>
<ul  class="slick-slider1" >
<li class="long">
  <img src="../assets/default-image-405x745.png" alt="">
</li>

  <li >
    <router-link :to="`/product/${products[0].id}`">  <Cart3 :id="products[0].id" :img="products[0].image_190x230" :price="products[0].price" :product-name="products[0].product_name"/></router-link>
   </li>
   <li >
    <router-link :to="`/product/${products[1].id}`">  <Cart :id="products[1].id" :img="products[1].image_190x230" :price="products[1].price" :product-name="products[1].product_name"/></router-link>
   </li>
</ul>


      </div>
    </div>
  </div>
   
</template>
<style >
.divider{
  width: 100%;
  height: 1px;
  background-color: gray;
}
h6{
  white-space: nowrap;
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

}



@media screen and (max-width:530px) {
 

}

</style>
<script>
import Cart3 from '../components/Cart3.vue'
import Cart from '../components/Cart.vue'
import { useMyStore } from '../store'
export default{
props:['products','page'],
    mounted() {
      
  
    },
    components: {Cart3,Cart},
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
.long{
  width: 240px;
  height: 500px;
  overflow: hidden;
  text-align: center;
}
.long img{
  height: 100%;
  width: 98%;
  margin:0px  auto;
}
@media screen and (max-width:1000px){
  .long {
    display: none;
  }
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

