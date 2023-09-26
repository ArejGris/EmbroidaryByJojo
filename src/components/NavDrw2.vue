
    <template>
    <div class="drawer">
        
        <img src="../assets/embroidary-logo.png" alt="" class="logo">
        <ul>
            <li v-for="cat in catigories" :key="cat.id">
                <router-link :to="`/catigories/${cat.id}`">{{ cat.title }}</router-link>
            </li>
          
            <li>
                <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Pages
                                 </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                 <a class="dropdown-item" href="#">Blog</a>
                                <a class="dropdown-item" href="#">About us</a>
                                <a class="dropdown-item" href="#">Connect us</a>
  
                         </div>
                      </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { useMyStore } from '../store';
   export default{
    computed:{
        catigories(){
            const store=useMyStore()
            return store.categories
        }
    }
   }
</script>
<style>
.drawer{
    z-index: 1024;
    position: fixed;
    left: 0;
    top:0;
    height: 100%;
    background-color: white;
    width: 300px;
    transition: all .4s ease-in-out;
}
@media screen and (max-width:350px){
    .drawer{
        width: 200px;
    }
}
ul{
    list-style: none;
}
ul li{
    padding: 10px;
cursor: pointer;
}
ul li a{
    text-decoration: none;
    color: black;
}
.logo{
  width: 100px;
  height: 70px;
}
</style>