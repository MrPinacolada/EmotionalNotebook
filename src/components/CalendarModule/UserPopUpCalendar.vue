<template>
  <div
    ref="targetClosePopUp"
    class="user-popup-container-calendar animate__animated animate__backInUp"
  >
    <div class="notebook-caendar">
      <editor
        v-model="UserWritting"
        api-key="v5n069t1i4u2b85xtio3jrmx4gktki4qys7iaksiafi1fzzq"
        :init="store.$state.tinymceConfig(400)"
        :initial-value="UserWritting"
        tag-name="div"
      />
    </div>
    <div class="rigtbar-calendar">
      <div @click="store.$state.UserEmotianalCalendarOpened = true" class="circle">
        <div class="circleSection"></div>
        <div class="circleSection"></div>
        <div class="circleSection"></div>
        <div class="line"></div>
      </div>
      <div class="todo-list-calendar"></div>
    </div>
    <EmotionalCircleCalendar
      @update-color="updateUsersPopUp"
      v-if="store.$state.UserEmotianalCalendarOpened"
    />
    <div class="photoswiper-calendar"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, onBeforeMount } from 'vue'
import editor from '@tinymce/tinymce-vue'
import { Store } from '@/piniadb/index'
import outsideDetector from '@/backgroundFunc/outsideDetector'
import EmotionalCircleCalendar from './EmotionalCircleCalendar.vue'
let store = Store()
const UserWritting = ref('fuck')
let targetClosePopUp = ref(null)
outsideDetector(targetClosePopUp, () => {
  store.$state.UserPopUpCalendarOpened = !store.$state.UserPopUpCalendarOpened
  store.$state.UserEmotianalCalendarOpened = !store.$state.UserEmotianalCalendarOpened
})
let updateUsersPopUp = (event: any) => {
  let circle = document.getElementsByClassName('circleSection')
  for (let i = 0; i < circle.length; i++) {
    let circleSection = circle[i] as HTMLElement
    if (!event[i]) {
      let transparent = 'rgb(0,0,0,0)'
      circleSection.style.backgroundColor = transparent
      return
    }
    circleSection.style.backgroundColor = event[i].color
  }
}
</script>

<style scoped>
.user-popup-container-calendar {
  padding: 10px;
  width: 70%;
  height: 74%;
  overflow: hidden;
  border-radius: 20px;
  background-color: antiquewhite;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-rows: 1fr 0.5fr;
}
.notebook-caendar {
  width: 100%;
  height: 100%;
}
.photoswiper-calendar {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  grid-column: span 2;
}
.rigtbar-calendar {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: grid;
  align-items: self-start;
  justify-items: center;
}
.circle {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 10px;
  border: 1px rgb(153, 137, 137) solid;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.circle:hover {
  transform: scale(1.2);
}

.circleSection {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circleSection:nth-child(1) {
  /* background-color: red; */
  transform: rotate(0deg);
  clip-path: polygon(50% 50%, 150% 100%, -50% 100%);
}

.circleSection:nth-child(2) {
  /* background-color: green; */
  transform: rotate(135deg);
  clip-path: polygon(50% 50%, 200% 100%, 0% 100%);
}

.circleSection:nth-child(3) {
  /* background-color: blue; */
  transform: rotate(225deg);

  clip-path: polygon(50% 50%, 100% 100%, -100% 100%);
}
.circleSection:nth-child(3):hover {
}

.line {
  position: absolute;
  top: 25%;
  left: 25%;
  rotate: 90deg;
  width: 50%;
  height: 1px;
  background-color: rgb(153, 137, 137);
}

.line:before,
.line:after {
  content: '';
  position: absolute;
  top: -1px;
  width: 50%;
  height: 1px;
  background-color: rgb(153, 137, 137);
}

.line:before {
  top: 22px;
  width: 100%;
  right: -71%;
  rotate: 63deg;
}

.line:after {
  top: -23px;
  left: 72%;
  rotate: 116.7deg;
  width: 100%;
}
.todo-list-calendar {
}
</style>
