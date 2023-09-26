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
                                <h6>{{ cat.title }}</h6><span>{{ cat.number }}</span>

                            </li>
                    </ul>
                </div>
               
            </li>
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item1">
                    Brand
                    <i class="fas fa-chevron-down"></i> </div>
                    <div id="item1" class="collapse"><p>cat</p></div>
               
            </li>
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#item2">
                    Price
                    <i class="fas fa-chevron-down"></i></div>
                    <div id="item2" class="collapse"><input type="text" placeholder="Min"><div class="op">-</div><input type="text" placeholder="Max"></div>
                
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
import { useMyStore } from '../store';
export default{
computed:{
    catigries(){
        const store=useMyStore()
        const products=store.products
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
#item2{
    display: flex;
    align-items: center;
}
#item2 input{
width: 30%;
border: 1px solid rgba(128, 128, 128, 0.253);
border-radius: 3px;
margin-left: 10px;
}
#item0 ul li {
    display: flex;

}
#item0 ul li h6{
    margin-right: 10px;
}
#item0 ul li span{
    color: red;
    padding: 0px 2px;
    border: 1px solid red;
    border-radius: 100%;
}
</style>