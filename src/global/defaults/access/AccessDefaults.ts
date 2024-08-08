import type { Access } from '@/api/access/entity/Access'

export const accessDefaults: Access = {
	id: '',
	origin: '',
	login: '',
	type: {
		id: '',
		title: '',
	},
}
