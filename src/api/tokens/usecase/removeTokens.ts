import type { TokensRepository } from '@/api/tokens/repository/TokensRepository'
import { inject, injectable } from 'inversify'
import { identifiers } from '@/api/constants/identifiers'

export interface RemoveTokens {
	readonly tokensRepository: TokensRepository
	execute(): void
}

@injectable()
export class RemoveTokensImpl implements RemoveTokens {
	@inject(identifiers.tokensRepository)
	readonly tokensRepository!: TokensRepository
	execute(): void {
		return this.tokensRepository.removeTokens()
	}
}
