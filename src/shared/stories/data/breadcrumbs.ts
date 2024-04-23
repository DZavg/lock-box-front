const getBreadcrumbs = () => {
	const breadcrumbs = []
	for (let i = 0; i < 5; i++) {
		breadcrumbs.push({
			title: 'Главная ' + i,
			link: '/',
		})
	}
	return breadcrumbs
}

export default getBreadcrumbs
