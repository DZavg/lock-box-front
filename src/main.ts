import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'
import checkBreakpointsPlugin from '@/app/plugins/checkBreakpointsPlugin'

const app = createApp(App)

app.use(checkBreakpointsPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
