import type { Access } from '@/global/types/api/access/Access'

const getAccesses = () => {
	const data: Access[] = []
	for (let i = 0; i < 10; i++) {
		data.push({
			id: String(i),
			origin: 'https://music.yandex.ru',
			login: 'Mbalilyne35',
			password: 'root',
			type: 'SSH',
		})
	}
	return data
}

export default getAccesses
