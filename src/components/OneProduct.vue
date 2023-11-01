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
        <span class="price-icon"><h3>${{product.price}}</h3></span>
        </div>
        <div class="card total-price">
        <div class="price">
            <div class="counter">- 37 +</div>
            <h4>Total Price</h4>
        <span class="price-icon"><h4>${{product.price}}</h4></span>

        </div>
    </div>
    <div class="card cardbtn">
        <p>0 Days | Estimated delivery time</p>
        <div class="options">
        <button class="btn btn-dark"><i class="fa fa-suitcase"></i> ADD TO CARD</button>
        <button class="btn btn-light"><i class="fa-solid fa-cart-shopping"></i> BUY NOW</button>
        <button class="btn btn-light2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40.095 37.193">
                <path id="iconmonstr-random-thin" d="M34.328,5.7,29.853,2.2,30.906,1,38,6.563l-7.087,5.573-1.053-1.2,4.66-3.646H27.927c-5.619.068-8.241,5.417-10.951,11.173,2.71,5.754,5.332,11.1,10.951,11.171H34.42l-4.567-3.575,1.053-1.2L38,30.427,30.913,36l-1.053-1.2,4.569-3.575H27.917c-6.172-.076-9.163-5.36-11.819-10.91C13.425,25.9,10.408,31.2,4.155,31.227H0V29.636H4.152c5.7-.022,8.345-5.388,11.07-11.171C12.5,12.68,9.855,7.314,4.152,7.292H0V5.7H4.155c6.253.025,9.27,5.326,11.943,10.91C18.754,11.061,21.745,5.778,27.917,5.7h6.411Z" ></path></svg>Remove</button>

        </div>
    </div>
    <ul class="icons">
    <li class="fs"><i class="fa-brands fa-facebook" aria-hidden="true"></i></li>
    <li class="wp"><i class="fa-brands fa-whatsapp"></i></li>
    <li class="tw"><i class="fa-brands fa-twitter"></i></li>
    <li class="ln"><i class="fa-brands fa-linkedin"></i></li>
    </ul>
    
    </div>
    <div class="recent-product" >
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
<section>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-9">
        <div class="card">
            
        <ul role="tablist" class="nav nav-tabs description-tabs">
            <a href="javascript:void(0)" aria-controls="details" role="tab" data-bs-toggle="tab" @click="this.page=false" class="nav-link" aria-selected="false" tabindex="-1">
								Details
							</a>
                            <a href="javascript:void(0)" aria-controls="review" role="tab" @click="this.page=true" data-bs-toggle="tab" class="nav-link" aria-selected="false" tabindex="-1">
								Review
							</a>
                           
        </ul>
        <div class="tab-content">
            <div role="tabpanel" id="details" class="tab-pane fade" v-if="!page">
             <div>

                </div>
            </div> 
            <div role="tabpanel" id="review" class="tab-pane fade show active" v-else>
                <div class="count">
                    <div class="percentage">
                        <span >0</span>
                        <p>Out of 0</p>
                    </div>
                    <ul class="stars">
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                      <span>(0 Reviews)</span>
                      <ul class="star-counter">
                        <li><span>1 star</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>0%</span>
                        </li>
                        <li><span>2 star</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>0%</span>
                        </li>
                        <li><span>3 star</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>0%</span>
                        </li>
                        <li><span>4 star</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>0%</span>
                        </li>
                        <li><span>5 star</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>0%</span>
                        </li>
                      </ul>


                </div>
                
                <h1>Customer Reviews</h1>
                      <h1>0 Comments</h1>
                                   
            </div>
        </div>


        </div>



    </div>

        </div>
    </div>
  
</section>
<section class="sec2">
    <h3>Related Products</h3>
    <v-divider></v-divider>
    <ul class="lista">
        <router-link v-for="product in relatedProduct2" :key="product.id" :to="`/product/${product.id}`" >
        <Cart2 :img="product.image_190x230" :price="product.price" :product-name="product.product_name"/>
        </router-link>
    </ul>
    
