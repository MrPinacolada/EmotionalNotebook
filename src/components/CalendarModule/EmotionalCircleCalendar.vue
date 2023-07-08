<template>
  <Dialog
    :style="{ width: '40%', height: '70%' }"
    v-model:visible="store.$state.UserEmotianalCalendarOpened"
    modal
    class="animate__animated animate__flipInY"
    :header="ChangeableLabel"
  >
    <form @submit.prevent="SaveFeelings" class="emotional-popup-container">
      <section class="feelings-container-span">
        <div v-for="item in store.$state.Circle_F_array">
          <MultiSelect
            v-model="item.selectedFeelings"
            :options="item.list"
            :optionLabel="(option) => option.fs_name"
            :placeholder="'Я чувствую...'"
            :max-selected-labels="1"
            :selectionLimit="1"
            :style="{ background: item.maj_color, color: 'rgb(255 255 255 / 91%)' }"
          />
        </div>
      </section>
      <br />
      <section>
        <Editor v-model="UserWritting" editorStyle="height: 120px;" />
      </section>
      <br />
      <Button type="submit">Save</Button>
    </form>
  </Dialog>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, onBeforeMount, type Ref } from 'vue'
import Editor from 'primevue/editor'
import Dialog from 'primevue/dialog'
import { Store } from '@/piniadb/index'
import Button from 'primevue/button'
import MultiSelect from 'primevue/multiselect'
import { useToast } from 'primevue/usetoast'

const emit = defineEmits(['updateColor'])
const toast = useToast()
const store = Store()
const UserWritting = ref('Hi')

interface Feeling {
  fs_name: string
  color: string
  selectedFeelings: Feeling[]
}

let ChangeableLabel = ref('Что ты сейчас испытываешь?')

const SaveFeelings = () => {
  const selectedFeelings = store.$state.Circle_F_array.reduce(
    (selected: Array<{ fs_name: string; color: string }>, item: Feeling) => {
      if (item.selectedFeelings && item.selectedFeelings.length > 0) {
        const selectedFeeling = item.selectedFeelings[0]
        selected.push({
          fs_name: selectedFeeling.fs_name,
          color: selectedFeeling.color
        })
      }
      return selected
    },
    []
  )
  toast.add({
    severity: 'success',
    summary: 'Saved!',
    detail: 'Чувства добавлены!',
    life: 1000
  })

  emit('updateColor', selectedFeelings)
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
  /* position: absolute; */
  align-self: center;
  justify-self: center;
  z-index: 3;
  padding: 10px;
  margin: auto;
  /* width: 100%; */
  /* height: fit-content; */
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
input {
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
.p-multiselect {
  border-radius: 25px;
  /* background-color: rgb(113, 54, 54); */
}
.p-multiselect-chip .p-multiselect-token {
  background-color: red !important;
}
</style>
