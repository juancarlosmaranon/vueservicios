<template>
  <div>
    <h1>Api coches</h1>
    <div v-for="car in coches " :key="car.idcoche">
        <h1 style="color:blue">{{car.marca}},{{car.modelo}}</h1>
        <h2 style="color:red">{{car.conductor}}</h2>
        <img :src="car.imagen" style="width:150px; height:150px"/>
    </div>
  </div>
</template>

<script>
import CochesService from './../services/CochesService'
const service = new CochesService();
//AQUI PODEMOS DECLARAR VARIABLES PARA UTILIZARLAS 
//DENTRO DE CUALQUIER METODO DEL COMPONENT
export default {
  name: "CochesComponent",
  methods: {
    loadCoches() {
       service.getCoches().then(result=>{
          this.coches = result;
       });
    },
  },
  mounted() {
    this.loadCoches();
  },
  data() {
    return {
      coches: [],
    };
  },
};
</script>

<style scoped></style>
