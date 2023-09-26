<template>
    <section>
        <div class="row d-flex align-items-top">
            <div class="col-md-4 col-lg-3">
               
                <SideList/>
            
            </div>
            <div class="col-md-8 col-lg-9">
                  
        <div class="products">
           
           <ul class="list-icon">
           
                   <li>   <h3>Sort By</h3></li>
                   <li>
                       <form action="">
                           <div class="form-group">
                               <select class="form-control">
                           <option value="12">Show by 12</option>
                            <option value="16">Show by 16</option>
                             <option value="20">Show by 20</option>
                              <option value="24">Show by 24</option>
                           </select>

                           </div>
                       </form>
                      
                   </li>
                   <li>
                       

                   </li>
                   <li @click="showlist=false"><span class="mdi mdi-name mdi-grid"></span></li>
                   <li @click="showlist=true"><span class="mdi mdi-name mdi-format-list-bulleted"></span></li>
                   
           </ul>
          
           <div class="list-product">
               <ul v-if="showlist" class="row list">
                  <li v-for="p in products" :key="p.id">
                   <div class="card1">
                       <img :src="p.image_190x230" alt="" class="img"><h6>{{ p.product_name }}</h6>
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
        </div>

     
    </section>
    
</template>
<style scoped>
section{
    padding: 1rem;
}
ul{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.products .list-icon{
    margin-top: 1rem;
    width: 100vw;
    padding: 0px 1rem;;
}
.list-icon ul{
    display: flex;
    justify-content: space-between;
}
.list-icon ul li i{
    margin-left: 10px;
}
.top{

}
.img{
    width:60%;
    height: 300px;
}

.list-group{
    width:40%
}
.icons{
    display: flex;
}
.list{
list-style:none;
margin-left: 40%;
}
.card1{
display: flex;
}
.card1 img{
    width: 100px;
    height: 40px;
}
.cardgrid{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto;
    grid-template-columns: repeat(4,1fr);
    gap: 1px;

}
@media screen and (max-width: 920px) {
    
    .btn{
        font-size: 17px;
    }
  .cardgrid{
    
    grid-template-columns: repeat(3,1fr);
  }  
}
@media screen and (max-width: 530px) {
    .list-icon li h3{
        font-size: 19px;
        white-space: nowrap;
        margin-right: -20px;
    }
    .btn{
        font-size: 10px;
        margin-right: -10px;
    }
  .cardgrid{
    
    grid-template-columns: repeat(2,.4fr);
  }  
}
.top{
    display: flex;
    width: 100%;
    overflow: hidden;
}
.products{
    display: flex;
    flex-direction: column;
    position: relative;
}
.products .list-icon{
    display: flex;
    margin-right: 10px;
}
.products ul{
    padding-left: 0;
}
@media screen and (min-width:720px ){
    .list-icon{
        margin-right: auto;
    }
    .products .list-icon li{
  
    margin-left: 20px;
}
.products .list-icon h3{
font-size: 17px;
}

}
@media screen and (min-width:530px) {
    .list-icon li{
  
    margin-left: 10px;
    
}

}


</style>
<script >
import { useMyStore } from '../store';
import Cart from '../components/Cart.vue';
import Cart2 from '../components/Cart2.vue'
import SideList from '../components/SideList.vue';
export default{
    props:['id'],
    components:{
    Cart,SideList,Cart2
},
data(){
return{
    showlist:true,
  sort:1
}
},
methods:{
    fun(){
        console.log("hhhh")
        this.sort=2
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
            var p
            if(this.sort===1){
            p=products.sort((a,b)=>{return (a.id>b.id)})}
            
            if(this.sort===2){
            p=products.sort((a,b)=>{return (a.id<b.id)})}
            return products

        }
    }
      
}

</script>