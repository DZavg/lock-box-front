import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { type GetOneById } from '@/api/project/usecase/getOneById'
import { identifiers } from '@/api/constants/identifiers'
import { type GetAll } from '@/api/project/usecase/getAll'
import type { Create } from '@/api/project/usecase/create'
import type { ProjectDto } from '@/api/project/dto/project.dto'
import type { Project } from '@/api/project/entity/Project'
import type { DeleteOneById } from '@/api/project/usecase/deleteOneById'
import type { GetAllAccessesById } from '@/api/project/usecase/getAllAccessesById'
import type { ProjectsSlugPage } from '@/api/project/entity/ProjectsSlugPage'
import type { CreateAccessById } from '@/api/project/usecase/createAccessById'
import type { AccessDto } from '@/api/access/dto/access.dto'
import type { UpdateOneById } from '@/api/project/usecase/updateOneById'
import type { UpdateProjectDto } from '@/api/project/dto/update-project.dto'

const getOneById = container.get<GetOneById>(identifiers.getOneProjectById)
const getAll = container.get<GetAll>(identifiers.getAllProjects)
const create = container.get<Create>(identifiers.createProject)
const updateOneById = container.get<UpdateOneById>(identifiers.updateOneProjectById)
const deleteOneProjectById = container.get<DeleteOneById>(identifiers.deleteOneProjectById)
const getAllAccessesById = container.get<GetAllAccessesById>(identifiers.getAllAccessesById)
const createAccessById = container.get<CreateAccessById>(identifiers.createAccessById)

export const useProjectStore = defineStore('project', {
	state: () => {
		return {
			projects: [] as Project[],
			projectsTotalCount: 0 as number,
			projectsSlugPage: {} as ProjectsSlugPage,
		}
	},
	actions: {
		async getOneById(id: string) {
			return await getOneById.execute(id)
		},

		async getAll(query: string = '') {
			const response = await getAll.execute(query)
			this.projects = response?.projects
			this.projectsTotalCount = response?.total_count
			return response
		},

		async create(project: ProjectDto) {
			return await create.execute(project)
		},

		async updateOneById(id: string, project: UpdateProjectDto) {
			return await updateOneById.execute(id, project)
		},

		async deleteOneById(id: string) {
			return await deleteOneProjectById.execute(id)
		},

		async getAllAccessesById(id: string) {
			const response = await getAllAccessesById.execute(id)

			response.accesses.map((item) => {
				item.type_name = item.type.title
			})

			this.projectsSlugPage = response
			return response
		},

		async createAccessById(id: string, access: AccessDto) {
			return await createAccessById.execute(id, access)
		},
	},
	getters: {
		getProjects: (state) => {
			return state.projects
		},

		getProjectsTotalCount: (state) => {
			return state.projectsTotalCount
		},

		getProjectsSlugPage: (state) => {
			return state.projectsSlugPage
		},
	},
})
