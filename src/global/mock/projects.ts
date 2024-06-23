import type { Project } from '@/api/project/entity/Project'

const getProjects = () => {
	const data: Project[] = []
	for (let i = 0; i < 10; i++) {
		data.push({
			id: String(i),
			title: 'Бренд одежды "IVOLGA',
			domain: 'ivolga.moscow',
		})
	}
	return data
}

export default getProjects
