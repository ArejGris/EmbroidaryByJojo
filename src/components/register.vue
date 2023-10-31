<template>
    <section class="sec">
        <img src="../assets/default-image-320x520.png" alt="">
        <form>
        
        <h1>SIGN UP</h1>
        <p>Sign up to continue shopping</p>
            <div class="form-group">
            <label ><i class="fa-regular fa-user"></i></label>
            <input type="text" placeholder="First Name"/>
           </div>
            <div class="form-group">
            <label ><i class="fa-regular fa-user"></i></label>
            <input type="text" placeholder="Last Name"/>
           </div>
           <div class="form-group">
            <label ><i class="fa-regular fa-envelope"></i></label>
            <input type="text" placeholder="Email"/>
           </div>
    
           <div class="form-group">
            <label ><i class="fa fa-lock"></i></label>
            <input type="text" placeholder="Password"/>
           </div>
           <div class="form-group">
            <label ><i class="fa fa-lock"></i></label>
            <input type="text" placeholder="Password Confirmation"/>
           </div>
          
          
           <div class="form-group"> 
            <button type="submit" class="btn btn-dark">SIGN UP</button>
           </div>
           <p>I have an account?<span><a>sign in</a></span></p>
        </form>
    </section>
  
    
    
    </template>
    <style scoped>
    .sec{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 570px;
    }
    h1{
    font-size: 23px;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    }
    .form-group{
        margin-bottom: 1rem;
        width: 320px;
    }
    .form-group label{
        margin-right: -2rem;
        z-index: 1;
        position: relative;
    }
    .form-group input[type="text"]{
        border-color:rgba(128, 128, 128, 0.187) ;
        width: 100%;
        z-index: -1;
        padding-left: 2rem;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .f{width: 50%;
        white-space: nowrap;
        margin-left: 1rem;
        display: inline-block;
    }
    i{
        margin-right: 9px;
    }
    button{
        width: 100%;
        color: white;
    }
    .btn:hover{
    background-color: rgb(255, 196, 0);
}
input[type="text"]{
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: white;
    color:black
}
form{
    width: auto;
    height: 520px;
    padding: 3rem;
    border-radius: 2px;
    box-shadow: 0px 1px 1px rgba(0,0,0,.8);
}
@media screen and (min-width: 900px){
    .form{
        width:auto;
    }
}
@media screen and (max-width:900px) {
    img{
       display: none;
    }
    
}
    </style>
    