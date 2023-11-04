import { createRouter ,createWebHistory } from "vue-router";
import signup from './components/signup.vue'
import register from './components/register.vue'
import HomePage from './pages/HomePage.vue'
import OneProduct from './components/OneProduct.vue'
import product from "./pages/product.vue";
import AllCatigories from './pages/AllCatigories.vue'
import OneCatigory from './pages/OneCatigory.vue'
import AllProducts2 from './pages/AllProducts2.vue'
import connectus from './pages/connectus.vue'
const routes=[
    {
        path:'/',component:HomePage
    },
    {
        path:'/sign-in',component:signup
     },
     {
         path:'/register',component:register
     },
     {
        path:'/catigories',component:AllCatigories

     },
     {
        path:'/products',component:AllProducts2

     },
     
     {
       path:'/catigories/:id',component:OneCatigory,props:true
     },
     {
        path:'/product/:id',component:OneProduct,props:true,children:[
            {path:'s' ,component:product}
        ]
     },
     {
        path:'/connect-us',component:connectus
     }

]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router