<template>
  <SearchInput v-model="inputValue" />
</template>

<script setup lang="ts">
import SearchInput from '@/components/ui/Input/SearchInput.vue'
import { useProjectStore } from '@/stores/project'
import useRequest from '@/composables/useRequest'
import debounce from '@/lib/debounce'
import { useRoute, useRouter } from 'vue-router'
import { RouteName } from '@/router/RouteName'
import { computed } from 'vue'

const { execute } = useRequest()
const router = useRouter()
const route = useRoute()

const projectStore = useProjectStore()
const { getAll } = projectStore

const inputValue = computed({
	get() {
		return String(route.query.q || '')
	},
	set(value) {
		router.push({ name: RouteName.Projects, query: { q: value } })
		searchProjectsWithDebounce(value)
	},
})

const searchProjects = (query: string) => {
	execute(async () => await getAll(query))
}

const searchProjectsWithDebounce = debounce((query: string) => searchProjects(query))
</script>

<style scoped lang="scss"></style>
