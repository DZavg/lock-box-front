import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type UpdateOneById } from '@/api/access/usecase/updateOneById'
import { identifiers } from '@/api/constants/identifiers'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'

const updateOneById = container.get<UpdateOneById>(identifiers.updateOneAccessById)

export const useAccessStore = defineStore('access', {
	actions: {
		async updateOneById(id: string, access: UpdateAccessDto) {
			return await updateOneById.execute(id, access)
		},
	},
})
