<template>
<div class="card ">

<div class="card-body ">
    
    <div class="img">
        
<span>out of stock</span>
        <img :src="img" alt="" >
    </div>
<ul class="content">
    <li>${{ price }}</li>
    <li class="title">{{ title }}</li>
    <li><i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </li>
    <li>
        <ul class="icons">
            <li><i class="fa-solid fa-scale-balanced"></i></li>
            <li> <i class="fa-solid fa-magnifying-glass"></i></li>
        </ul>
       
    </li>
</ul>
   

</div>
</div>
</template>
<script>
export default{
props:['img','title','price']

}
</script>
<style scoped>
.card{
    height:180px;
    padding: 0;
    border: .1px solid #80808018;
}
.card-body{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items:center;
    padding: 0;
    overflow: hidden;
    font-family: 'Poppins';
}

.img{
    height: 100%;
    max-width: 90%;
    position: relative;
    vertical-align: middle;
}

.img span{
    position: absolute;
    padding: 3px 7px;
    border-radius: 3px;
    background-color: red;
    color:white;
    top:7px;
    left:20px;
    font-size: 10px;
    text-transform: uppercase;

}
.img img{
    width: 100%;
    height: 100%;
    transition: all .5s ease-in-out;
}
.img img:hover{
transform: scale(1.1);
}
.icons{
    list-style: none;
    display: flex;
    padding-left: 0px;
    margin-top: 20px;
}
.icons i{
    margin-right: 1rem;
}
.content{
    list-style: none;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    width: 50%;
    font-size: 15px;
}
.content li{
    padding:1px ;
}
.content li i.fa{
    font-size: 11px;
    color: rgba(128, 128, 128, 0.233);
}
.title{
    white-space: nowrap;
}
.content li{
    white-space: nowrap;
}
@media  screen and (max-width:340px) {
    .img{
    }
   
   
    .content li i.fa{
        font-size: 6px;
    }

}
@media screen and (max-width:470px){
   .card-body{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    
   } 
   .card{
    padding: 10px;
    height: auto;
   }
   .img{
    width: 50%;
    margin-left: 2rem;
   }
   .img span{
    font-size: 12px;
    top:10%;
   }
}
</style>