import type { TableField } from '@/global/types/ui/table/Table'
import type { Access } from '@/global/types/api/access/Access'

export const accessesTableFieldsData: TableField<keyof Access>[] = [
	{
		label: 'Тип доступа',
		key: 'type',
	},
	{
		label: 'Адрес',
		key: 'origin',
	},
	{
		label: 'Логин',
		key: 'login',
	},
]
