export const clickOutside = {
	mounted: (element: any, binding: any) => {
		element.clickOutside = (event: Event) => {
			const isFunction = typeof binding.value === 'function'
			const path = event.composedPath()

			if (!isFunction) {
				throw new Error('v-click-outside: Binding value must be a function')
			}

			if (!path.includes(element)) {
				binding.value()
			}
		}

		document.addEventListener('click', element.clickOutside)
	},
	beforeUnmount: (element: any) => {
		document.removeEventListener('click', element.clickOutside)
	},
}
