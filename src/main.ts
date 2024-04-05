import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'
import checkScreen from '@/shared/plugins/checkScreen'
import { clickOutside } from '@/shared/plugins/clickOutside'

const app = createApp(App)

app.use(createPinia())
app.use(checkScreen)
app.use(router)

app.directive('clickOutside', clickOutside)

app.mount('#app')
