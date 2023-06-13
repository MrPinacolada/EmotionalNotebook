<template>
  <div class="headercontainer">
    <div class="flexboxheader">
      <img
        @click="store.$state.LeftBarOpener = !store.$state.LeftBarOpener"
        src="@/assets/Header/left_bar_opener.svg"
        id="left-bar-opener"
        alt="LeftBar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Store } from '@/piniadb/index'
import { ref } from 'vue'
let store = Store()
</script>

<style scoped>
.headercontainer {
  background-color: rgb(229, 229, 240);
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 50px;
  top: 0;
  left: 0;
  margin-bottom: 5px;
}
.flexboxheader {
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 5px;
}
#left-bar-opener {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
