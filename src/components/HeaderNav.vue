<template>
    <header class="bg-gray-800 text-white">
  <nav class="container mx-auto flex items-center  p-4 gap-3">

    <Icon :icon="'menu2'" :newClass="'size-5 m-2'" :color="'white'" @click="toogle"></Icon>
    <a href="#" class="text-2xl font-bold">FitSpot</a>

  </nav>

  
</header>

</template>

<script setup>

import { defineAsyncComponent, ref, provide } from 'vue'
const Buttom = defineAsyncComponent(() =>
  import('./Buttom.vue')
)
const Icon = defineAsyncComponent(() =>
  import('./Icon.vue')
)
const emit = defineEmits(['isOpen'])
const expanded = ref(false)



function toogle() {
  expanded.value = !expanded.value 
  emit('isOpen', expanded.value)
}




</script>