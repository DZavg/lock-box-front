import type { Error } from '@/global/types/api/error/Error'

export default function (errors: Error) {
	for (const key in errors) {
		errors[key] = errors[key][0]
	}

	return errors
}
