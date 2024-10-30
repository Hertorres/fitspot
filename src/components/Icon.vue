<template>
    <div v-html="svgContent" :class="props.newClass" ></div>
  </template>


<script setup>
import { ref, watchEffect } from 'vue';

const svgContent = ref('')
const isSvg = ref(false)

const props = defineProps({
    icon: {
      type: String
    },
    newClass:{
        type:String
    }, 
    color:{
        type:String,
        default: "black"
    }
  });





watchEffect(async () => {

   
        isSvg.value = true 
        try {
   
      const imageImports = await import(`../assets/${props.icon}.svg?raw`);
      svgContent.value = imageImports.default;
    } catch (error) {
      console.error('Error al importar el SVG:', error);
    }
     


    


})

</script>

<style scoped>
 :deep(svg){
    height: 100%;
    width: 100%;
   
}
:deep(svg path){
   stroke: v-bind(color)
}
</style>