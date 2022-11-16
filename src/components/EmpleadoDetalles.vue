<template>
    <div>
       <h1>Empleados</h1> 
       <form method="post" class="align-center "
       @submit.prevent="getDetalles">
            <label>Seleccione un empleado</label>
            <!-- LOS v-mode SON COMO LAS CAJSA DE REFERENCIA -->
            <select class="form-control text-center w-25 mx-auto" v-model="idEmpleado">
                <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
                    {{emp.apellido}}
                </option>
            </select><br/>
            <button class="btn btn-success">
                Detalles Empleado
            </button>
       </form><br/>
       <dl>
        <dt>Oficio:</dt>
        <dd>{{detEmpleado.oficio}}</dd>
        <dt>Salario:</dt>
        <dd>{{detEmpleado.salario}}</dd>
        <dt>Departamento:</dt>
        <dd>{{detEmpleado.departamento}}</dd>
       </dl>
    </div>
</template>

<script>
import EmpleadosService from './../services/EmpleadosService'
const service = new EmpleadosService();

export default {
    name: 'EmpleadoDetalles',
    methods:{
        getDetalles() {
            var id = this.idEmpleado;
            service.findEmpleado(id).then(result => {
                this.detEmpleado = result;
            })
        }
    },
     mounted() {
        service.getEmpleados().then(result => {
            this.empleados = result;
        })
    },
    data() {
        return {
            empleados:[],
            idEmpleado:0,
            detEmpleado:{}
        };
    },
};
</script>

<style scoped>

</style>