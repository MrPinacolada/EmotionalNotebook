<template>
  <div
    v-if="store.$state.LeftBarOpener"
    class="leftbarcontainer animate__animated animate__slideInLeft"
    :class="{ animate__slideOutLeft: leftBarUnmount }"
  >
    <img
      id="close-butt-left-bar"
      @click="CloseTheBar"
      src="@/assets/LeftBar/icons8-close.svg"
      alt="closeButt"
    />
  </div>
</template>

<script setup lang="ts">
import { Store } from '@/piniadb/index'
import { ref } from 'vue'
let store = Store()
let leftBarUnmount = ref()
let CloseTheBar = () => {
  leftBarUnmount.value = !leftBarUnmount.value
  setTimeout(() => {
    store.$state.LeftBarOpener = !store.$state.LeftBarOpener
    leftBarUnmount.value = !leftBarUnmount.value
  }, 1000)
}
</script>

<style scoped>
.leftbarcontainer {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: rgb(229, 229, 240);
  border-radius: 20px;
  z-index: 999;

}
#close-butt-left-bar {
  position: absolute;
  top: 2%;
  left: 80%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
</style>
