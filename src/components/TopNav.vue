<template>
    <nav class="navbar nav">
        <ul class="left-list  ">
            <li class="nav-item"> 
                <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    English</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#"><img src="../assets/us.png" alt="" class="us">English</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    US Dollars</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <a class="dropdown-item" href="#">us dollars</a>
                    </div>
                </div>

            </li>
            <li>
                Be A Seller
            </li>
        </ul>
        <ul class="right-list ">
            <li class="nav-item">call:<a href="tel:8801234567890">8801234567890</a>
            </li>
            <li class="nav-item">
                <span class="mdi mdi-name mdi-map-marker-outline"></span>Track Order
            </li>
            <li class="nav-item">Compare</li>
            <li class="nav-item">Blog</li>

        </ul>
    </nav>
</template>
<style scoped>
a{
    text-decoration: none;
    color: black;
}
.nav{
    height: 60px;
    background-color: rgba(128, 128, 128, 0.329);
    padding: 10px;
}

.us{
    width: 30px;
}
ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
}

ul li{
    padding: 5px 10px;
}
ul.left-list{
    margin-right: auto;
}
ul.right-list{
    margin-left: auto;
}
@media screen and (max-width:820px){
    .nav{
        height: 120px;
        display: flex;
        flex-wrap: wrap;
    }
    
    ul.right-list{
        order: 1;
        margin-right: auto;
        margin-left: 1rem;
        margin-bottom: 10px ;

    }
    ul.right-list li{
        white-space: nowrap;
    }
}
</style>