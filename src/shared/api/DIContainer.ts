import 'reflect-metadata'
import { Container } from 'inversify'
import { type AxiosInstance } from 'axios'
import { httpClient } from '@/shared/api/client/httpClient'
import {
	type ProjectRepository,
	ProjectRepositoryImpl,
} from '@/shared/api/project/repository/ProjectRepository'
import { type GetOneById, GetOneByIdImpl } from '@/shared/api/project/usecase/getOneById'
import { identifiers } from '@/shared/api/constants/identifiers'
import { type GetAll, GetAllImpl } from '@/shared/api/project/usecase/getAll'

const container: Container = new Container()

container.bind<AxiosInstance>(identifiers.httpClient).toConstantValue(httpClient)

container.bind<ProjectRepository>(identifiers.projectRepository).to(ProjectRepositoryImpl)
container.bind<GetOneById>(identifiers.getOneProjectById).to(GetOneByIdImpl)
container.bind<GetAll>(identifiers.getAllProjects).to(GetAllImpl)

export { container }
