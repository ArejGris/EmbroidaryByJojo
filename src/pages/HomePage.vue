<template>
<section>
            <catigories/>
            <div class="browse">
                <h6>Popular Categories</h6>
                <router-link class="t2" to="/categories">more categories<span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
</div>
<div class="divider"></div>
    <CatigoryList :categories="this.popularCat" />
    <product :products="this.todaydeals2" page="Today Deals"></product>
    
    
    <product2 :products="this.Acceccoirs" page="Accessoirs"></product2>
    
    <product :products="this.bestproducts" page="Best Selling Products"/>
    <div class="cats">
<div class="t">Top Categories of the mounth</div>
        <CatigoryList :categories="this.topCat"/>
    </div>
    <product :products="this.latestProducts" page="Latest Products"></product>
       
</section>
</template>
<script>
import product from './product.vue';
import product2 from './product2.vue';
import catigories from './catigories.vue';
import CatigoryList from '../components/CatigoryList.vue';
import { useMyStore } from '../store';
import { useMyStore2 } from '../store2';
export default{
    components:{
        product,catigories,CatigoryList,product2
    },
    computed:{
topCat(){
const store=useMyStore2()
return store.top_categories
},
popularCat(){
    const store2=useMyStore2()
return store2.popularcategories
},
todaydeals2(){
    
const store2=useMyStore2()
return store2.todaydeals
},
bestproducts(){
    
const store=useMyStore2()
return store.best_selling_product
},
Acceccoirs(){
    
const store=useMyStore2()
return store.Accessoires
},
latestProducts(){
    
const store=useMyStore2()
return store.latest_products
}
    }
}
</script>
<style scoped>
.t2{
    white-space: nowrap;
}
@media screen and (max-width:700px){
 .t2,.browse h6{
    font-size: 13px;
 }   
}
.cats{
    text-align: center;
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.041);
    width: 100vw;
}
.cats .t{
    margin: 30px auto;
    font-size: 19px;
    font-weight: 600;
}
.browse{
    display: flex;
    justify-content: space-between;
    padding: 2rem;
}
.divider{
    width:100%;
    height: .1px;
    background-color: rgba(128, 128, 128, 0.185);
    margin-bottom: 20px;
}
@media screen and (max-width:700px){
 .t2,.browse h6{
    font-size: 13px;
 }   
 .browse{
    padding:2rem 0px;
 }
}
a{
    text-decoration: none;
    color: black;
}
</style>