import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'
import checkBreakpointsPlugin from '@/app/plugins/checkBreakpointsPlugin'
import { clickOutside } from '@/app/plugins/clickOutside'

const app = createApp(App)

app.use(checkBreakpointsPlugin)
app.use(createPinia())
app.use(router)

app.directive('clickOutside', clickOutside)

app.mount('#app')
