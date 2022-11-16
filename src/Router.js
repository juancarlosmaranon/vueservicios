import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadoDetalles from "./components/EmpleadoDetalles.vue";
import EmpleadosOficio from "./components/EmpleadosOficio.vue"


const misRutas = [

    {
        path:"/", component: HomeComponent
    },
    {
        path:"/coches", component: CochesComponent
    },
    {
        path:"/empleados", component: EmpleadoDetalles
    },
    {
        path:"/oficios/:empleadosOficio", component: EmpleadosOficio
    },

]

//CREAMOS UNA CONSTANTE QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas 
});

//POR ULTIMO, EXPORTAR LA CONSTANTE ROUTER
export default router;