import type { Tokens } from '@/api/tokens/entity/Tokens'
import type { TokensRepository } from '@/api/tokens/repository/TokensRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'

export interface GetTokens {
	readonly tokensRepository: TokensRepository
	execute(): Tokens
}

@injectable()
export class GetTokensImpl implements GetTokens {
	@inject(identifiers.tokensRepository)
	readonly tokensRepository!: TokensRepository
	execute(): Tokens {
		return this.tokensRepository.getTokens()
	}
}
