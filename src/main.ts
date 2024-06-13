import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router'
import checkScreen from '@/plugins/checkScreen'
import { clickOutside } from '@/plugins/clickOutside'

const app = createApp(App)

app.use(createPinia())
app.use(checkScreen)
app.use(router)
app.use(Vue3Toastify, {
	position: 'top-center',
	autoClose: 3000,
	multiple: false,
	hideProgressBar: true,
	closeButton: false,
	theme: 'colored',
	dangerouslyHTMLString: true,
} as ToastContainerOptions)

app.directive('clickOutside', clickOutside)

app.mount('#app')
