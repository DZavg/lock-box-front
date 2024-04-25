import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/app/router/routes/authRoutes'
import { projectRoutes } from '@/app/router/routes/projectRoutes'
import { specialRoutes } from '@/app/router/routes/specialRoutes'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [authRoutes, projectRoutes, specialRoutes],
})

export default router
