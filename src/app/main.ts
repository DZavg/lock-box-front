import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import checkScreen from '@/shared/lib/plugins/checkScreen'
import { clickOutside } from '@/shared/lib/plugins/clickOutside'

const app = createApp(App)

app.use(createPinia())
app.use(checkScreen)
app.use(router)

app.directive('clickOutside', clickOutside)

app.mount('#app')
