<template>
    <section>
        <div class="row d-flex align-items-top">
            <div class="col-md-4 col-lg-3 filter-area">
               
                <SideList/>
            
            </div>
            <div class="col-md-8 col-lg-9">
                  
        <div class="products">
           
           <ul class="list-icon">
           
                   <li id="sort"> 
                    <h3>Sort By</h3>
                    <form action=""> 
                           <div class="form-group">
                            <select class="form-control" v-model="sort">
                               <option value="1">Newest</option>
                               <option value="2">Oldest</option>
                               <option value="20">Top Selled</option>
                               <option value="24">Top rated</option>
                           </select>

                           </div>
                       </form>
                    </li>
                   <li id="fromicon">
                       <form action="" id="form">
                           <div class="form-group">
                               <select class="form-control">
                           <option value="12">Show by 12</option>
                            <option value="16">Show by 16</option>
                             <option value="20">Show by 20</option>
                              <option value="24">Show by 24</option>
                           </select>

                           </div>
                           <div class="form-group"><span class="mdi mdi-name mdi-grid"  @click="showlist=false"></span></div>
                         <div class="form-group"><span class="mdi mdi-name mdi-format-list-bulleted red" @click="showlist=true"></span></div>
                        </form>
                      
                   </li>
                   
           </ul>
          
           <div class="list-product">
               <ul v-if="showlist" class="row list">
                  <li v-for="p in products" :key="p.id">
                    <router-link :to="`/product/${p.id}`">
                        
                   <Cart4 :img="p.image_190x230" :title="p.product_name" :price="p.price" />
                    </router-link>
                    
                  </li>
               </ul>
                   <div class="cardgrid" v-else>
                   <div  v-for="p in products" :key="p.id">
                    <router-link :to="`/product/${p.id}`">
                   <Cart2 :img="p.image_190x230" :price="p.price" :product-name="p.product_name"/>
                    </router-link>
                   </div>
                   </div>
                   <button class="btn btn-dark btn-show" @click="showmore">show more</button>
           </div>
       </div>

            </div>
        </div>

     
    </section>
    
</template>
<style scoped>
a{
    text-decoration: none;
}
section{
    padding: 1rem;
}
ul{
    list-style: none;
}
.list-icon{

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
}
.red{
    color:red
}
#form{
    display: flex;
}
#form .form-group{
    margin-left: 10px;
}
.form-group .mdi{
    font-size: 19px;
}
.products .list-icon{
    margin-top: 1rem;
    width: 100%;
    padding: 0px 1rem;;
}
.list-icon ul{
    display: flex;
    justify-content: space-between;
}
.list-icon ul li {
    cursor: pointer;
}
 #sort{
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:10px
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
}
.card1{
display: flex;
}
.card1 img{
    width: 100px;
    height: 40px;
}
.cardgrid{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1px;
    overflow: hidden;

}
.btn-show{
    text-transform: uppercase;
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
    #formicon{
        flex:0 100%;
        order:1;
    }
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
  
}
.products .list-icon h3{
font-size: 17px;
}

}
@media screen and (min-width:530px) {
    .list-icon li{
  
    
}

}


</style>
<script >
import { useMyStore2 } from '../store2';
import Cart2 from '../components/Cart2.vue';
import Cart4 from '../components/Cart4.vue';
import SideList from '../components/SideList.vue';
export default{
    props:['id'],
    components:{
   SideList,Cart2,Cart4
},
data(){
return{
    showlist:true,
  sort:1,
  products:[]
}
},
    computed:{
        catigory(){
            const store=useMyStore2()
const catigories=store.categories
const catigory=catigories.find(c=>c.id===Number(this.id))
            return catigory
        },
     
    },
    methods:{
        computeproducts(sort){
            
            const store=useMyStore2()
            
            const products=store.allproducts
            var p
            if(sort==1){
            p=products.sort((a,b)=>{return (Number(a.id) - Number(b.id))})}
            
            if(sort==2){
            p=products.sort((a,b)=>{return (Number(b.id)- Number(a.id))})}
         this.products=p

        },
        showmore(){
            const store=useMyStore2()
            this.products=this.products.concat(store.moreproducts)
           /*  var alllp=[]
            const unique=addedP.filter(p=>{
                if(!alllp.some(p)){
                    alllp.push(p)
                    return true
                } else{
                return false}
             })
this.products=unique */
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