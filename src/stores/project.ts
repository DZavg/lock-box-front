import { defineStore } from 'pinia'
import { container } from '@/shared/api/DIContainer'
import { type GetOneById } from '@/shared/api/project/usecase/getOneById'
import { identifiers } from '@/shared/api/constants/identifiers'
import { type GetAll } from '@/shared/api/project/usecase/getAll'

const getOneById = container.get<GetOneById>(identifiers.getOneProjectById)
const getAll = container.get<GetAll>(identifiers.getAllProjects)

export const useProjectStore = defineStore('project', {
	state: () => {
		return {}
	},
	actions: {
		async getOneById(id: string | number) {
			return getOneById.execute(id)
		},

		async getAll() {
			return getAll.execute()
		},
	},
	getters: {},
})
