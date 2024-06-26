import { type Preview, setup } from '@storybook/vue3'
import { type App } from 'vue'
import { createPinia } from 'pinia'

import '../src/assets/styles/null.scss'
import '../src/assets/styles/main.scss'
import { clickOutside } from '../src/plugins/clickOutside'
import router from '../src/router'
import checkScreen from '../src/plugins/checkScreen'

const pinia = createPinia()

setup((app: App) => {
	app.use(pinia)
	app.use(router)
	app.use(checkScreen)
	app.directive('clickOutside', clickOutside)
})

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#1E1E2A',
				},
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
