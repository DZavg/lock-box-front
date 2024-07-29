import type { AccessType } from '@/api/access/entity/AccessType'

export interface Access {
	id: string
	origin: string
	login: string
	password?: string
	type: AccessType
	type_name?: string
}
