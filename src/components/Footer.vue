<template>
    <section class="footer">
    <div class="container-fluid">

        <div class="row">
            <div class="col-12 img-c">
                
        <img src="../assets/embroidary-logo.png" alt="" class="img">
        
    <div class="divider"></div>
            </div>
            <div class=" col-md-2 col-lg-2 col-xl-2">
                <ul>
                    <li><h5>Seller Options</h5></li>
                    <li>Login as Seller</li>
                    <li>Sign up as Seller</li>
                </ul>
            </div>
            <div class=" col-md-2 col-lg-2 col-xl-2">
                <ul>
                    <li><h5>My Account</h5></li>
                    <li>login</li>
                    <li>create account</li>
                </ul>
            </div>
            <div class=" col-md-2 col-lg-2 col-xl-2">
                <ul>
                    <li><h5>Useful Links</h5></li>
                    <li>Latest News</li>
                    <li>Browse All Product</li>
                    <li>Browse All Catigoryt</li>
                    <li>Browse All Brands</li>
                    <li>Terms&Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
            <div class=" col-md-2 col-lg-2 col-xl-2">
                <ul class="list connect">
                    <li><h5>Connect us</h5></li>
                    <li><i class="fa fa-home"></i>Address</li>
                    <li><i class="fa fa-envelope"></i>Email <br/>
                        <a href="mailto:info@embroiderybyjojo.com">info@embroiderybyjojo.com</a></li>
                    <li><i class="fa fa-phone"></i>Phone<a href="tel:01234567890"> 01234567890</a></li>
                </ul>
            </div>
            <div class=" col-md-2 col-lg-2 col-xl-2 about" >
                <h5>About</h5><br/>
               <span>EmbroideryByJojo</span>  being the trusted online shop in over the world aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping from yoori. Yoori being the trusted online shop in over the world aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping from yoori.
            </div>
               
    <ul class="list8">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/catigories">All Catigories</router-link></li>
        <li><router-link to="/">All Brands</router-link></li>
        <li><router-link to="/products">All products</router-link></li>
        <li><router-link to="/">Blogs</router-link></li>
        <li><router-link to="/">Campaigns</router-link></li>
    </ul>
<div class="divider"></div>
<p>©2023 All Rights Reserved.</p>
        </div>
    </div>
 
    </section>
   

</template>
<style scoped>
.container-fluid{
    margin-left: 2rem;
}
h5{
    white-space: nowrap;
}
i{
    margin-right: 10px;
}
.footer{
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.774);
    padding: 1rem 0px;
    margin-top: 0;
}
.img{
    position: relative;
    width: 70px;
    height: 40px;
    margin-left: auto;
    margin-bottom: 1rem;
    z-index: 1;
    background-color: white;
}
.img-c{
    height: 100px;
    text-align: left;
}
ul{
    list-style: none;
    text-align: left;
}
ul li{
    font-size: 16px;
    color: white;
    transition: all .5s ease-in-out;
    cursor: pointer;
}
ul li:hover{
    color: rgb(255, 38, 0);
}
ul li i{
    color: white;
}
.about{
    color: rgb(194, 193, 193);
    text-align: left;
    overflow: hidden;
    margin-left: 4rem;
    font-size: 13px;
    margin-top: 10px;
}
.about span{
    font-size: 18px;
    font-weight: 900;
}
h5{
    font-weight: 600;
    color:white
}
.divider{
    width: 90%;
    height: 1px;
    background-color: rgba(197, 199, 201, 0.904);
}
.list{
    display: flex;
    flex-direction: column;
}

.list li{
    margin-left: 1rem;
}
.list li {
    display: flex;
}
p{
    color:  rgba(197, 199, 201, 0.904);
    text-align: left;
}
.list8{
    display: flex;
}
.list8 li a{
    font-weight: 300;
    text-decoration: none;
    color: rgba(197, 199, 201, 0.904);
}
.connect li{
    display: flex;
    flex-wrap: wrap;
}
.connect li a{
    flex: 0 0 100%;
    order:1;
    color:white
}
.col-12{
}
@media screen and (max-width:767px){
    .list li{
        margin-left: 0;
    }
    .about{
        margin-left: 2rem;
    }
}
</style>