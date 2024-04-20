import { shallowRef } from 'vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'

const getTableFields = () => {
	const tableFields = []
	for (let i = 0; i < 3; i++) {
		tableFields.push({
			label: 'Тип доступа',
			key: 'title',
			component: {
				name: shallowRef(BaseInput),
				props: (field: any, data: any) => {
					return {
						value: data.domain,
						name: data.name,
						placeholder: data.title,
					}
				},
				handlers: () => {
					return {
						click: () => {
							console.log('click')
						},
					}
				},
			},
		})
	}
	return tableFields
}

export default getTableFields
