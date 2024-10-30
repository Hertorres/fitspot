<template>


      <aside :class="expanded ? 'w-52' : 'w-16'" class="bg-gray-800 text-white p-4 transition-all duration-300 rounded-3xl ml-2 mt-2 mb-2">
      
  
        <!-- Links de Navegación -->
        <nav>
          <ul :class="expanded ? 'space-y-4' : 'space-y-2'">
            <li  v-for="(item, index) in props.items" :key="index">
              
              <RouterLink :to="item.to" class="hover:text-gray-400 flex gap-2 items-center " :class="{ 'text-xs justify-center': !expanded , 'mt-8':index>0}">
                <Icon :icon="item?.icon" :newClass="'size-6 cursor-pointer'" :color="item?.color" :hoverColor="'#6c6c6c'" ></Icon>
                <p v-if="expanded">{{item?.label}}</p>
                </RouterLink>
              
              
            </li>
          </ul>
        </nav>
      </aside>
  
  
     
    
  </template>


<script setup>
import { ref, watchEffect} from 'vue';
import Icon from './Icon.vue';
import { RouterLink } from 'vue-router';
const expanded = ref(false)

const props = defineProps({
    items: {
      type: Array
    }, 
    expanded: {
      type: Boolean
    }
   
  });

  watchEffect(()=> {
    expanded.value = props.expanded
  })


</script>