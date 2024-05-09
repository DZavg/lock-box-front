import { type SeederRepository } from '@/shared/lib/seeder/repository/SeederRepository'
import { type Project } from '@/shared/model/types/Project/Project'
import { faker } from '@faker-js/faker'

export class ProjectsFactory implements SeederRepository {
	getOne(): Project {
		return {
			id: faker.string.uuid(),
			title: faker.internet.domainName(),
			domain: faker.internet.url(),
		}
	}

	getMany(count: number = 10): Project[] {
		const projects: Project[] = []

		for (let i = 0; i < count; i++) {
			projects.push(this.getOne())
		}

		return projects
	}
}
