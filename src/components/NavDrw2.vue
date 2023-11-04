
    <template>
    <div class="drawer">
        <div class="top">
            <img src="../assets/embroidary-logo.png" alt="" class="logo">
            <div class="fa fa-close" @click="close"></div>
        </div>
        <ul>
            <li v-for="cat in catigories" :key="cat.id">
                <router-link :to="`/catigories/${cat.id}`">{{ cat.title }}</router-link>
            </li>
          
            <li class="last">
                <router-link to="/catigories">
                    <button class="btn btn-warning">view all categories</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { useMyStore2 } from '../store2';
   export default{
    emits:['close'],
    methods:{
        close(){
            this.$emit('close')
        }

    },
    computed:{
        catigories(){
            const store=useMyStore2()
            return store.categories
        }
    }
   }
</script>
<style scoped>
.drawer{
    z-index: 1024;
    position: fixed;
    left: 0;
    top:0;
    height: 100%;
    background-color: white;
    width: 300px;
    transition: all .4s ease-in-out;
    text-align: left;
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
}
@media screen and (max-width:350px){
    .drawer{
        width: 200px;
    }
}
ul{
    list-style: none;
    padding-left: 0px;
}
ul li{
padding: 1rem;

}
ul li:not(.last){
cursor: pointer;
text-align: left;
padding-left: 10px;
}
ul li:not(:last-child){
    
border-bottom: .1px solid rgba(128, 128, 128, 0.192);
}
.dropdown-menu.show {
    border: 0px;
}
ul li a{
    
    padding: 10px;
    text-decoration: none;
    color: black;
}
.logo{
  width: 100px;
  height: 70px;
}
.last{
cursor: pointer;
text-align: center;
}
.last button{
    width: 80%;
    padding:10px;
    background-color:  rgb(255, 196, 0);
}
.fa{
    cursor: pointer;
}
</style>