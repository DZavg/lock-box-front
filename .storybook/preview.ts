import { type Preview, setup } from '@storybook/vue3'
import { type App } from 'vue'
import { createPinia } from 'pinia'

import '@/app/styles/null.scss'
import '@/app/styles/main.scss'
import { clickOutside } from '@/app/plugins/clickOutside'

const pinia = createPinia()

setup((app: App) => {
	app.use(pinia)
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
