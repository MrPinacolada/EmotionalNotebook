import { defineStore } from 'pinia'
import { doc, getDoc} from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import { dbFirestore } from '@/firebase/config'
export const Store = defineStore('Articles', {
  state: () => {
    return {
      LeftBarOpener: false,
      UserPopUpCalendarOpened: false,
      UserEmotianalCalendarOpened: false,


      Circle_F_array:[] as DocumentData
      
    }
  },
  actions: {
    async get_all_emotions_for_circle() {
      const docRef = doc(dbFirestore, 'Calendar', 'DailyPopUp', 'EmotionalCircle', 'f_array')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        this.Circle_F_array = docSnap.data().fs
        console.log('this.Circle_F_array: ', this.Circle_F_array);
      } else {
        console.error('No such document! (get_all_emotions_for_circle)')
      }
    }
  }
})
