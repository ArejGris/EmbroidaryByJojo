<template>
    <section class="sec">
    <catigories/>
    <CatigoryList :categories="popularcategories"/>
    <product :products="todayproducts" page="Today Deals"/>
    <product :products="acceccoirs" page="Acceccoir"/>
    <CatigoryList :categories="topcategories"/>
    <product :products="bestproducts" page="Best Selling Products"/>
    
    <product :products="latestproducts" page="Latest Products"/>
    </section>
</template>
<script setup>
import product from './product.vue';
import catigories from './catigories.vue'
import CatigoryList from '../components/CatigoryList.vue';
import { useMyStore } from '../store';
import {computed} from 'vue'

const todayproducts=computed(()=>{
    const store=useMyStore()
    return store.today_deals
})
const latestproducts=computed(()=>{
    const store=useMyStore()
    return store.latest_products
})
const bestproducts=computed(()=>{
    const store=useMyStore()
    return store.best_selling_product
})
const topcategories=computed(()=>{
    const store=useMyStore()
    return store.top_categories
})
const popularcategories=computed(()=>{
    const store=useMyStore()
    return store.popular_categories
})
const acceccoirs=computed(()=>{
    const store=useMyStore()
    return store.Accessoires
})
</script>
<style>
.sec{
    margin-top: 3rem;
}
</style>