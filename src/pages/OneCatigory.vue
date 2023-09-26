<template>
<h4>{{catigory.title}}</h4>
<v-divider></v-divider>
<div class="container-fluid">
    <div class="row">
        <div class="col-4">
           <SideList/>

        </div>
        <div class="col-8">
            <img src="../assets/img.jpg" alt="" class="img">
            
<v-spacer></v-spacer>
        
         </div>
    </div>
       <div class="row d-flex flex-column justify-content-center align-items-center">
        <div class="col-12 cc">
             <div class=" iconsec " >
                <div class="icons">
                <h3>Sort By</h3>
                <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Show by 24
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Show by 12</a>
    <a class="dropdown-item" href="#">Show by 16</a>
    <a class="dropdown-item" href="#">Show by 20</a>
    <a class="dropdown-item" href="#">Show by 24</a>
  </div>
</div>
<div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Newest
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Oldest</a>
    <a class="dropdown-item" href="#">Top rated</a>
    <a class="dropdown-item" href="#">Top selling</a>
  </div>
</div>
               <div>
                <i class="fa fa-square" @click="showlist=false"></i></div>
                <div>
                <i class="fa fa-bars" @click="showlist=true"></i></div>
            </div>
               
                </div>
            </div>
        <div class="col-11">
            
            <ul v-if="showlist" class="row list">
                   <li v-for="p in products" :key="p.id">
                    <div class="card1">
                        <img :src="p.image_190x230" alt="" class="img"><h3>{{ p.product_name }}</h3>
                    </div>
                   </li>
                </ul>
                    <div class="cardgrid" v-else>
                    <div  v-for="p in products" :key="p.id">
                    <Cart :img="p.image_190x230" :price="p.price" :product-name="p.product_name"/>
                    </div>
                    </div>
        </div>
       </div>
    
</div>
</template>
<script >
import { useMyStore } from '../store';
import Cart from '../components/Cart.vue';
import SideList from '../components/SideList.vue';
export default{
    props:['id'],
    components:{
    Cart,SideList
},
data(){
return{
    showlist:true
}
},
    computed:{
        catigory(){
            const store=useMyStore()
const catigories=store.categories
const catigory=catigories.find(c=>c.id===Number(this.id))
            return catigory
        },
        products(){
            const store=useMyStore()
            
            const products=store.products
            const cproducts=products.filter(p=>Number(p.category_id)===Number(this.id))
            return cproducts

        }
    }
      
}

</script>
<style scoped>
.iconsec{
    padding:0px 1rem;
}
.img{
    width:100%;
    height: 400px
}
.card{
    height: 300px;
    width: 200px;
}
.card-img{
    height:150px;
}
.card-title h3{
font-size: 13px;
}
.card-subtitle{
    margin: 0;
}
.icons{
    display: flex;
    justify-content: space-around;
    
}
.icons div{
    cursor: pointer;
}
.cc{
    margin-top: 2rem;
    height: 59px;
}
@media screen and (max-width:520px){
    .icons .dropdown .btn{
        font-size: 10px;
    }
    .iconsec{
        margin-right: 17px;
        margin-top: 10px;
    }
    .icons h3{
        white-space: nowrap;
        font-size: 13px;
    }
    .icons *{
        margin-right: 10px;
    }
}
.list{
list-style:none;
margin-left: auto;
}
.card1{
display: flex;
align-items: center;
}
.card1 h3{
    font-size: 16px;
}
.card1 img{
    width: 100px;
    height: 40px;
    margin-right: 1rem;
}
.cardgrid{
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;

}
</style>
