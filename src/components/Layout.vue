<template>
    <div class="layout">
      <Header />
      <div id="view">
         <Sidebar />
         <router-view />
      </div>
    </div> 
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue'

</script>

<style scoped>
.layout{
    position: relative;
    height: 100vh;
}
#view{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    flex: auto;
    min-height: calc(100vh - 70px);  
}

</style>