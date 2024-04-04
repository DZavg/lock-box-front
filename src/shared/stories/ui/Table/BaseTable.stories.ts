import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTable from '@/shared/ui/Table/BaseTable.vue'
import BaseTableHead from '@/shared/ui/Table/BaseTableHead.vue'
import BaseTableBody from '@/shared/ui/Table/BaseTableBody.vue'
import CopyButtonIcon from '@/shared/ui/Button/CopyButtonIcon.vue'
import EditLinkIcon from '@/shared/ui/Link/EditLinkIcon.vue'
import DeleteButtonIcon from '@/shared/ui/Button/DeleteButtonIcon.vue'

const meta: Meta<typeof BaseTable> = {
	component: BaseTable,
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/JrFyfzV8shSxNFSTQdqb4J/password-storage?type=design&node-id=20-3748&mode=design&t=ykQhpj8W38LSOq4r-0',
		},
	},
}

export default meta
type Story = StoryObj<typeof BaseTable>

export const Fill: Story = {
	render: () => ({
		components: {
			BaseTable,
			BaseTableHead,
			BaseTableBody,
			CopyButtonIcon,
			EditLinkIcon,
			DeleteButtonIcon,
		},
		template: `
			<BaseTable>
				<BaseTableHead>
					<tr>
						<th>Тип доступа</th>
						<th>Адрес</th>
						<th>Логин</th>
					</tr>
				</BaseTableHead>
				<BaseTableBody>
					<tr>
						<td>SSH</td>
						<td>https://music.yandex.ru</td>
						<td>Mbalilyne35</td>
					</tr>
				</BaseTableBody>
			</BaseTable>
		`,
	}),
}
