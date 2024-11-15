import { defineStore } from "pinia";
import Cookies from "js-cookie";
//import axios from "axios";
//const apikey =  import.meta.env
export const usarUsuario = defineStore("usuario", {
  state: () => {
    return {
      token: null, 
      isConected: false
      

    };
  },
  actions: {
   
    setDesconexion() {
      
      Cookies.remove('Token');
      window.location.reload();
    },
    async setConexion(conexion) {
   
      this.token = conexion.token;
      const diezHoras = new Date(new Date().getTime() + 10 * 60 * 60 * 1000);
      Cookies.set("token", this.token, { expires: diezHoras });
      this.isConected = true;
     // this.establecerIntervalo();
      /*setTimeout(() => {
        window.location.replace("./");
      }, 10 * 60 * 60 * 1000);*/
     // await this.consultarRoles();
    },
 
   
  },
});