<template>
<div class="card d-flex">

<div class="card-body ">
    <div class="img">
<span>out of stock</span>
        <img :src="img" alt="" >
    </div>
<ul class="content">
    <li>${{ price }}</li>
    <li>{{ title }}</li>
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
    height: 139px;
    padding: 0;
}
.card-body{
    height: 100%;
    display: flex;
}
.img{
    position: relative;
    width: 130px;
}
.img span{
    position: absolute;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: red;
    color:white;
    top:0;
    left:10px;
    font-size: 13px;

}
.img img{
    height:150px;
    width: 130px;
}
.icons{
    list-style: none;
    display: flex;
    padding-left: 0px;
}
.icons i{
    margin-right: 1rem;
}
.content{
    list-style: none;
    height: 139px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    width: 50%;
}
.content li{
    padding:1px ;
}
.content li i.fa{
    font-size: 13px;
    color: gray;
}
</style>