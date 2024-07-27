import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type UpdateOneById } from '@/api/access/usecase/updateOneById'
import { identifiers } from '@/api/constants/identifiers'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'
import type { DeleteOneById } from '@/api/access/usecase/deleteOneById'
import { type GetPasswordById } from '@/api/access/usecase/getPasswordById'

const updateOneById = container.get<UpdateOneById>(identifiers.updateOneAccessById)
const deleteOneById = container.get<DeleteOneById>(identifiers.deleteOneAccessById)
const getPasswordById = container.get<GetPasswordById>(identifiers.getPasswordById)

export const useAccessStore = defineStore('access', {
	actions: {
		async updateOneById(id: string, access: UpdateAccessDto) {
			return await updateOneById.execute(id, access)
		},

		async deleteOneById(id: string) {
			return await deleteOneById.execute(id)
		},

		async getPasswordById(id: string) {
			return await getPasswordById.execute(id)
		},
	},
})
