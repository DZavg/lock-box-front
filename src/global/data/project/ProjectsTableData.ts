import type { TableField } from '@/global/types/ui/table/Table'
import type { Project } from '@/api/project/entity/Project'

export const projectsTableFieldsData: TableField<keyof Project>[] = [
	{
		label: 'Название проекта',
		key: 'title',
	},
	{
		label: 'Домен',
		key: 'domain',
	},
]
