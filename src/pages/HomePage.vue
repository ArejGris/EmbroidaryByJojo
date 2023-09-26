<template>
<section>
    <catigories/>
    <CatigoryList :categories="this.popularCat"/>
    <product :products="this.todaydeals" page="Today Deals"></product>
    
    
    <product :products="this.Acceccoirs" page="Accessoirs"></product>
    <CatigoryList :categories="this.topCat"/>
    <product :products="this.latestProducts" page="Latest Products"></product>
</section>
</template>
<script>
import product from './product.vue';
import catigories from './catigories.vue';
import CatigoryList from '../components/CatigoryList.vue';
import { useMyStore } from '../store';
export default{
    components:{
        product,catigories,CatigoryList
    },
    computed:{
topCat(){
const store=useMyStore()
return store.top_categories
},
popularCat(){
    const store=useMyStore()
return store.popular_categories
},
todaydeals(){
    
const store=useMyStore()
return store.today_deals
},
bestproducts(){
    
const store=useMyStore()
return store.best_selling_product
},
Acceccoirs(){
    
const store=useMyStore()
return store.Accessoires
},
latestProducts(){
    
const store=useMyStore()
return store.latest_products
}
    }
}
</script>