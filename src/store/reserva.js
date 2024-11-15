import { defineStore } from "pinia";
import Cookies from "js-cookie";
//import axios from "axios";
//const apikey =  import.meta.env
export const usarReserva = defineStore("reserva", {
  state: () => {
    return {
      link: null, 
      id: null
      

    };
  },
  actions: {
   
    setLink(link) {
      this.link = link
      
    },
    setId(id) {
        this.id = id
        
      },
     
 
   
  },
});