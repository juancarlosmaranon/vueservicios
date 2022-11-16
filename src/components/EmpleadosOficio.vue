<template>
  <div>
    <h1>OFICIOS</h1>
    <dl v-for="emple in empleadosOficio" :key="emple">
      <dt>Oficio:</dt>
      <dd>{{ emple.apellido }}</dd>
      <dt>Salario:</dt>
      <dd>{{ emple.salario }}</dd>
      <dt>Departamento:</dt>
      <dd>{{ emple.departamento }}</dd>
    </dl>
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";

export default {
  name: "EmpleadosOficio",
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
    getOficios() {
      var oficio = this.$route.params.empleadosOficio;
      var request = "api/Empleados/EmpleadosOficio/" + oficio;
      var url = Global.urlempleados + request;
      axios.get(url).then((response) => {
        this.empleadosOficio = response.data;
        console.log(response.data);
      });
    },
  },
  watch: {
    //EL CONTROL DE LA VARIABLE SE REALIZA
    //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
    "$route.params.empleadosOficio"(nextVal, oldVal) {
      //SI HA CAMBIADO REALIZAMOS ACCIONES
      if (nextVal != oldVal) {
        //ACCIONES
        this.getOficios();
      }
    },
  },
  mounted() {
    this.getOficios();
  },
  data() {
    return {
      empleadosOficio: [],
    };
  },
};
</script>

<style scoped></style>
