<template>
    <header class="bg-gray-800 text-white rounded-3xl mt-1.5 mr-1 ml-1">
  <nav class="container mx-auto flex items-center justify-between  p-4 gap-3">

    <div class="flex">
    <Icon :icon="'menu2'" :newClass="'size-5 m-2 cursor-pointer'" :hoverColor="'#6c6c6c'" :color="'white'" @click="toogle"></Icon>
    <RouterLink to="/" class="text-2xl font-bold">FitSpot </RouterLink>
  </div>
  <div class="flex gap-3">
    <Icon :icon="'notify'" :newClass="'size-5 m-2 cursor-pointer'" :hoverColor="'#6c6c6c'" :color="'white'"></Icon>
    <Icon :icon="'user'" :newClass="'size-5 m-2 cursor-pointer'" :hoverColor="'#6c6c6c'" :color="'white'"></Icon>
  </div>
  </nav>

  
</header>

</template>

<script setup>

import { defineAsyncComponent, ref, provide } from 'vue'
import { RouterLink } from 'vue-router';
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