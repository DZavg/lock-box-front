import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router'
import checkScreen from '@/plugins/checkScreen'
import { clickOutside } from '@/plugins/clickOutside'
import checkAuth from '@/plugins/checkAuth'
import { RouteName } from '@/router/RouteName'
import { HttpStatus } from '@/lib/httpStatus'

const app = createApp(App)

app.use(createPinia())
await checkAuth()
app.use(checkScreen)
app.use(router)
app.use(Vue3Toastify, {
	position: 'top-center',
	autoClose: 2000,
	multiple: true,
	limit: 1,
	hideProgressBar: true,
	closeButton: false,
	theme: 'colored',
} as ToastContainerOptions)

app.directive('clickOutside', clickOutside)

app.mount('#app')

app.config.errorHandler = async (error: any) => {
	if (error?.response?.status === HttpStatus.NOT_FOUND) {
		await router.push({ name: RouteName.NotFound })
	} else {
		throw error
	}
}
