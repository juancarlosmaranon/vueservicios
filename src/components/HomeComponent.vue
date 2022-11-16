<template>
    <div>
        <h1>HOME</h1>
        <img class="imagen" src="./../assets/images/home.png"/>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo'
//PARA PODER UTILIZAR SERVICIO, DEBEMOS INSTANCIAR
//UN OBJETO DE LA CLASE EN EL COMPONENT
const service = new ServiceEjemplo();

    export default{
        name:"HomeComponent",
        data(){
            return{
                saludo:""
            }
        },
        mounted(){
            this.saludo = service.getSaludo("Alumno");
            console.log("klkentoki");
        }
    }
</script>

<style>

    .imagen{
        width:600px;
        height:600px;
    }

</style>