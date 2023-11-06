<template>
    <div class="container">
        <div class="row">
            <div class="col-12 all">
                
                <h1>Blog News</h1>
                <ul class="list-icon">
                    
           <li id="sort"> 
            <form action=""> 
                   <div class="form-group">
                    <select class="form-control" >
                       <option value="1">Newest</option>
                       <option value="2">Oldest</option>
                       <option value="20">Top Selled</option>
                       <option value="24">Top rated</option>
                   </select>

                   </div>
               </form>
            </li>
            <li>
                <div class="form-group search-form">
                    
                        <input type="text" />
                        <button type="submit" class="btn btn-dark"><span class="mdi mdi-name mdi-magnify"></span></button>
                  
                  </div>
            </li>
            <li >
                  <span class="mdi mdi-name mdi-grid formicon"  ></span>
            </li>
           <li >
                  <span class="mdi mdi-name mdi-format-list-bulleted red formicon" ></span>
               
           </li>
                 </ul>
   <div class="divider"></div>

            </div>
        </div>
    </div>
   
</template>
<style scoped>
.container{
    padding: 3rem 0px;
}
.divider{
    position: absolute;
    height: 1px;
    width:100%;
    background-color: gray;
    bottom: 0px;
}
.all{
    display: flex;
    justify-content: space-between;
}
ul{
    list-style: none;
    display: flex;
    justify-content: right;
    width:70%;
}
.search-form{
    border-radius: 3px;
    border: 1px solid rgba(128, 128, 128, 0.212);
    display: flex;
    justify-content:right
}
.search-form input{
    border: none;
}
.btn{
    border-radius: 0px;
}
.formicon {
    font-size: 26px;
}
.red{
    color: red;
}
</style>