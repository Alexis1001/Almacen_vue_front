<template>
<div>

    <p> vienvenido admin</p>
    <button @click="start" > boton admin </button>

</div>
    
</template>

<script>

export default {

    data(){
        return {
            rol:''
        }
    },
    methods:{
        start(){
            var token=localStorage.getItem('token')
            console.log("token "+token);
            if(this.$router.history.current.path== '/Admin/1'){
                this.rol=1;
               
                
            }
           
        },
        beforeMount() {
            this.start();
        }
    }
}

</script>

<style >

</style>