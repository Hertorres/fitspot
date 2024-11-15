<template>
  <div id="app" class="min-h-screen flex flex-col bg-zinc-200">
    <!-- Header fijo en la parte superior -->
    <HeaderNav class="sticky top-0 z-10" @isOpen="openValue" v-if="store.isConected"></HeaderNav>

    <div class="flex flex-grow overflow-hidden">
      <!-- Componente lateral fijo -->
      <Lateral :items="menu" :expanded="value" class=" flex-shrink-0" v-if="store.isConected" />

      <!-- Contenedor del router-view con scroll -->
      <div class="flex-grow overflow-y-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>



<style scoped>
html, body, #app {
  height: 100vh;
}
</style>

<script setup>
  import { RouterView } from 'vue-router';  
  import {  ref, onMounted} from 'vue';
  import HeaderNav from './components/HeaderNav.vue';
  import Lateral from './components/Lateral.vue';
  import { usarUsuario } from './store/usuario';
  import router from './router';
  const store = usarUsuario()
  const value = ref(false)
  const isview = ref(false)


  onMounted(()=> {
    validateUser()
  });



  

  function validateUser() {
    try {
      if(!store.token) {
        isview.value = false
        router.push('/login')
      }

      
    } catch (error) {
      console.error(error)
    }
    
  }







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
