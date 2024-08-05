import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type UpdateOneById } from '@/api/access/usecase/updateOneById'
import { identifiers } from '@/api/constants/identifiers'
import type { UpdateAccessDto } from '@/api/access/dto/update-access.dto'
import type { DeleteOneById } from '@/api/access/usecase/deleteOneById'
import { type GetPasswordById } from '@/api/access/usecase/getPasswordById'
import type { GetAllTypes } from '@/api/access/usecase/getAllTypes'
import type { AccessType } from '@/api/access/entity/AccessType'

const updateOneById = container.get<UpdateOneById>(identifiers.updateOneAccessById)
const deleteOneById = container.get<DeleteOneById>(identifiers.deleteOneAccessById)
const getPasswordById = container.get<GetPasswordById>(identifiers.getPasswordById)
const getAllTypes = container.get<GetAllTypes>(identifiers.getAllTypes)

export const useAccessStore = defineStore('access', {
	state: () => {
		return {
			accessTypes: [] as AccessType[],
		}
	},
	actions: {
		async updateOneById(id: string, access: UpdateAccessDto) {
			return await updateOneById.execute(id, access)
		},

		async deleteOneById(id: string) {
			return await deleteOneById.execute(id)
		},

		async getPasswordById(id: string) {
			const response = await getPasswordById.execute(id)
			return response.password
		},

		async getAllTypes() {
			if (this.accessTypes.length) return this.accessTypes

			const response = await getAllTypes.execute()
			this.accessTypes = response
			return response
		},
	},
	getters: {
		getAccessTypes: (state) => {
			return state.accessTypes
		},
	},
})
