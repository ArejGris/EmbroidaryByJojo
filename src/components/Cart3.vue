<template>
    <div class="card" @mouseover="showicon" @mouseleave="hideicons">
        <Transition name="fade">
                <div :id="id" class="icon" v-if="show">
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
        <div class="card-img" >
            <div class="discount">out of stock</div>
         
           <div class="img">
            <img :src="img" :url="img" alt=""></div>
        </div>
        <div class="card-body">
            <div class="card-title">
                <span class="old-price"></span><span class="new-price">${{ price }}</span>
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
<script>

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
    show:false
}
   },
    methods:{
       showicon(){
        this.show=true
       },
       hideicons(){
        this.show=false
       }
    }
}
</script>
<style scoped>
 ul {
    padding-left: 0;
}
.card{
    padding: 0;
    overflow: hidden;
    height: 350px;
    border: 1px solid rgba(128, 128, 128, 0.1189);
}
.card-img{
    margin-left: auto;
    margin-right: auto;
        height: 200px;
        overflow: hidden;
    position: absolute;
    padding:0px;
}
.card-img .img{
}
.card-body{
    width: 100%;
    margin-top: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
@media screen and(max-width:760px) {
    .card{
        height: 250px;
    }
    .card-img{
       
        overflow: hidden;
       text-align: center;
       display: flex;
       align-items: center;
    }

}
.card-subtitle{
    text-align: center;
}
.old-price{
    text-decoration: line-through;
    color: gray;
}
i.fa{
    color: rgba(128, 128, 128, 0.411);
}
.card-subtitle{
    width: 60%;
    margin: .2rem auto;
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
.img{
    height: 240px;
    width:100%;
    text-align: center;
    margin-left: auto;
       margin-right: auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
}
img{
    height: 100%;
    width: 100%;
 transition: all .5s ease-in-out;
}
img:hover{
    height: 120%;
    width: 110%;
}
.icon{
    top:17%;
    right: 7%;
    position: absolute;
    text-align: right;
    margin-left: auto;
    z-index: 999;

}
.icon.hide{
    display: none;
}
.card-body{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    top: 10px;
}
.icon ul{
    list-style: none;
}
.icon ul li{
    width:30px;
    height: 30px;
    text-align: center;
    padding: 5px;
    background: white;
    border-radius: 100%;
    margin-bottom: 3px;
}
.icon ul li{
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
@media screen and (max-width:790px) {
    .card{
        height:350px
    }
}
@media screen and (max-width:520px){
    .card{
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
        height: 290px;
    }
    
}
@media screen and (max-width:370px){
    .card{
        height: 290px;
    }
    
}
@media screen and (max-width:325px){
    .card{
        height: 290px;
    }
    
}
.fade-enter-from{
    
    transform: translateX(100%);
    opacity: 0;
}
.fade-enter-active{
    transition: all .5s ease-in-out;
}
.fade-enter-to{
    transform: translateX(0);
    opacity: 1;
}
</style>