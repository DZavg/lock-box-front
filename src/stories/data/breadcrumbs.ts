import type { Breadcrumb } from '@/model/types/Breadcrumbs/Breadcrumb'

const getBreadcrumbs = () => {
	const breadcrumbs: Breadcrumb[] = []
	for (let i = 0; i < 5; i++) {
		breadcrumbs.push({
			title: 'Главная ' + i,
			link: '/',
		})
	}
	return breadcrumbs
}

export default getBreadcrumbs
