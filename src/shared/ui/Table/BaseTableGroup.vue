<template>
	<div class="table-group">
		<BaseTwoColumnGrid v-if="isMobile">
			<slot name="cards"></slot>
		</BaseTwoColumnGrid>
		<BaseTable v-else>
			<template #body>
				<slot name="body"></slot>
			</template>
			<template #head>
				<slot name="head"></slot>
			</template>
		</BaseTable>
	</div>
</template>

<script setup lang="ts">
import BaseTable from '@/shared/ui/Table/BaseTable.vue'
import useScreen from '@/app/composable/useScreen'
import BaseTableCardList from '@/shared/ui/Table/BaseTableCardList.vue'
import BaseTwoColumnGrid from '@/shared/ui/Grid/BaseTwoColumnGrid.vue'

const { isMobile } = useScreen()
</script>

<style scoped lang="scss"></style>
