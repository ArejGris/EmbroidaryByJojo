<template>
<section>
    <div class="mainsec">
    <img :src="product.image_190x230" alt="" class="main">
    
        <div class="icon">
            
        <img :src="product.image_190x230" alt="" >

        </div>
    
        </div>
    <div class="details">
        <div class="title">

            <span>{{ product.product_name }}</span>
        <span class="price-icon"><h3>{{product.price}}</h3></span>
        </div>
        <div class="card total-price">
        <div class="price">
            <div class="counter">- 37 +</div>
            <h4>Total Price</h4>
        <span class="price-icon"><h4>{{product.price}}</h4></span>

        </div>
    </div>
    <div class="card cardbtn">
        <p>0 Days | Estimated delivery time</p>
        <div class="options">
        <button class="btn btn-dark"><i class="fa fa-suitcase"></i> ADD TO CARD</button>
        <button class="btn btn-light"><i class="fa-solid fa-cart-shopping"></i> BUY NOW</button>
        <button>compare</button>

        </div>
    </div>
    <ul class="icons">
    <li class="fs"><i class="fa-brands fa-facebook" aria-hidden="true"></i></li>
    <li class="wp"><i class="fa-brands fa-whatsapp"></i></li>
    <li class="tw"><i class="fa-brands fa-twitter"></i></li>
    <li class="ln"><i class="fa-brands fa-linkedin"></i></li>
    </ul>
    
    </div>
    <div class="recent-product">
        <h3>Recent Product</h3>
        <v-divider></v-divider>
        <ul>
            <li v-for="prod in products" :key="prod.id" class="card1">
                
                <img :src="prod.image_190x230" alt="">
                <div class="r-product">
                    <h6>{{ prod.product_name}}</h6>
                    <span>{{ prod.price }}</span>
                </div>

                
            </li>
        </ul>
    </div>
</section>

<section class="sec2">
    <h3>Related Products</h3>
    <v-divider></v-divider>
    <ul class="lista">
        <router-link v-for="product in relatedProduct" :key="product.id" :to="`/product/${product.id}`" >
        <Cart2 :img="product.image_190x230" :price="product.price" :product-name="product.product_name"/>
        </router-link>
    </ul>
    
</section>
</template>
<script>
import { useMyStore } from '../store';
import Cart from './Cart.vue';
import Cart2 from './Cart2.vue'
export default{
    components:{
Cart,Cart2
    },
    props:[
        'id'
    ],
    mounted(){

    },
    computed:{
        products(){
            
            const store=useMyStore()
            const products=store.latest_products
            return products

        },
        product(){
            const store=useMyStore()
            const products=store.products
            const p=products.find(prod=>
            prod.id==this.id)
            return p
        },
        relatedProduct(){
            const store=useMyStore()
            const products=store.products
            const catigory_id=this.product.category_id
          
            const relatedProduct=products.filter(prod=> prod.category_id===catigory_id)
            return relatedProduct
        }
    }
}
</script>
<style scoped>
.title{
    margin-left: 19px;
}
section{
    display: flex;
    padding: 2rem;
}
@media screen and (max-width:820px) {
    section{
        display: block;
        padding: 0;
    }
}
.details{
}
.title{
    display: flex;
}
.title h3{
    font-size: 24px;
    margin-left: 10px;
}
.title span{
    font-size: 24px;;
    font-weight: 600;
}
.mainsec{
    margin: 1rem ;
    margin-bottom: 2rem;
 
}
.main{
    align-self: self-end;
   width: 400px;
    height: 400px;
    padding-bottom: 1rem;
}
.icon{
    width: 100%;
    text-align: left;
    margin-left: 1rem;
}
.icon img{

    width: 69px;
    height: 128px;
}
.price{
    display: flex;
}
.price-icon{
display: inline;
    color: red;
}
.options{
    display: flex;
}
details .card{
    margin-top: 1rem;
    padding: 1rem 2rem;
}
.card h4{
    font-size: 19px;
}
.counter{
    border: 1px solid black;
    border-radius: 10px;
    margin-right: 10px ;
    padding: 5px 10px;
}
ul.icons{
    margin-top: 1rem;
    list-style: none;
    display: flex;
    flex-direction: row;

}
ul.icons li{
    margin-left: 1rem;
    cursor: pointer;
    color: white;
    background-color: rgba(128, 128, 128, 0.301);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transition: all .1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}
.fs i{
    color: rgb(29, 29, 172);
}
.fs:hover{
    color: white;
    background-color: rgb(29, 29, 172);
}
li:hover i{
    color:white
}
.wp i{
    color: rgb(16, 230, 16);
}
.wp:hover{
    color: white;
    background-color: rgb(16, 230, 16);
}
.tw i{
    color: rgb(0, 225, 255);
}
.tw:hover{
    color: white;
    background-color: rgb(0, 225, 255);
}
.ln i{
    color:rgb(30, 30, 240)
}
.ln:hover{
    color:white;
background-color: rgb(30, 30, 240);
}
.r-product{
    
}
.recent-product ul{
    list-style: none;
    
}
.recent-product ul li{
   width: 300px;
    padding:5px  10px;
    border: 1px solid rgb(187, 186, 186);
    border-radius: 10px ;
    margin-bottom: 1rem;
    
    display: flex;
}

.recent-product ul li img{
    width: 60px;
    height: 60px;
}
.lista{
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    gap:14px
}

.lista .card h3{
    font-size: 16px;
}
.lista .card .card-subtitle i.fa{
    font-size: 5px;
}
.fa{
    font-size: 9px;
}
.sec2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
a{
    text-decoration: none;
}
@media screen and (max-width:540px) {
  .options .btn{
    font-size: 7px;
    margin-left: 3px;
    }
    
}
</style>