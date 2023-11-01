<template>
    <div class="container">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item0">
                    All Categories
                    <i class="fas fa-chevron-down"></i> </div>
                    <div id="item0" class="collapse">
                        <ul>
                            <li v-for="cat in catigries" :key="cat.id">
                                <router-link :to="`/catigories/${cat.id}`">
                                
                                    <h6>{{ cat.title }}</h6><span>{{ cat.number }}</span>
                                </router-link>

                            </li>
                    </ul>
                </div>
               
            </li>
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item5">
                    Brand
                    <i class="fas fa-chevron-down"></i></div>
                    <div id="item5" class="collapse"><p>cat</p></div>
                
            </li>
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item1">
                    Price
                    <i class="fas fa-chevron-down"></i> </div>
                    <div id="item1" class="collapse ">
                        <div class="input1">
                            <input type="text" placeholder="Min"><div class="op">-</div><input type="text" placeholder="Max">
                    
                    <div class="range-slider"><input type="range" min="0" max="999" step="1" id="min_range"> <input type="range" min="100" max="999" step="1" id="max_range"></div>
   

                        </div>
                       
                    </div>
               
            </li>
           
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item3">
                    Color
                    <i class="fas fa-chevron-down"></i></div>
                    <div id="item3" class="collapse"><p>cat</p></div>
                
            </li>
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item4">
                    Rating
                    <i class="fas fa-chevron-down"></i> </div>
                    <div id="item4" class="collapse">
                       <ul class="rate">
                            <label><input type="checkbox"><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div></label>
                            <label ><input type="checkbox"><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div></label>
                            <label ><input type="checkbox"><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div></label>
                            <label ><input type="checkbox"><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div></label>
                            <label ><input type="checkbox"><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div></label>

                       </ul>
                            

                    </div>
               
            </li>
        </ul>
    </div>
</template>
<script>
import { useMyStore2 } from '../store2';
export default{
computed:{
    catigries(){
        const store=useMyStore2()
        const products=store.allproducts
        const cats=store.categories
        const catnumber=cats.map(cat=>{
            var count=0
            products.forEach(prod=>{
                if(prod.category_id===cat.id)
                count++
            })
           
            return {...cat,number:count}
        })
        return catnumber.filter(cat=>cat.number!==0)
    }
}
}
</script>
<style scoped>
ul{
    list-style: none;
    align-items: left;
}
a{
    color:black;
    text-decoration: none;
    font-size: 12px;
}
input[type="text"]{
    background-color: white;
    color:black
}
a{
    text-decoration: none;
}
h6+span{
    margin-left: 10px;
    margin-top: 5px;
}
.list-group li{
    font-weight: 600;
}
.list-group li.list-group-item{
    padding: 1rem;
}
.rate{
    display: flex;
    flex-direction: column;
}
.rate label{
    display: flex;
}
.rate label .stars i{
    margin-left: .5rem;
    color: rgb(255, 196, 0);
}
.input1{
    display: flex;
    align-items: center;
}
.input1 input{
width: 30%;
border: 1px solid rgba(128, 128, 128, 0.253);
border-radius: 3px;
margin-left: 10px;
}
#item0 ul li a{
    display: flex;

}
#item0 ul li h6{
    margin-right: 10px;
}
#item0 ul li span{
    color: red;
    padding: 0px 10px;
    background-color: rgba(255, 0, 0, 0.192);
    border-radius:13px;
}
.rang-slider{
    position: relative;
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 10px;
}
.rang-slider input{
    position: absolute;
    background-color: pink;
    left: 0;
    bottom: 0;
}
input[type=range] {
    position: absolute;
  
    left: 0;
    bottom: 10px;
    -webkit-appearance: none;
    width: 100%;
    background: pink;
    height: 3px;
}
input[type=range]::-webkit-slider-runnable-track{

}
</style>