import type { TableField } from '@/global/types/ui/table/Table'
import type { Access } from '@/api/access/entity/Access'

export const accessesTableFieldsData: TableField<keyof Access>[] = [
	{
		label: 'Тип доступа',
		key: 'type_name',
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
