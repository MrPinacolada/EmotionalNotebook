<template>
  <Dialog :style="{ height: '100%' }" v-model:visible="store.$state.UserPopUpCalendarOpened" modal>
    <div class="user-popup-container-calendar">
      <div class="notebook-caendar">
        <Editor v-model="UserWritting" editorStyle="height: 320px;" />
      </div>
      <div class="rigtbar-calendar">
        <!-- <div @click="store.$state.UserEmotianalCalendarOpened = true" class="circle">
          <div class="circleSection"></div>
          <div class="circleSection"></div>
          <div class="circleSection"></div>
          <div class="line"></div>
        </div> -->
        <Chart
          type="pie"
          :data="chartData"
          :options="chartOptions"
          :pt="{
            root: { style: ' width: 150px; height: 150px;' },
            canvas: { style: 'aspect-ratio: 1; width: 150px; height: 150px;' }
          }"
          @click="store.$state.UserEmotianalCalendarOpened = true"
        />
        <div class="todo-list-calendar"></div>
      </div>
      <EmotionalCircleCalendar
        @update-color="updateUsersPopUp"
        v-if="store.$state.UserEmotianalCalendarOpened"
      />
      <div class="photoswiper-calendar"></div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, onBeforeMount } from 'vue'
import { Store } from '@/piniadb/index'
import EmotionalCircleCalendar from './EmotionalCircleCalendar.vue'

const store = Store()
const UserWritting = ref('fuck')

const updateUsersPopUp = (event: any) => {
  
}

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  return {
    datasets: [
      {
        data: [30, 30, 30, 30, 30, 30],
        backgroundColor: [
          documentStyle.getPropertyValue('#ff00111'),
          documentStyle.getPropertyValue('--green-500'),
          documentStyle.getPropertyValue('--yellow-500'),
          documentStyle.getPropertyValue('--bluegray-500'),
          documentStyle.getPropertyValue('--blue-500'),
          documentStyle.getPropertyValue('--blue-500')
          // label: 'My dataset'
        ]
      }
    ]
    // labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
  }
}
const setChartOptions = () => {
  plugins: {
    legend: {
      labels: {
        usePointStyle: false
      }
    }
  }
}
onBeforeMount(() => {
  store.get_all_emotions_for_circle()
})

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
</script>

<style scoped>
.daypopup-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
}
.user-popup-container-calendar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-rows: 1fr 0.5fr;
  margin: auto;
  overflow: hidden;
  position: relative;
}
.p-dialog {
  background-color: #119ffd;
  width: fit-content;
  height: fit-content;
}
:deep(.p-dialog-content) {
  overflow: hidden;
}
.notebook-caendar {
  width: 100%;
  height: 100%;
  padding: 10px;
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
  padding: 10px;
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
