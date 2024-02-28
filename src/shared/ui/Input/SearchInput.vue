<template>
	<BaseInput class="search-input" v-bind="props">
		<BaseIcon class="search-input__icon" :icon="iconSearch" :color="iconColor" :size="16" />
	</BaseInput>
</template>

<script lang="ts" setup>
import BaseInput from '@/shared/ui/Input/BaseInput.vue'
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import iconSearch from '@/shared/images/svg/icon-search.svg'
import { computed } from 'vue'
import { IconColor } from '@/shared/types/Icon/IconColor'

interface Props {
	name?: string
	modelValue?: string
	placeholder?: string
	disabled?: boolean
	autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
	name: 'search',
	modelValue: '',
	placeholder: 'Поиск',
	disabled: false,
	autocomplete: 'off',
})

const iconColor = computed(() => (props.disabled ? IconColor.GrayThird : IconColor.White))
</script>

<style lang="scss" scoped>
.search-input {
	&:deep(.input__wrapper) {
		position: relative;

		input {
			padding-right: 44px;
		}
	}

	&__icon {
		position: absolute;
		right: $indent-s;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
