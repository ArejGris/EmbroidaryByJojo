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
import BeSeller from './pages/BeSeller.vue'
import Blog from './pages/Blog.vue'
import compare from './pages/compare.vue'
import seller from './pages/seller.vue'
import AboutUs from './pages/AboutUs.vue'
import Brand from './pages/Brand.vue'
import privacy from './pages/privacy.vue'
import refund from './pages/refund.vue'
import term from './pages/term.vue'
import cartpage from './pages/cartpage.vue'
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
     },
     {
        path:'/be-seller',component:BeSeller
     },
     {
      path:'/blog',component:Blog
   }
   ,
   {
    path:'/compare',component:compare
 },
 {
   path:'/seller',component:seller
},
{
   path:'/aboutus',component:AboutUs
},
{
   path:'/brand',component:Brand
},
{
   path:'/privacy',component:privacy
},
{
   path:'/refund',component:refund
},
{
   path:'/term',component:term
}
,
{
   path:'/cart',component:cartpage
}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router