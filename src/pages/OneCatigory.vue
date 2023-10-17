<template>
<h4>{{catigory.title}}</h4>
<v-divider></v-divider>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-lg-3">
           <SideList/>

        </div>
        <div class="col-md-8 col-lg-9">
            <img src="../assets/img.jpg" alt="" class="img">
            
<v-spacer></v-spacer>
        
         </div>
   
       
            <div class="col-md-4 col-lg-3"></div>

        <div class="col-md-8 col-lg-9">
            <div class="cc">
                <div class="icons">
                    <div class="iconleft">
                        <h3>Sort By</h3>
                           <form class="form-group">
                               <select class="form-control">
                           <option value="12">Show by 12</option>
                            <option value="16">Show by 16</option>
                             <option value="20">Show by 20</option>
                              <option value="24">Show by 24</option>
                           </select>
                        </form>
                    </div>
                    <div class="iconright">
                        <form action="#"> 
                            <select class="form-control" v-model="sort" >
                               <option value="1">Newest</option>
                               <option value="2">Oldest</option>
                               <option value="20">Top Selled</option>
                               <option value="24">Top rated</option>
                           </select>
                       </form>
                           <div class="form-group"><span class="mdi mdi-name mdi-grid"  @click="showlist=false"></span></div>
                         <div class="form-group"><span class="mdi mdi-name mdi-format-list-bulleted" @click="showlist=true"></span></div>

                    </div>
                
               
            </div>
            </div>
            <ul v-if="showlist" class=" list">
                   <li v-for="p in products" :key="p.id">
                    
                        <Cart4 :img="p.image_190x230" :title="p.product_name" :price="p.price"/>
                    
                  </li>
                </ul>
                    <div class="cardgrid" v-else>
                    <div  v-for="p in products" :key="p.id">
                    <Cart2 :img="p.image_190x230" :price="p.price" :product-name="p.product_name"/>
                    </div>
                    </div>
        </div>
       </div>
    
</div>
</template>
<script >
import { useMyStore2 } from '../store2';
import Cart2 from '../components/Cart2.vue';
import Cart4 from '../components/Cart4.vue';
import SideList from '../components/SideList.vue';
export default{
    props:['id'],
    components:{
    Cart2,SideList,Cart4
},
data(){
return{
    sort:1,
    showlist:true,
    products:[]
}
},

    computed:{
        catigory(){
            const store=useMyStore2()
const catigories=store.categories
const catigory=catigories.find(c=>c.id===Number(this.id))
            return catigory
        }
    },
methods:{
        computeproducts(sort){
            
            const store=useMyStore2()
            
            const products=store.allproducts.filter(p=> Number(p.category_id)===Number(this.id))
            var p
            if(sort==1){
            p=products.sort((a,b)=>{return (Number(a.id) - Number(b.id))})}
            
            if(sort==2){
            p=products.sort((a,b)=>{return (Number(b.id)- Number(a.id))})}
         this.products=p

        }
    },
    mounted(){
this.computeproducts(this.sort)
    },
    watch:{
        sort(newvl){
            this.computeproducts(newvl)
            
        }
    }
      
}

</script>
<style scoped>
.icons{
    padding:0px 1rem;
}
.img{
    width:100%;
    height: 400px
}
.card{
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
.iconleft,.iconright{
    display: flex;
}
.iconright div{
margin-left: 10px;
}
.iconright span{
    font-size: 26px;
}
.cc{
    margin-top: 2rem;
    height: 59px;
}
@media screen and (max-width:520px){
    .icons .dropdown .btn{
        font-size: 10px;
    }
    .icons{
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
margin-right: 1rem;
width: 100%;
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
@media screen and (max-width:500px){
    ul{
        padding-left: 0px;
    }
    
}
</style>
