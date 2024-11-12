<template>
 

   
      <div class="w-full mx-auto ">
        <div class="flex flex-wrap w-full gap-2 justify-center">
        <Dropdown v-model="selectDeporte" :options="deporteOptions"></Dropdown>
        <InputText v-model="selectUbicacion" :icon="'../assets/ubicacion.svg'" :placeholder="'Ingrese la ubicación'"></InputText>
        <Calendar v-model="selectDate" :type="'date'"/>
        <Calendar v-model="selectTime" :type="'time'"/>
        <Buttom :text="'Buscar'" :class="'size-max bg-gray-800'" :icon="'../assets/search.svg'" @click="filter()"></Buttom>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6 mt-8">
            <Card  v-for="(item, index) in canchas" :titulo="item.nombre" :horario="item.horario" :ubicacion="item.ubicacion"
            :emoji="item.emoji" :imagen="item.imagen" :key="index"/>  
        </div>
    </div>

    
</template>

<script setup>
import axios from 'axios';
import { defineAsyncComponent, onMounted, ref } from 'vue'


const Card = defineAsyncComponent(() =>
  import('../components/Card.vue')
)
const Dropdown = defineAsyncComponent(() =>
  import('../components/Dropdown.vue')
)

const InputText = defineAsyncComponent(() =>
  import('../components/InputText.vue')
)
const Calendar = defineAsyncComponent(() =>
  import('../components/Calendar.vue')
)
const Buttom = defineAsyncComponent(() =>
  import('../components/Buttom.vue')
)

const canchasDisponibles = ref([])

onMounted(()=> {

findCanchas()

})

async function findCanchas(param) {
  try {
    let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `http://localhost/api/cancha`,
  headers: {
    'Content-Type': 'application/json'
   }
};
const response = await axios.request(config);
console.log(response.data)


  } catch (error) {
    console.error(error)
  }
}

// const canchasDisponibles = [
//     { id: 1, nombre: 'Cancha Central', deporte: 'Fútbol', horario: '14:00 - 16:00', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLlUeAmlIhTHAYCj122JU6EeknTsy6iMQ8g&s', ubicacion: 'Central' },
//     { id: 2, nombre: 'Cancha 2', deporte: 'Básquet', horario: '16:00 - 18:00', imagen: 'https://media.istockphoto.com/id/1551914538/es/foto/cancha-de-baloncesto-en-ilustraci%C3%B3n-3d.jpg?s=612x612&w=0&k=20&c=t10-iOyXzECSut69S3YlE5nqpnhZ99dtCE9xE--WXSk=', ubicacion: 'Asuncion' },
//     { id: 3, nombre: 'Cancha de Tenis', deporte: 'Tenis', horario: '18:00 - 20:00', imagen: 'https://static8.depositphotos.com/1009701/893/i/450/depositphotos_8930781-stock-photo-tennis-court.jpg', ubicacion: 'Encarnacion' },
//   ];

//   const deporteIconos = {
//     Fútbol: '⚽',
//     Básquet: '🏀',
//     Tenis: '🎾',
//     Vóley: '🏐',
//   };

//   const deporteOptions = [{
//     label: 'Seleccione un Deporte', 
//     value: {}, 
//     default: true
//   },
//   {
//     label: 'Básquet 🏀', 
//     value: 'Básquet'
//   },
//   {
//     label: 'Fútbol ⚽', 
//     value: 'Fútbol'
//   },{
//     label: 'Tenis 🎾',
//     value: 'Tenis'
//   },{
//     label: 'Vóley 🏐',
//     value: 'Vóley'
//   }
//     ];
//     const canchas = ref([])
//   onMounted(()=> {
//     canchas.value = canchasDisponibles.map(cancha => ({
//   ...cancha, 
//   emoji: deporteIconos[cancha.deporte] || ''}))
//   })

//   const selectDeporte = ref({})
//   const selectUbicacion = ref('')
//   const selectDate = ref('')
//   const selectTime = ref('')


//   function filter() {

//     console.log(canchasDisponibles.map(cancha => ({
//   ...cancha, 
//   emoji: deporteIconos[cancha.deporte] || ''})))


   
//      canchas.value = canchasDisponibles.map(cancha => ({
//   ...cancha, 
//   emoji: deporteIconos[cancha.deporte] || ''})).filter(cancha => {
//     return [
//   //{ key: 'deporte', value: selectDeporte.value.value },
//   { key: 'horario', value: selectTime.value },
//   { key: 'ubicacion', value: selectUbicacion.value ? new RegExp(selectUbicacion.value, 'i') : '' }
// ].every(({ key, value }) => {
//   return value === '' || 
//   (value instanceof RegExp ? value.test(cancha[key]) : cancha[key] === value)
  
//         // (typeof value === 'object' && value !== ''  && Object.keys(value).length === 0) || 
//        //  (value instanceof RegExp ? value.test(cancha[key]) : cancha[key] === value);
// })
//   });
//   }


</script>