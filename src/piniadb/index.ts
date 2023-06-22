import { defineStore } from 'pinia'
export const Store = defineStore('Articles', {
  state: () => {
    return {
      LeftBarOpener: false,
      UserPopUpCalendarOpened: false,
      UserEmotianalCalendarOpened: false,
      UserEmotianalCalendarOpenedFORK:false,
      tinymceConfig: (height: number) => {
        return {
          height: height,
          toolbar_location: 'bottom',
          toolbar: 'bold | italic | underline | emoticons',
          disabled: false,
          plugins: 'emoticons',
          menubar: false,
          statusbar: false,
          resize: false
        }
      }
    }
  }
})
