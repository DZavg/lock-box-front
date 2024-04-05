<template>
	<InputWithIcon v-bind="props">
		<BaseIcon :color="iconColor" :icon="iconSearch" :size="16" />
	</InputWithIcon>
</template>

<script lang="ts" setup>
import InputWithIcon from '@/shared/ui/Input/InputWithIcon.vue'
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import iconSearch from '@/shared/images/svg/icon-search.svg'
import { computed } from 'vue'
import { IconColor } from '@/shared/model/types/Icon/IconColor'

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

<style lang="scss" scoped></style>
