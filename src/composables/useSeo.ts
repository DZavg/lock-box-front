import type { SEO } from '@/global/types/api/seo/SEO'

export default function useSeo(seo: SEO) {
	const PROJECT_NAME = 'Lock Box'
	const title = typeof seo?.title === 'string' ? seo.title : ''

	document.title = `${title} | ${PROJECT_NAME}`
}
