<template>
    <div class="container">
        <div class="row">
            <div class=" d-flex justify-content-center">
                <table>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{{ productImg.product_name }}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="active"><img :src="this.productImg.image_190x230" alt="img"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>


            
        </div>
    </div>
</template>
<script>
import { useMyStore2 } from '../store2'; 
export default{
    mounted(){
        
        const store=useMyStore2()
        
        const currentid=store.currentProduct
        console.log(currentid)


    },
    computed:{
        productImg(){
            const store=useMyStore2()
            const currentid=store.currentProduct
            let p=store.allproducts.find(p=>p.id==currentid)
            if(!p)
            p=store.moreproducts.find(p=>p.id==currentid)
        if(!p)
        p=store.related_products.find(p=>p.id==currentid)
    if(!p)
    p=store.related_products2.find(p=>p.id==currentid)
if(!p)
p=store.allproducts.find(p=>p.id==2)


return p

        }
    }
}
</script>
<style>
table{
    border: 1px solid gray;
    margin-bottom: 2rem;
}
tr{
    border: 1px solid gray;
    width: 100%;
    min-height:40px ;
}
td{
    height: 40px;
    min-width: 30px;
    border : 1px solid gray
}
td.active{
    padding: 2rem;
}
</style>