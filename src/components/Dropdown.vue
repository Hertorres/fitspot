<template>
    <div class="relative inline-block text-left">
      <button @click="toggleDropdown" class="w-52 p-2 bg-white text-black rounded-md">
        <p class="text-black gap-2 flex justify-between items-center">
          {{ selectedLabel.label }}
          <img src="../assets/down-arrow.svg" class="w-5 h-5 object-cover" />
        </p>
      </button>
  
      <div v-if="isOpen" class="absolute  w-full bg-white rounded-md shadow-lg z-10">
        <ul class="py-1">
          <li
            v-for="(option, index) in options"
            :key="index"
            @click="selectDeporte(option)"
            :class="['px-4 py-2 cursor-pointer', { 'bg-gray-200': selectedLabel === option }]"
          >
          <p class="text-black gap-2 flex items-center justify-between">
            {{ option?.label }}
            <span v-if="selectedLabel === option"><img src="../assets/check.svg" class="w-4 h-100 object-cover"></span>
          </p>
           
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect} from 'vue';
 /* import { defineProps, defineEmits } from 'vue';*/
 const selectedLabel = ref()
  
  const props = defineProps({
    options: {
      type: Array,
      default: () => []
    }
  });


  watchEffect( () => {

    selectedLabel.value =  props.options.find((a)=> a?.default == true)
})
  
  const emits = defineEmits(['update:modelValue']);
  
  const isOpen = ref(false);


  function toggleDropdown() {
    isOpen.value = !isOpen.value;
  }
  

  function selectDeporte(deporte) {
    selectedLabel.value = deporte;
    isOpen.value = false;
    emits('update:modelValue', deporte);
  }
  </script>
  
  <style scoped>
  .w-25 {
    width: 200px; /* Ajusta el ancho según sea necesario */
  }
  </style>
  