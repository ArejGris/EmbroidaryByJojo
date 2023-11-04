<template>
    <section>
        <div class="container">
            <div class="thumb">
                <img src="../assets/default-image-320x852.png" alt="">
            </div>
            <div class="card">
                
            <div class="contents">
                <form>
        <h1>SIGN UP</h1>
        <p>Sign up to continue shopping</p>
        <h1>Personal Information</h1>
        <div class="divide"></div>
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
            <label ><img src="../assets/bd.png" alt=""></label>
            <input type="text" placeholder="+893"/>
           </div>
    
           <div class="form-group">
            <label ><span class="mdi mdi-name mdi-lock-outline"></span></label>
            <input type="text" placeholder="Password"/>
           </div>
           <div class="form-group">
            <label ><span class="mdi mdi-name mdi-lock-outline"></span></label>
            <input type="text" placeholder="Password Confirmation"/>
           </div>
           <h1>Shop Information</h1>
        <div class="divide"></div>
        <div class="form-group">
            <label ><span class="mdi mdi-name mdi-shopping-outline"></span></label>
            <input type="text" placeholder="shop name"/>
           </div>
           <div class="form-group">
            <label ><span class="mdi mdi-name mdi-map-marker-outline"></span></label>
            <input type="text" placeholder="shop Address"/>
           </div>
           <div class="form-group"> 
            <button type="submit" class="btn btn-dark">SIGN UP</button>
           </div>
           <p>I have an account?<span><router-link to="/sign-in">sign in</router-link></span></p>
        </form>
            </div>

            </div>
           
        </div>
    </section>
</template>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    
}
.divide{
    height: 1px;
    width: 100%;
    background-color: gray;
    margin: 10px 0px;
}
h1{
    font-size: 23px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    }
    .form-group{
        margin-bottom: 1.4rem;
        width: 320px;
    }
    .form-group label{
        z-index: 1;
        position: relative;
    }
    .form-group input[type="text"]{
        border-color:rgba(128, 128, 128, 0.187) ;
        width: 90%;
        z-index: -1;
        padding-left: 2rem;
    }
    .mdi,i,img{
        margin-right: -2rem;
    }
    a{
        text-decoration: none;
        color: black;
        font-family: 'Poppins' sans-serif;
        font-weight: 600;
    }
    @media screen and (max-width:769px) {
        .thumb{
            display: none;
        }
        .form-group{
            width: 100%;
        }
    }
</style>