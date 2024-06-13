import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/router/routes/authRoutes'
import { projectRoutes } from '@/router/routes/projectRoutes'
import { specialRoutes } from '@/router/routes/specialRoutes'
import authGuard from '@/router/guard/authGuard'
import seoHook from '@/router/hook/seoHook'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [authRoutes, projectRoutes, specialRoutes],
})

router.beforeEach(authGuard)
router.afterEach(seoHook)

export default router
