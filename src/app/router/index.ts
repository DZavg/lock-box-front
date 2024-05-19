import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/app/router/routes/authRoutes'
import { projectRoutes } from '@/app/router/routes/projectRoutes'
import { specialRoutes } from '@/app/router/routes/specialRoutes'
import authGuard from '@/app/router/guard/authGuard'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [authRoutes, projectRoutes, specialRoutes],
})

router.beforeEach(authGuard)

export default router
