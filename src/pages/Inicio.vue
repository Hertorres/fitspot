<template>
 

   
      <div class="w-full mx-auto ">
        <div class="flex flex-wrap w-full gap-2 justify-center">
        <Dropdown v-model="selectDeporte" :options="deporteOptions"></Dropdown>
        <InputText v-model="selectUbicacion" :icon="'../assets/ubicacion.svg'" :placeholder="'Ingrese la ubicación'"></InputText>
        <Calendar v-model="selectDate" :type="'date'"/>
        <Calendar v-model="selectTime" :type="'time'"/>
        <Buttom :text="'Buscar'" :class="'size-max bg-gray-800'" :icon="'../assets/search.svg'"></Buttom>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6 mt-8">
            <Card  v-for="(item, index) in canchas" :titulo="item.nombre" :horario="item.horario" :ubicacion="item.ubicacion"
            :emoji="item.emoji" :imagen="item.imagen" :key="index"/>  
        </div>
    </div>

    
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

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

const canchasDisponibles = [
    { id: 1, nombre: 'Cancha Central', deporte: 'Fútbol', horario: '14:00 - 16:00', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s', ubicacion: 'Central' },
    { id: 2, nombre: 'Cancha 2', deporte: 'Básquet', horario: '16:00 - 18:00', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s', ubicacion: 'Asuncion' },
    { id: 3, nombre: 'Cancha de Tenis', deporte: 'Tenis', horario: '18:00 - 20:00', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s', ubicacion: 'Encarnacion' },
  ];

  const deporteIconos = {
    Fútbol: '⚽',
    Básquet: '🏀',
    Tenis: '🎾',
    Vóley: '🏐',
  };

  const deporteOptions = [
    'Seleccione un Deporte',
    'Fútbol ⚽',
    'Básquet 🏀',
    'Tenis 🎾',
    'Vóley 🏐',
    ];

  const canchas = canchasDisponibles.map(cancha => ({
  ...cancha, 
  emoji: deporteIconos[cancha.deporte] || ''}));

  const selectDeporte = ref('')
  const selectUbicacion = ref('')
  const selectDate = ref('')
  const selectTime = ref('')
</script>