export default function (func: Function, delay: number = 200) {
	let timeoutId: ReturnType<typeof setTimeout> | null = null

	return function (this: unknown, ...args: any) {
		if (timeoutId) return
		timeoutId = setTimeout(() => {
			func.apply(this, args)

			clearTimeout(timeoutId!)
			timeoutId = null
		}, delay)
	}
}
