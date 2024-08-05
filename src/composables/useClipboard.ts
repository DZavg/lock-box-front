import { toast } from 'vue3-toastify'

export default function () {
	function writeText(value: string | Promise<string>): void {
		if (!navigator.clipboard) {
			toast.error('Ваше устройство не поддерживает копирование в буфер обмена')
			return
		}

		if (value instanceof Promise) {
			const type = 'text/plain'
			const blob = value.then((resolve) => new Blob([String(resolve)], { type }))
			const data = new ClipboardItem({ [type]: blob })
			navigator.clipboard.write([data]).then(onfulfilled, onrejected)
			return
		}
		navigator.clipboard.writeText(value).then(onfulfilled, onrejected)
	}

	function onfulfilled() {
		toast.success('Скопировано!')
	}

	function onrejected() {
		toast.error('Не удалось скопировать')
	}

	return { writeText }
}
