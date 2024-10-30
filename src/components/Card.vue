<template>
<div class="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-80 md:w-90 lg:w-100">
    <img :src="props.imagen" alt="Imagen de ejemplo" class="w-full h-100 object-cover" />
    <div class="p-5">

        <h3 class="font-semibold leading-none tracking-tight flex items-center justify-between">
            <span class="text-2xl">{{props.titulo}}</span>
            <span class="text-2xl">{{props.emoji}}</span>
        </h3>
        <p class="text-zinc-500  gap-2 flex items-center mt-2"><img src = "../assets/ubicacion.svg"  class="w-5 h-5 object-cover" />{{props.ubicacion}}</p>
        <p class="text-zinc-500  gap-2  flex items-center mt-2"><img src = "../assets/horario.svg" class="w-5 h-5 object-cover"/>{{props.horario}}</p>
     
        <button  class="w-full  inline-block bg-black text-white mt-2 py-2 px-4 rounded hover:bg-zinc-600">
            Reservar</button>
    </div>
  </div>
        
</template>


<script setup>
//import { defineProps } from 'vue';
const props = defineProps({
    titulo: {
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    }, 
    horario:{
        type: String,
        required: true
    }, 
    emoji: {
        type: String,
        required: true
    }, 
    imagen: {
        type: String,
        required: true
    }
})
</script>