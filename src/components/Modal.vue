<template>
    <div id="modal-view" v-if="modalActive">
          <slot />
    </div>
</template>

<script setup>
 defineProps({
   modalActive: {
    type: Boolean,
    default: false
   }
 });

</script>

<style scoped>
#modal-view{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  z-index: 68;
}
</style>