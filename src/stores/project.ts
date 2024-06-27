import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type GetOneById } from '@/api/project/usecase/getOneById'
import { identifiers } from '@/api/constants/identifiers'
import { type GetAll } from '@/api/project/usecase/getAll'
import type { Create } from '@/api/project/usecase/create'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import type { Project } from '@/api/project/entity/Project'
import type { DeleteOneById } from '@/api/project/usecase/deleteOneById'

const getOneById = container.get<GetOneById>(identifiers.getOneProjectById)
const getAll = container.get<GetAll>(identifiers.getAllProjects)
const create = container.get<Create>(identifiers.createProject)
const deleteOneProjectById = container.get<DeleteOneById>(identifiers.deleteOneProjectById)

export const useProjectStore = defineStore('project', {
	state: () => {
		return {
			projects: [] as Project[],
		}
	},
	actions: {
		async getOneById(id: string | number) {
			return await getOneById.execute(id)
		},

		async getAll() {
			const response = await getAll.execute()
			this.projects = response
			return response
		},

		async create(project: ProjectDto) {
			return await create.execute(project)
		},

		async deleteOneById(id: string | number) {
			return await deleteOneProjectById.execute(id)
		},
	},
	getters: {
		getProjects: (state) => {
			return state.projects
		},
	},
})
