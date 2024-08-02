<template>
  <BaseCard class="auth-tabs">
    <h1 class="h1-indent">
      Добро пожаловать
    </h1>
    <BaseTabs
      :active-tab-name="activeTabName"
      class="auth-tabs__wrapper"
    >
      <template #head>
        <BaseTabButton
          v-for="tab in AuthTabsData"
          :key="tab.name"
          :name="tab.name"
          @update-active-tab="updateActiveTab"
        >
          {{ tab.buttonText }}
        </BaseTabButton>
      </template>
      <template #body>
        <BaseTabContent
          v-for="tab in AuthTabsData"
          :key="tab.name"
          :name="tab.name"
        >
          <component
            :is="tab.component"
            @update-active-tab="updateActiveTab"
          />
        </BaseTabContent>
      </template>
    </BaseTabs>
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/ui/Card/BaseCard.vue'
import BaseTabs from '@/components/ui/Tabs/BaseTabs.vue'
import BaseTabButton from '@/components/ui/Tabs/BaseTabButton.vue'
import BaseTabContent from '@/components/ui/Tabs/BaseTabContent.vue'
import { AuthTabsName } from '@/global/types/ui/auth/AuthTabsName'
import { ref, type Ref } from 'vue'
import { AuthTabsData } from '@/global/data/auth/AuthTabsData'
import { useAuthStore } from '@/stores/auth'
import useRequest from '@/composables/useRequest'
import { RouteName } from '@/router/RouteName'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const userStore = useUserStore()

const { demoAccess } = authStore
const { getInfo } = userStore

const { execute } = useRequest()
const router = useRouter()

const activeTabName: Ref<string> = ref(AuthTabsName.Login)

const getDemoAccess = async () => {
	await execute(async () => {
		await demoAccess()
		await getInfo()
		await router.push(RouteName.Projects)
	})
}

const updateActiveTab = (name: string) => {
	if (!name) return
	if (name === AuthTabsName.DemoAccess) {
		getDemoAccess()
		return
	}
	activeTabName.value = name
}
</script>

<style lang="scss" scoped>
.auth-tabs {
	width: 100%;

	&__wrapper {
		&:deep(.base-tabs__head) {
			justify-content: space-between;
		}
	}
}
</style>
