import axios from 'axios'
import Global from '../Global'

export default class CochesService {

    // getPromesa = new Promise(function(resolve, reject){
    //     var num = 0;
    //     if (num == 0){
    //         resolve("OK!");
    //     }else{
    //         reject("ERROR");
    //     }
    // })

    //REALIZAMOS UN METODO PARA RECUPERAR
    //TODOS LOS COCHES
    getCoches() {
        return new Promise(function (resolve) {
            var request = '/webresources/coches';
            var url = Global.urlcoches + request;
            var coches = [];
            axios.get(url).then(response => {
                coches = response.data;
                resolve(coches);
            })
            
        })
    }
}