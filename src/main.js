import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const GStore = reactive({ flashMessage: '' })

app.use(createPinia())
app.provide('GStore', GStore)
app.use(router)

app.mount('#app')
