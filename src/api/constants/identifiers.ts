export const identifiers = {
	httpClient: Symbol.for('HttpClient'),

	projectRepository: Symbol.for('ProjectRepository'),
	getOneProjectById: Symbol.for('GetOneProjectById'),
	getAllProjects: Symbol.for('GetAllProjects'),
	createProject: Symbol.for('CreateProject'),
	updateProject: Symbol.for('UpdateProject'),
	deleteOneProjectById: Symbol.for('DeleteOneProjectById'),
	getAllAccesses: Symbol.for('GetAllAccesses'),
	createAccess: Symbol.for('CreateAccess'),

	authRepository: Symbol.for('AuthRepository'),
	login: Symbol.for('Login'),
	logout: Symbol.for('Logout'),
	registration: Symbol.for('Registration'),

	tokensRepository: Symbol.for('TokensRepository'),
	getTokens: Symbol.for('GetTokens'),
	setTokens: Symbol.for('SetTokens'),
	removeTokens: Symbol.for('RemoveTokens'),

	userRepository: Symbol.for('UserRepository'),
	getUserInfo: Symbol.for('GetUserInfo'),
}
