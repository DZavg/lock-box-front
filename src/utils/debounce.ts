export default function debounce(func: Function, delay: number = 300) {
	let timeoutId: ReturnType<typeof setTimeout> | null = null

	return function (...args: any) {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}

		timeoutId = setTimeout(function () {
			func(args)
		}, delay)
	}
}
