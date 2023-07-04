<template>
  <div class="custom-select">
    <div class="select-inner">
      <div class="arrow left" @click="scrollOptions(-1)">&#8249;</div>
      <div class="options-container">
        <div class="options" :style="{ transform: `translateX(${-optionOffset}px)` }">
          <div
            v-for="(month, index) in selectMounths"
            :key="index"
            class="option"
            @click="selectOption(month)"
          >
            {{ currentMounth.render }}
          </div>
        </div>
      </div>
      <div class="arrow right" @click="scrollOptions(1)">&#8250;</div>
    </div>
  </div>
  <div ref="calendarContainer" class="calendar-container">
    <section
      class="grid-box"
      @click="store.$state.UserPopUpCalendarOpened = !store.$state.UserPopUpCalendarOpened"
    >
      <div class="grid-item" v-for="(item, index) in getCalendarDays()" :key="index">
        <p class="month">{{ currentMounth.render || currentMounth.data }}</p>
        <p class="day">{{ item }}</p>
        <div class="achives-calendar"><p>fuck</p></div>
      </div>
    </section>
    <div class="popup" v-if="store.$state.UserPopUpCalendarOpened">
      <DayPopUp />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
import { Store } from '@/piniadb/index'
import UserPopUpCalendar from './UserPopUpCalendar.vue'
import DayPopUp from './DayPopUp.vue'
let store = Store()
let currentMounth = ref({ data: moment().format('MMMM'), render: moment().format('MMMM') })
let selectMounths = ref(moment.localeData().months())
let optionOffset = ref(0)
let getCalendarDays = () => {
  let daysArr = []
  let daysInMonth = moment(
    currentMounth.value.render || moment().format('MMMM'),
    'MMMM'
  ).daysInMonth()
  for (let i = 1; i <= daysInMonth; i++) {
    daysArr.push(i)
  }
  return daysArr
}
let selectOption = (option: string) => {
  currentMounth.value.render = option
}
let scrollOptions = (direction: number) => {
  let containerWidth = (document.querySelector('.options-container') as HTMLElement)?.offsetWidth
  let optionsWidth = (document.querySelector('.options') as HTMLElement)?.offsetWidth
  if (optionsWidth > containerWidth) {
    let step = 80
    let maxOffset = optionsWidth - containerWidth
    optionOffset.value = Math.max(0, Math.min(optionOffset.value + direction * step, maxOffset))
    let selectedIndex = Math.round(optionOffset.value / step)
    currentMounth.value.render = selectMounths.value[selectedIndex]
    store.$state.UserPopUpCalendarOpened = false
  }
}
</script>

<style scoped>
.custom-select {
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: #b5dbb8;
  position: absolute;
  overflow: hidden;
  margin-top: 30px;
  margin-left: 10px;
}

.select-inner {
  display: flex;
  align-items: center;
  height: 100%;
}

.arrow {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}

.arrow.left {
}

.arrow.right {
}
/*  {
  pointer-events: none; 
  opacity: 0.5; 
} */

.options-container {
  flex-grow: 1;
  width: 130px;
  display: flex;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
}

.options {
  display: flex;
  transition: transform 0.3s ease;
  gap: 10px;
}

.option {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  margin-left: 10px;
  margin-right: 10px;
}

.calendar-container {
  /* background: linear-gradient(270deg, #0ed29f, #0e8dd2); */
  background-size: 400% 400%;
  width: 80%;
  height: 80%;
  margin-left: 12%;
  border-radius: 30px;
  -webkit-animation: CalendarBackground 5s ease infinite;
  animation: CalendarBackground 5s ease infinite;
  position: relative;
}

@-webkit-keyframes CalendarBackground {
  0% {
    background-position: 0% 31%;
  }
  50% {
    background-position: 100% 70%;
  }
  100% {
    background-position: 0% 31%;
  }
}

@keyframes CalendarBackground {
  0% {
    background-position: 0% 31%;
  }
  50% {
    background-position: 100% 70%;
  }
  100% {
    background-position: 0% 31%;
  }
}

.grid-box {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  padding: 20px;
  gap: 20px;
  margin-bottom: 20px;
}

.grid-item {
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  display: grid;
  padding: 10px;
  align-items: center;
  justify-items: center;
  border-radius: 10px;
  background-color: #f5fbff;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;
  position: relative;
  cursor: pointer;
}

.grid-item:hover {
  transform: scale(1.15);
}

.month {
  font-size: 1em;
  opacity: 0.7;
  margin: 0;
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: context-menu;
  cursor: pointer;
}

.day {
  font-size: 6em;
  opacity: 0.5;
  margin: 0;
  position: absolute;
  cursor: pointer;
}
.calendar-icons {
  width: 25px;
  height: 25px;
}
.busy-list {
  justify-self: end;
  align-self: flex-start;
  margin-top: -5px;
  margin-right: -5px;
  transition: transform 0.3s ease;
  cursor: pointer;
  opacity: 0.7;
}
.busy-list:hover {
  transform: scale(1.15);
  opacity: 1;
}
.achives-calendar {
  align-self: flex-end;
  justify-self: center;
  width: 100%;
}
.achives-calendar::before {
  content: '';
  display: block;
  height: 1px;
  background-color: #000;
  opacity: 0.5;
  width: 100%;
}
.popup {
  position: absolute;
  top: 2%;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: start;
  justify-items: center;
}
</style>
