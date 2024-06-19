import { toast } from 'vue3-toastify'

export default function () {
	function writeText(value: string | Promise<string>): void {
		if (!navigator.clipboard) {
			toast.error('Ваше устройство не поддерживает копирование в буфер обмена')
			return
		}

		if (value instanceof Promise) {
			value.then((resolve) =>
				navigator.clipboard.writeText(String(resolve)).then(onfulfilled, onrejected),
			)
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
