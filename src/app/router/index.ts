import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/app/router/routes/authRoutes'
import { projectRoutes } from '@/app/router/routes/projectRoutes'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [authRoutes, projectRoutes],
})

export default router
