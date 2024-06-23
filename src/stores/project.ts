import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type GetOneById } from '@/api/project/usecase/getOneById'
import { identifiers } from '@/api/constants/identifiers'
import { type GetAll } from '@/api/project/usecase/getAll'

const getOneById = container.get<GetOneById>(identifiers.getOneProjectById)
const getAll = container.get<GetAll>(identifiers.getAllProjects)

export const useProjectStore = defineStore('project', {
	state: () => {
		return {}
	},
	actions: {
		async getOneById(id: string | number) {
			return await getOneById.execute(id)
		},

		async getAll() {
			return await getAll.execute()
		},
	},
	getters: {},
})
