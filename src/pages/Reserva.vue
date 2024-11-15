<template>
    <div class="flex flex-wrap justify-between gap-6 mt-8 ml-2 mr-2">
       <div class="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-80 md:w-90 lg:w-100">
        <h1 class="text-4xl">{{ cancha.nombre }}</h1>
       </div>   
       <div>
        Info y reserva
       </div>
    </div>

</template>

<script setup>
import axios from 'axios';
import { onMounted, watch, ref} from 'vue'
import { useRoute } from 'vue-router'

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

</script>