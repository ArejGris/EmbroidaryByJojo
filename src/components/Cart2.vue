<template>
    <div class="card" @mousemove="handlehover(1)"  @mouseleave="handlehover(0)">
        <div class="card-img" >
            <div class="discount">out of stock</div>
            <Transition name="fade">
                <div id="icon" class="icons " v-if="this.show===1">
                <ul>
                    <li>
                <i class="fa-solid fa-scale-balanced"></i>
                    </li>
                    <li>
                <i class="fa-solid fa-magnifying-glass"></i>
                    </li>

                </ul>
            </div>

            </Transition>
           
            <img :src="img" :url="img" alt="">
        </div>
        <div class="card-body">
            <div class="card-title">
                <span class="old-price"></span><span class="new-price">{{ price }}</span>
                <h3> {{ productName}}</h3>
            </div>
            <div class="card-subtitle">
                <ul class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </ul>
            </div>

        </div>
           
       
    </div>
</template>
<script >
export default{
    props:{
        id:{
            type:Number,
            required:true

        },
        img:{
        type:String,
        required:true
    },
price:{
    type:String,
    required:false
},
productName:{
    type:String,
    required:false
}
},
   data(){
return{
    show:0
}
   },
    methods:{
       handlehover(value){
        
this.show=value

       }
    }
}


</script>
<style scoped>
.card{
    padding: 0;
    width: 190px;
    height: 270px;
margin-bottom: .7rem;}
    .card-body{
        position: absolute;
        top:150px;
        left:0;
        width: 100%;
        height: 50%;

    }

.card-img{
    overflow: hidden;
    height: 190px;
    position: absolute;
    padding:0px;
    top:0
}
.card-img img{
    margin-top: 10%;
}
.old-price{
    text-decoration: line-through;
    color: gray;
}
i.fa{
    color: rgba(128, 128, 128, 0.411);
}
.card-subtitle{
    margin: 1rem auto;
    text-align: center;
}
ul{
    padding: 0;
}
.card-title h3{
font-size:13px;
}
.discount{
    z-index: 1;
font-size: 13px;
background-color: red;
color:white;
border-radius: 5px;
padding: 5px 10px;
    width: 100px;
    position: absolute;
    top:7%;
    left: 3%;
}
img{
    width: 100%;
    height: 100%;
    transition: all .5s ease-in-out;
}
img:hover{
    z-index: -1;
    transform: translateY(-20px);
    height: 120%;
    width: 110%;
}
.icons{
    top:17%;
    left:60%;
    position: absolute;
    text-align: right;
    margin-left: auto;
    z-index: 999;

}
.icons.hide{
    display: none;
}

.icons ul{
    list-style: none;
}
.icons ul li{
    width:30px;
    height: 30px;
    text-align: center;
    padding: 5px;
    background: white;
    border-radius: 100%;
    margin-bottom: 3px;
}
.icons ul li{
}
h3{
    font-size: 15px;
    font-weight: 600;
}
a{
    text-decoration: none;
}
.fa{
    font-size: 10px;
    margin-right: 3px;
}
.stars{
   white-space: nowrap;
}
@media screen and (max-width:520px){
    .card{
        width:200px;
        height: 300px;
    }
    .card-img{
        height: 180px;
    }
    i.fa{
        font-size: 7px;
    }
    
}
@media screen and (max-width:425px){
    .card{
        width:180px;
        height: 290px;
    }
    
}
.fade-enter-from{
transform:translateX(100%);
}
.fade-enter-to{
    transform: translateX(0);
}
.fade-enter-active{
    transition: all .3s ease-in-out;
}
</style>