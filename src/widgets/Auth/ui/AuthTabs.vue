<template>
	<AuthCard class="auth-tabs" title="Добро пожаловать">
		<BaseTabs :active-tab-name="activeTabName" class="auth-tabs__wrapper">
			<template #head>
				<BaseTabButton
					v-for="tab in AuthTabsData"
					:key="tab.name"
					:name="tab.name"
					@updateActiveTab="updateActiveTab"
				>
					{{ tab.buttonText }}
				</BaseTabButton>
			</template>
			<template #body>
				<BaseTabContent v-for="tab in AuthTabsData" :key="tab.name" :name="tab.name">
					<component :is="tab.component" />
				</BaseTabContent>
			</template>
		</BaseTabs>
	</AuthCard>
</template>

<script lang="ts" setup>
import AuthCard from '@/entities/Auth/ui/AuthCard.vue'
import BaseTabs from '@/shared/ui/Tabs/BaseTabs.vue'
import BaseTabButton from '@/shared/ui/Tabs/BaseTabButton.vue'
import BaseTabContent from '@/shared/ui/Tabs/BaseTabContent.vue'
import { AuthTabsNames } from '@/widgets/Auth/types/AuthTabsNames'
import { ref, type Ref } from 'vue'
import { AuthTabsData } from '@/widgets/Auth/data/AuthTabsData'

const activeTabName: Ref<string> = ref(AuthTabsNames.Login)

const updateActiveTab = (name: string) => {
	if (name === AuthTabsNames.DemoAccess) {
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
