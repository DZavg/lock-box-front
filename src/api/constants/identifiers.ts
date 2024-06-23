export const identifiers = {
	httpClient: Symbol.for('HttpClient'),

	projectRepository: Symbol.for('ProjectRepository'),
	getOneProjectById: Symbol.for('GetOneProjectById'),
	getAllProjects: Symbol.for('GetAllProjects'),

	authRepository: Symbol.for('AuthRepository'),
	login: Symbol.for('Login'),

	tokensRepository: Symbol.for('TokensRepository'),
	getTokens: Symbol.for('GetTokens'),
	setTokens: Symbol.for('SetTokens'),
	removeTokens: Symbol.for('RemoveTokens'),
}
