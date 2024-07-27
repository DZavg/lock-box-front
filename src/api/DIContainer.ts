import 'reflect-metadata'
import { Container } from 'inversify'
import { type AxiosInstance } from 'axios'
import { httpClient } from '@/api/client/httpClient'
import {
	type ProjectRepository,
	ProjectRepositoryImpl,
} from '@/api/project/repository/ProjectRepository'
import {
	type GetOneById as GetOneProjectById,
	GetOneByIdImpl as GetOneProjectByIdImpl,
} from '@/api/project/usecase/getOneById'
import { identifiers } from '@/api/constants/identifiers'
import {
	type GetAll as GetAllProjects,
	GetAllImpl as GetAllProjectsImpl,
} from '@/api/project/usecase/getAll'
import { type Login, LoginImpl } from '@/api/auth/usecase/login'
import { type AuthRepository, AuthRepositoryImpl } from '@/api/auth/repository/AuthRepository'
import {
	type TokensRepository,
	TokensRepositoryImpl,
} from '@/api/tokens/repository/TokensRepository'
import { type GetTokens, GetTokensImpl } from '@/api/tokens/usecase/getTokens'
import { type SetTokens, SetTokensImpl } from '@/api/tokens/usecase/setTokens'
import { type RemoveTokens, RemoveTokensImpl } from '@/api/tokens/usecase/removeTokens'
import { type UserRepository, UserRepositoryImpl } from '@/api/user/repository/UserRepository'
import { type GetInfo, GetInfoImpl } from '@/api/user/usecase/getInfo'
import type { Logout } from '@/api/auth/usecase/logout'
import { LogoutImpl } from '@/api/auth/usecase/logout'
import { type Registration, RegistrationImpl } from '@/api/auth/usecase/registration'
import {
	type Create as CreateProject,
	CreateImpl as CreateProjectImpl,
} from '@/api/project/usecase/create'
import {
	type DeleteOneById as DeleteOneProjectById,
	DeleteOneByIdImpl as DeleteOneProjectByIdImpl,
} from '@/api/project/usecase/deleteOneById'
import type { GetAllAccessesById } from '@/api/project/usecase/getAllAccessesById'
import { GetAllAccessesImpl } from '@/api/project/usecase/getAllAccessesById'
import { type CreateAccessById, CreateAccessImpl } from '@/api/project/usecase/createAccessById'
import {
	type UpdateOneById as UpdateOneProjectById,
	UpdateOneByIdImpl as UpdateOneProjectByIdImpl,
} from '@/api/project/usecase/updateOneById'
import type { AccessRepository } from '@/api/access/repository/AccessRepository'
import { AccessRepositoryImpl } from '@/api/access/repository/AccessRepository'
import {
	type UpdateOneById as UpdateOneAccessById,
	UpdateImpl as UpdateOneAccessByIdImpl,
} from '@/api/access/usecase/updateOneById'

const container: Container = new Container()

container.bind<AxiosInstance>(identifiers.httpClient).toConstantValue(httpClient)

container.bind<ProjectRepository>(identifiers.projectRepository).to(ProjectRepositoryImpl)
container.bind<GetOneProjectById>(identifiers.getOneProjectById).to(GetOneProjectByIdImpl)
container.bind<GetAllProjects>(identifiers.getAllProjects).to(GetAllProjectsImpl)
container.bind<CreateProject>(identifiers.createProject).to(CreateProjectImpl)
container.bind<UpdateOneProjectById>(identifiers.updateOneProjectById).to(UpdateOneProjectByIdImpl)
container.bind<DeleteOneProjectById>(identifiers.deleteOneProjectById).to(DeleteOneProjectByIdImpl)
container.bind<GetAllAccessesById>(identifiers.getAllAccessesById).to(GetAllAccessesImpl)
container.bind<CreateAccessById>(identifiers.createAccessById).to(CreateAccessImpl)

container.bind<AccessRepository>(identifiers.accessRepository).to(AccessRepositoryImpl)
container.bind<UpdateOneAccessById>(identifiers.updateOneAccessById).to(UpdateOneAccessByIdImpl)

container.bind<AuthRepository>(identifiers.authRepository).to(AuthRepositoryImpl)
container.bind<Login>(identifiers.login).to(LoginImpl)
container.bind<Logout>(identifiers.logout).to(LogoutImpl)
container.bind<Registration>(identifiers.registration).to(RegistrationImpl)

container.bind<TokensRepository>(identifiers.tokensRepository).to(TokensRepositoryImpl)
container.bind<GetTokens>(identifiers.getTokens).to(GetTokensImpl)
container.bind<SetTokens>(identifiers.setTokens).to(SetTokensImpl)
container.bind<RemoveTokens>(identifiers.removeTokens).to(RemoveTokensImpl)

container.bind<UserRepository>(identifiers.userRepository).to(UserRepositoryImpl)
container.bind<GetInfo>(identifiers.getUserInfo).to(GetInfoImpl)

export { container }
