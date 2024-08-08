export const identifiers = {
	httpClient: Symbol.for('HttpClient'),

	projectRepository: Symbol.for('ProjectRepository'),
	getOneProjectById: Symbol.for('GetOneProjectById'),
	getAllProjects: Symbol.for('GetAllProjects'),
	createProject: Symbol.for('CreateProject'),
	updateOneProjectById: Symbol.for('UpdateOneProjectById'),
	deleteOneProjectById: Symbol.for('DeleteOneProjectById'),
	getAllAccessesById: Symbol.for('GetAllAccessesById'),
	createAccessById: Symbol.for('CreateAccessById'),

	accessRepository: Symbol.for('AccessRepository'),
	updateOneAccessById: Symbol.for('UpdateOneAccessById'),
	deleteOneAccessById: Symbol.for('DeleteOneAccessById'),
	getPasswordById: Symbol.for('GetPasswordById'),
	getAllTypes: Symbol.for('GetAllTypes'),

	authRepository: Symbol.for('AuthRepository'),
	login: Symbol.for('Login'),
	logout: Symbol.for('Logout'),
	registration: Symbol.for('Registration'),
	recoveryPassword: Symbol.for('RecoveryPassword'),
	demoAccess: Symbol.for('DemoAccess'),

	tokensRepository: Symbol.for('TokensRepository'),
	getTokens: Symbol.for('GetTokens'),
	setTokens: Symbol.for('SetTokens'),
	removeTokens: Symbol.for('RemoveTokens'),

	userRepository: Symbol.for('UserRepository'),
	getUserInfo: Symbol.for('GetUserInfo'),

	confirmationCodeRepository: Symbol.for('ConfirmationCodeRepository'),
	getOneCode: Symbol.for('GetOneCode'),
}
