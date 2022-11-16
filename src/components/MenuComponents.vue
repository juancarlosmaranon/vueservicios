<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/coches"
                >Coches</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/empleados"
                >Empleados</router-link
              >
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Oficios
              </a>
              <ul class="dropdown-menu" >
                <li v-for="ofic in oficios" :key="ofic"><router-link :to="'/oficios/' + ofic" class="nav-link active">{{
                ofic
              }}</router-link></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";

export default {
  name: "MenuComponents",
  methods: {
    getOficios() {
      var request = "api/Empleados/oficios";
      var url = Global.urlempleados + request;
      axios.get(url).then((response) => {
        this.oficios = response.data;
      });
    },
  },
  mounted() {
    this.getOficios();
  },
  data() {
    return {
      oficios: [],
    };
  },
};
</script>

<style></style>
