import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type GetOneById } from '@/api/project/usecase/getOneById'
import { identifiers } from '@/api/constants/identifiers'
import { type GetAll } from '@/api/project/usecase/getAll'
import type { Create } from '@/api/project/usecase/create'
import type { ProjectDto } from '@/api/project/dto/project.dto'

const getOneById = container.get<GetOneById>(identifiers.getOneProjectById)
const getAll = container.get<GetAll>(identifiers.getAllProjects)
const create = container.get<Create>(identifiers.createProject)

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

		async create(project: ProjectDto) {
			return await create.execute(project)
		},
	},
	getters: {},
})
