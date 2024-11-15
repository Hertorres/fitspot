<template>
    <div class="flex flex-wrap justify-between gap-1 mt-8 ml-2 mr-2 bg-white rounded-lg shadow-md overflow-hidden">
       <div class=" basis-3/4 p-2">
        <h1 class="text-4xl">{{ cancha.nombre }}</h1>
        {{ cancha.deporte.descripcion }}
        <!-- <img src=""> -->
      
       </div>   
       <div class=" flex-grow p-2 flex flex-col ">
        <div class="flex flex-row justify-evenly ">
            <div>
                    <Icon :icon="'star'" :newClass="'size-8 m-2 cursor-pointer'" :hoverColor="'#6c6c6c'" :color="'black'"></Icon>
                </div>
                <div>
                   <button class="w-full   bg-black text-white mt-2 py-2 px-4 rounded hover:bg-zinc-600" @click="reservar()">
                Reservar    
                </button>
                </div>
        </div>
        
       


                <!-- 
                <button  class="w-full  inline-block bg-black text-white mt-2 py-2 px-4 rounded hover:bg-zinc-600">
                    Reservar</button>
                    <div class="mt-5 p-2">
                        <label for="" class="text-2xl font-bold flex gap-2">Precio: <p class="font-normal">{{  cancha?.precioPorHora }}$ por hora </p></label>
                    </div> -->
            </div>
    </div>

</template>

<script setup>
import axios from 'axios';
import { onMounted, watch, ref} from 'vue'
import { useRoute } from 'vue-router'
import Icon from '../components/Icon.vue';


const route = useRoute();
const cancha = ref({});

onMounted(()=> {
    findCancha(route.params.id)
})

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(newId)
    findCancha(newId)
  } ,
  { deep: true }
)

async function findCancha(params) {
    try {
        
        let data = '';

        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost/api/cancha/'+params,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        const response = await axios.request(config);
        cancha.value = {...response.data}

    } catch (error) {
        console.error(error)
    }
    
}
async function reservar(params) {
    try {
        
    } catch (error) {
        console.error(error)
    }
}
</script>