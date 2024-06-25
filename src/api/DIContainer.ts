import 'reflect-metadata'
import { Container } from 'inversify'
import { type AxiosInstance } from 'axios'
import { httpClient } from '@/api/client/httpClient'
import {
	type ProjectRepository,
	ProjectRepositoryImpl,
} from '@/api/project/repository/ProjectRepository'
import { type GetOneById, GetOneByIdImpl } from '@/api/project/usecase/getOneById'
import { identifiers } from '@/api/constants/identifiers'
import { type GetAll, GetAllImpl } from '@/api/project/usecase/getAll'
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

const container: Container = new Container()

container.bind<AxiosInstance>(identifiers.httpClient).toConstantValue(httpClient)

container.bind<ProjectRepository>(identifiers.projectRepository).to(ProjectRepositoryImpl)
container.bind<GetOneById>(identifiers.getOneProjectById).to(GetOneByIdImpl)
container.bind<GetAll>(identifiers.getAllProjects).to(GetAllImpl)

container.bind<AuthRepository>(identifiers.authRepository).to(AuthRepositoryImpl)
container.bind<Login>(identifiers.login).to(LoginImpl)
container.bind<Logout>(identifiers.logout).to(LogoutImpl)

container.bind<TokensRepository>(identifiers.tokensRepository).to(TokensRepositoryImpl)
container.bind<GetTokens>(identifiers.getTokens).to(GetTokensImpl)
container.bind<SetTokens>(identifiers.setTokens).to(SetTokensImpl)
container.bind<RemoveTokens>(identifiers.removeTokens).to(RemoveTokensImpl)

container.bind<UserRepository>(identifiers.userRepository).to(UserRepositoryImpl)
container.bind<GetInfo>(identifiers.getUserInfo).to(GetInfoImpl)

export { container }
