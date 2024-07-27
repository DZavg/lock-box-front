import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type Update } from '@/api/access/usecase/update'
import { identifiers } from '@/api/constants/identifiers'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'

const update = container.get<Update>(identifiers.updateAccess)

export const useAccessStore = defineStore('access', {
	actions: {
		async update(id: string, access: UpdateAccessDto) {
			return await update.execute(id, access)
		},
	},
})
