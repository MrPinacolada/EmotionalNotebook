<template>
  <div
    class="round-backdrop animate__animated animate__fadeIn"
    v-if="store.$state.UserEmotianalCalendarOpenedFORK"
  ></div>
  <form
    @submit.prevent="SaveFeelings"
    ref="targetClosePopUp"
    v-if="store.$state.UserEmotianalCalendarOpenedFORK"
    class="emotional-popup-container animate__animated animate__flipInX"
  >
    <label for="">{{ ChangeableLabel }}</label>
    <section>
      <div class="selectedFills">
        <span
          @click="addRemoveFeeling(item, false)"
          class="feeling-calendar"
          :style="{ backgroundColor: item.color }"
          v-for="(item, index) in usersFeelings"
          :key="index"
          >{{ item.fl }}</span
        >
      </div>
    </section>
    <br />
    <section class="feelings-container-span">
      <span
        class="feeling-calendar"
        @click="addRemoveFeeling(item, true)"
        :style="{ backgroundColor: item.color }"
        v-for="(item, index) in feelingsCalendar"
        :key="index"
        >{{ item.fl }}</span
      >
    </section>
    <br />
    <section>
      <editor
        v-model="UserWritting"
        api-key="v5n069t1i4u2b85xtio3jrmx4gktki4qys7iaksiafi1fzzq"
        :init="store.$state.tinymceConfig(200)"
        :initial-value="UserWritting"
        tag-name="div"
      />
    </section>
    <br />
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, onBeforeMount, type Ref } from 'vue'
import editor from '@tinymce/tinymce-vue'
import outsideDetector from '@/backgroundFunc/outsideDetector'
import { Store } from '@/piniadb/index'
const emit = defineEmits(['updateColor'])
interface Feeling {
  id: number
  fl: string
  color: string
}
let store = Store()
const UserWritting = ref('fuck')
const usersFeelings = ref<Feeling[]>([])
let targetClosePopUp = ref(null)
let ChangeableLabel = ref('What do you feel now?')
let feelingsCalendar = ref([
  { id: 0, fl: 'Anger', color: 'rgb(210, 205, 205)' },
  { id: 1, fl: 'Fear', color: 'rgb(210, 205, 205)' },
  { id: 2, fl: 'Love', color: 'rgb(216, 205, 205)' },
  { id: 3, fl: 'Anxiety', color: 'rgb(200, 205, 205)' },
  { id: 4, fl: 'Happy', color: 'rgb(190, 205, 205)' },
  { id: 5, fl: 'bla', color: 'rgb(210, 205, 205)' },
  { id: 6, fl: 'bla', color: 'rgb(10, 10, 205)' },
  { id: 7, fl: 'bla', color: 'rgb(110, 25, 205)' },
  { id: 8, fl: 'bla', color: 'rgb(109, 20, 205)' }
])
let addRemoveFeeling = (item: { id: number; fl: string; color: string }, state: boolean) => {
  if (usersFeelings.value.length == 3 && state) {
    ChangeableLabel.value = 'You can add only 3 feelings...'
    return
  }
  if (state) {
    usersFeelings.value.push(item)
    feelingsCalendar.value = feelingsCalendar.value.filter((obj) => obj.id !== item.id)
  } else {
    feelingsCalendar.value.push(item)
    usersFeelings.value = usersFeelings.value.filter((obj) => obj.id !== item.id)
  }
}
outsideDetector(targetClosePopUp, () => {
  store.$state.UserEmotianalCalendarOpenedFORK = !store.$state.UserEmotianalCalendarOpenedFORK
})
let SaveFeelings = () => {
  emit('updateColor', usersFeelings.value)
}
</script>

<style scoped>
.round-backdrop {
  position: absolute;
  background-color: rgb(210, 205, 205, 0.7);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.emotional-popup-container {
  position: absolute;
  align-self: center;
  justify-self: center;
  z-index: 3;
  padding: 10px;
  margin: auto;
  width: 60%;
  height: fit-content;
  border-radius: 15px;
  background-color: whitesmoke;
  overflow: hidden;
}

.feeling-calendar {
  border-radius: 30px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}

label {
  color: #aaa;
  text-transform: uppercase;
  margin: 25px 0px 15px;
  display: inline-block;
  font-size: 0.9em;
}
input,
select {
  display: block;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: whitesmoke;
  border-bottom: 1px solid #e2bebe;
  padding: 5px 6px;
  margin-bottom: 10px;
}
input:focus {
  outline: none;
}
select:focus {
  outline: none;
}
.selectedFills {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  min-height: 30px;
  background-color: #ffffffa5;
  border-radius: 25px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.feelings-container-span {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