</section>
</template>
<script>
import { useMyStore2 } from '../store2';
import { useRoute } from 'vue-router';
import Cart2 from './Cart2.vue'
export default{
    components:{
Cart2
    },
    props:[
        'id'
    ],
    data(){
        return{
            page:false
        }
    },
    mounted(){

    },
    computed:{
        products(){
            
            const store=useMyStore2()
            const products=store.latest_products
            return products

        },
        product(){
            const store=useMyStore2()
            let products=store.allproducts
            let p=products.find(prod=>
            prod.id==this.id)
            if(!p){
                products=store.related_products
             p=products.find(prod=>
            prod.id==this.id)

            }
            return p
        },
        relatedProduct(){
            const store=useMyStore2()
            const products=store.allproducts
            const catigory_id=this.product.category_id
          
            const relatedProduct=products.filter(prod=> prod.category_id===catigory_id)
            return relatedProduct
        }
        ,
        relatedProduct2(){
            const store=useMyStore2()
            return store.related_products
        }
    }
}
</script>
<style scoped>
ul{
    list-style: none;
}
.card{
    border:1px solid rgba(128, 128, 128, 0.116);
    margin-bottom: 1rem;
}
.card1{
    
    border:1px solid rgba(128, 128, 128, 0.295);
    border-radius: 3px;
}
.count{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 1rem;
    padding-top: 10px;
    background-color: rgba(128, 128, 128, 0.205);
}
.tab-pane h1{
    margin-left: 10px;
    width: 90%;
    text-align: left;
    font-size: 23px;
    font-weight: 900;
}
ul.stars{
    display: flex;
}
ul.stars li i{
color: rgba(128, 128, 128, 0.555);
}
.percentage{
    text-align: center;
    width: 100px;
    height: 100px;
    padding: 3rem;
    border-radius: 100%;
    border:5px solid  rgb(255, 196, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
   justify-content: center;
}
.percentage p{
    text-align: center;
   padding: 0;
    white-space: nowrap;
}
.star-counter{
    padding-left: 0;
}
.star-counter li{
    display: flex;
    width: 100%;
}
.progress{
    flex:1;
    width: 200px;
    margin: 0px 10px;
    background-color: white;
}
.title{
    margin-left: 19px;
}
section{
    display: flex;
    padding: 2rem;
}

.details{
}
.title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
   width: fit-content;
    text-align: left;
    margin-left: 1rem;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 10px;
    height: fit-content;
    padding: 0px 10px;
}
.icon img{
    width: 69px;
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
    justify-content: flex-start;
}
.options *{
   margin: 10px;
}
.btn{
    font-size: 13px;
    padding: 3px 5px;
    text-transform: uppercase;
}
.btn-light{
    background-color: white;
    border: 1px solid black;
}
.btn-light:hover{
    background-color: black;
    color: white;
}
.btn-light2:hover{
    color: red;
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
    transition: all .4s ease-in-out;
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
    
    transition: all .4s ease-in-out;
}
.wp:hover{
    color: white;
    background-color: rgb(16, 230, 16);
}
.tw i{
    color: rgb(0, 225, 255);
    
    transition: all .4s ease-in-out;
}
.tw:hover{
    color: white;
    background-color: rgb(0, 225, 255);
}
.ln i{
    color:rgb(30, 30, 240);
    
    transition: all .4s ease-in-out;
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
    border: 1px solid rgba(187, 186, 186, 0.384);
    border-radius: 3px ;
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
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4,1fr);
    gap:14px;
}
.lista a{
    display: flex;
    justify-content: center;
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
.options .btn{
 
}
@media screen and (max-width:990px){
    .lista{
        
        grid-template-columns: repeat(3,1fr);
        }
}
@media screen and (max-width:765px) {
  .recent-product{
    display: none;
  }
  section{
        display: block;
        padding: 0;
    }
    .lista{
        
    grid-template-columns: repeat(2,1fr);
    }
    
}
@media screen and (max-width:540px) {
  .options .btn{
    font-size: 13px;
    margin-left: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .progress{
        width: 150px;
    }
    
}
@media screen and (max-width:500px) {
  .count{
    padding: 0;
    margin:1rem 0 0 0;
  }
    .progress{
        width: 130px;
    }
    .tab-pane h1{
        font-size: 15px;
    }
}
@media screen and (max-width:400px){
    
    .lista{
        
        grid-template-columns: repeat(1,1fr);
        }
        .progress{
            width: 100px;
        }
}
</style>