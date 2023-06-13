import UserPopUpCalendarVue from '@/components/CalendarModule/UserPopUpCalendar.vue'
import { defineStore } from 'pinia'
export const Store = defineStore('Articles', {
  state: () => {
    return {
      LeftBarOpener: false,
      UserPopUpCalendarOpened:false,
      UserEmotianalCalendarOpened:false
    }
  }
})
