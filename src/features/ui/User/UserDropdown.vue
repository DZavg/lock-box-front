<template>
	<BasePopupOnMouseOver :is-active="isActive" class="user-dropdown">
		<template #head>
			<div class="user-dropdown__head">
				<p>{{ name }}</p>
				<DropdownButtonIcon @click="toggleDropdown" />
			</div>
		</template>
		<template #body>
			<BaseOptionList>
				<BaseOption>
					<button class="body_p">Редактировать профиль</button>
				</BaseOption>
				<BaseOption>
					<button class="body_p">Выйти</button>
				</BaseOption>
			</BaseOptionList>
		</template>
	</BasePopupOnMouseOver>
</template>

<script lang="ts" setup>
import DropdownButtonIcon from '@/shared/ui/Button/DropdownButtonIcon.vue'
import BaseOptionList from '@/shared/ui/Option/BaseOptionList.vue'
import BaseOption from '@/shared/ui/Option/BaseOption.vue'
import { ref } from 'vue'
import BasePopupOnMouseOver from '@/shared/ui/Popup/BasePopupOnMouseOver.vue'

interface Props {
	name: string
}

withDefaults(defineProps<Props>(), {
	name: '',
})

const isActive: any = ref(false)

const toggleDropdown = () => {
	isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
.user-dropdown {
	position: relative;
	display: inline-block;
	max-width: 239px;
	width: 100%;

	&__head {
		display: flex;
		align-items: center;
		gap: $indent-xs;
	}
}
</style>
