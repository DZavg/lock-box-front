import { computed } from 'vue'

export default function (link: string | object) {
	const isExternalLink = computed(() => {
		return typeof link === 'string'
	})

	return { isExternalLink }
}
