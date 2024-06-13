<template>
  <AuthCard
    class="auth-tabs"
    title="Добро пожаловать"
  >
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
          <component :is="tab.component" />
        </BaseTabContent>
      </template>
    </BaseTabs>
  </AuthCard>
</template>

<script lang="ts" setup>
import AuthCard from '@/components/Auth/AuthCard.vue'
import BaseTabs from '@/components/ui/Tabs/BaseTabs.vue'
import BaseTabButton from '@/components/ui/Tabs/BaseTabButton.vue'
import BaseTabContent from '@/components/ui/Tabs/BaseTabContent.vue'
import { AuthTabsName } from '@/global/types/ui/auth/AuthTabsName'
import { ref, type Ref } from 'vue'
import { AuthTabsData } from '@/global/mock/AuthTabsData'

const activeTabName: Ref<string> = ref(AuthTabsName.Login)

const updateActiveTab = (name: string) => {
	if (name === AuthTabsName.DemoAccess) {
		return
	}
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
