<template>
    <div class="relative flex text-left" >
      <div class="flex  gap-1   rounded-md p-1.5" :class="classValue">
       
        <button
    class=" w-full flex gap-2 cursor-pointer text-white rounded-md p-0.5 items-center"

  >
  <p v-if="text && text != ''">{{text}}</p>

    <img :src="imgValue"  v-if="imgValue && imgValue!=''" class="invert size-4"/>
 
  </button>
      </div>
     
        
      </input>
    

      
      
   
      
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect  } from 'vue';
 /* import { defineProps, defineEmits } from 'vue';*/
 const imgValue = ref()
 const classValue = ref()
  const props = defineProps({
    text: {
      type: String
    },
    icon: {
        type: String
    },
    class:{
        type:String
    }
  });
  
  const emits = defineEmits(['update:modelValue']);

  


function emitValue(params) {

  emits('update:modelValue', params.target.value);
}

watchEffect(async () => {
classValue.value = props.class

import(`${props.icon}`).then(imageImports => {
      imgValue.value = imageImports.default
  })
})

  
  </script>
  
  <style scoped>
  .w-25 {
    width: 200px; /* Ajusta el ancho según sea necesario */
  }
  </style>
  