<template>
    <div class="card" @mouseover="showicon" @mouseleave="hideicons">
        <div class="card-img" >
            <div class="discount">out of stock</div>
            <div :id="id" class="icon " v-if="this.show===1">
                <ul>
                    <li>
                <i class="fa-solid fa-scale-balanced"></i>
                    </li>
                    <li>
                <i class="fa-solid fa-magnifying-glass"></i>
                    </li>

                </ul>
            </div>
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
    show:0
}
   },
    methods:{
       showicon(){
        this.show=1
       },
       hideicons(){
        this.show=0
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
    width: 200px;
    overflow: hidden;
    height: 370px;
    margin-bottom: 1rem;
}
.card-img{
    height: 250px;
    position: absolute;
    padding:0px;
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
        width: 170px;
        height: 250px;
    }
    .card-img{
        height: 140px;
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
    margin: 1rem auto;
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
.icon{
    top:30%;
    left:60%;
    position: absolute;
    text-align: right;
    margin-left: auto;
    z-index: 999;

}
.icon.hide{
    display: none;
}

.icon ul{
    list-style: none;
}
.icon ul li{
    width:40px;
    height: 40px;
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
        width:210px;
        height:350px
    }
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
@media screen and (max-width:370px){
    .card{
        width:160px;
        height: 290px;
    }
    
}
@media screen and (max-width:325px){
    .card{
        width:140px;
        height: 290px;
    }
    
}
</style>