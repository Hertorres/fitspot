<template>
  <div id="app" class="min-h-screen flex flex-col bg-zinc-200">
    <!-- Header fijo en la parte superior -->
    <HeaderNav class="sticky top-0 z-10 " @isOpen="openValue"></HeaderNav>

    <div class="flex flex-1 h-full bg-zinc-200 box-border"> 
      <Lateral :items="menu" :expanded="value" /> 

      <!-- Contenido Principal -->
      <div class="flex-1 p-4 overflow-auto flex bg-zinc-200">
        <router-view />
       
      </div>
    </div>
  </div>
</template>



<style scoped>
html, body, #app {
  height: 100%;
}
</style>

<script setup>
import { RouterView } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue'
const value = ref(false)

const  HeaderNav = defineAsyncComponent(() =>
  import('./components/HeaderNav.vue')
)
const  Lateral = defineAsyncComponent(() =>
  import('./components/Lateral.vue')
)

const menu = ref([
  {
    label: 'Inicio', 
    icon: 'home', 
    color: 'white',
    to: '/'
  },

  {
    label: 'Favoritos', 
    icon: 'star', 
    color: 'white',
    to: '/'
  },
  {
    label: 'Metodos de Pago', 
    icon: 'methodpay', 
    color: 'white',
    to: '/'
  },
  {
    label: 'Ayuda', 
    icon: 'ayuda', 
    color: 'white',
    to: '/'
  }
])

function openValue(params) {
  value.value = params
}

</script>
