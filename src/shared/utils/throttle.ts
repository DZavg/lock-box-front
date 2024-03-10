export default function (func: Function, delay: number = 200) {
	let timeoutId: ReturnType<typeof setTimeout> | null = null

	return function (...args: any) {
		if (timeoutId) return
		timeoutId = setTimeout(() => {
			func(...args)

			clearTimeout(timeoutId!)
			timeoutId = null
		}, delay)
	}
}
