<template>
  <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6"><h2> <b>Transactions</b></h2></div>   
                    </div>
                </div>
                <table class="table table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">type</th>
                            <th scope="col">decription</th>
                            <th scope="col">inventory&nbsp;id</th>
                            <th scope="col">Created &nbsp;On</th>
                            <th scope="col">update &nbsp; date &nbsp;On</th>
                           
                    
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) of items" v-bind:key="index"  ata-status="activate">
                            <td>{{item}}</td>
                           
                           
                        </tr>
                    </tbody>
                </table>
            </div>   

    
</template>

<script>
import axios from 'axios';
export default {
    data(){
        
        return{
            url:'',
            items: [],
        
        }
    },
    mounted() {
        console.log("Componente listo");
        this.url = "http://127.0.0.1:3333/api/v1/";
        axios.get(this.url + "transaction", this.config).then(response => {
            this.items = response.data;
            console.log("Transactions realizaddos")
            console.log(response.data);
            console.log("transactions en el vector "+this.items[0]);
            }).catch(e => {
                alert("el error es  "+e);
                })
       
    },
}



</script>