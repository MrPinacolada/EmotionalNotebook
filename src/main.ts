import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config'
import Toast from "primevue/toast";
import Chart from 'primevue/chart';
import Dialog from 'primevue/dialog';
import Editor from 'primevue/editor'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  inputStyle: 'filled',
  zIndex: {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100
  }
})
app.use(ToastService);
app.component("Toast", Toast);
app.component('Chart', Chart);
app.component('Dialog', Dialog);
app.component('Editor', Editor);
app.mount('#app')
