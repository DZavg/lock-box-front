import type { SEO } from '@/shared/model/types/Seo/SEO'

export default function useSeo(seo: SEO) {
	const PROJECT_NAME = 'Lock Box'
	const title = typeof seo?.title === 'string' ? seo.title : ''

	document.title = `${title} | ${PROJECT_NAME}`
}
