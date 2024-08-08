import { defineStore } from 'pinia'
import { container } from '@/api/DIContainer'
import { identifiers } from '@/api/constants/identifiers'
import type { GetOne } from '@/api/confirmation-code/usecase/getOne'

const getOne = container.get<GetOne>(identifiers.getOneCode)

export const useConfirmationCodeStore = defineStore('confirmationCode', {
	actions: {
		async getOne(email: string) {
			return await getOne.execute(email)
		},
	},
})
