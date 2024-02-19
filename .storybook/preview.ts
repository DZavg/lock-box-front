import { type Preview, setup } from '@storybook/vue3'
import { type App } from 'vue'
import { createPinia } from 'pinia'

import '@/app/styles/variables.scss'
import '@/app/styles/mixins.scss'
import '@/app/styles/main.scss'

const pinia = createPinia()

setup((app: App) => {
	app.use(pinia)
})

const preview: Preview = {
	parameters: {
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
