<template>
    <section class="sec">
        <img src="../assets/default-image-320x520.png" alt="">
        <form class="form">
    
    <h1>SIGN IN</h1>
    <p>Sign in to continue shopping</p>
       <div class="form-group">
        <label ><i class="fa-regular fa-envelope"></i></label>
        <input type="text" placeholder="Email"/>
       
       </div>
       <div class="form-group">
        <label ><i class="fa fa-lock"></i></label>
        <input type="text" placeholder="Password"/>
       
       </div>
       <div class="form-group">
        <input type="checkbox" alt="">
        <label for="">Remember me</label>
        <a href="#" class="f">forget your password?</a>
       </div>
      
       <div class="form-group"> 
        <button type="submit" class="btn btn-dark">SIGN IN</button>
       </div>
       <p>Don't have an account?<span><a>sign up</a></span></p>
        </form>
    </section>



</template>
<style scoped>
.sec{
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-size: 23px;
    font-weight: 600;
}
img{
    margin-left: 10px;
}
.form-group{
    margin-bottom: 1rem;
}
.form-group label{
    margin-right: -2rem;
    z-index: 1;
    position: relative;
}
.form-group input[type="text"]{
    background-color: white;
    width: 100%;
    z-index: -1;
    padding-left: 2rem;
}
a{
    text-decoration: none;
    color: black;
}
.f{width: 40%;
    margin-left: 3rem;
    display: inline-block;
    font-weight: 400;
}
.f:hover{
    color:red
}
button{
    width: 100%;
}
.btn{
    color:white
}
.btn:hover{
    background-color: rgb(255, 196, 0);
}
input[type="text"]{
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 5px;
}
i{
        margin-right: 9px;
    }
.form{
    width: auto;
    height: 520px;
    padding: 3rem;
    border-radius: 3px;
    box-shadow: 0px 1px 1px rgba(0,0,0,.8);
}
@media screen and (min-width:900px) {
    .form{
        width:40%;
    }
    
}
@media screen and (max-width:900px) {
    img{
       display: none;
    }
    
}
</style>
