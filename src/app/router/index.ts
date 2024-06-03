import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/app/router/routes/authRoutes'
import { projectRoutes } from '@/app/router/routes/projectRoutes'
import { specialRoutes } from '@/app/router/routes/specialRoutes'
import authGuard from '@/app/router/guard/authGuard'
import seoHook from '@/app/router/hook/seoHook'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [authRoutes, projectRoutes, specialRoutes],
})

router.beforeEach(authGuard)
router.afterEach(seoHook)

export default router
