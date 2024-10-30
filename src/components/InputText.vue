<template>
    <div class="relative inline-block text-left">
      <div class="flex w-52 gap-1 bg-white text-black rounded-md p-1.5">
        <img :src="imgValue" />
        <input  class="w-10/12 p-0.5	 " :placeholder="props?.placeholder || ''" @input="emitValue">
      </div>
     
        
      </input>
    

      
      
   
      
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect  } from 'vue';
 /* import { defineProps, defineEmits } from 'vue';*/
 const imgValue = ref()
  const props = defineProps({
    icon: {
      type: String
    }, 
    placeholder: {
      type:String
    }
  });
  
  const emits = defineEmits(['update:modelValue']);

  
  watchEffect(async () => {

    import(`${props.icon}`).then(imageImports => {
      imgValue.value = imageImports.default
  })

   
})

function emitValue(params) {

  emits('update:modelValue', params.target.value);
}

  
  </script>
  
  <style scoped>
  .w-25 {
    width: 200px; /* Ajusta el ancho según sea necesario */
  }
  </style>
  