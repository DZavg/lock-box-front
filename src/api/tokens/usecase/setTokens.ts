import type { Tokens } from '@/api/tokens/entity/Tokens'
import type { TokensRepository } from '@/api/tokens/repository/TokensRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'

export interface SetTokens {
	readonly tokensRepository: TokensRepository
	execute(tokens: Tokens): void
}

@injectable()
export class SetTokensImpl implements SetTokens {
	@inject(identifiers.tokensRepository)
	readonly tokensRepository!: TokensRepository
	execute(tokens: Tokens): void {
		return this.tokensRepository.setTokens(tokens)
	}
}
