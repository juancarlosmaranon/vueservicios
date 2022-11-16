import Global from "./../Global";
import axios from "axios";

export default class EmpleadosService{
    getEmpleados(){
        return new Promise(function (resolve) {
            var request = 'api/empleados';
            var url = Global.urlempleados+request;
            var empleados = [];
            axios.get(url).then(response=>{
                empleados = response.data;
                resolve(empleados);
            })
        })
    }

    findEmpleado(idempleado){
        return new Promise (function(resolve){
            var request = 'api/Empleados/' + idempleado;
            var url = Global.urlempleados + request;
            var empleado = {};
            axios.get(url).then(response=>{
                empleado = response.data;
                resolve(empleado);
            });
        });
    }
}