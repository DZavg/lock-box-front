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
import { Color } from '@/shared/model/types/Color/Color'

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

const iconColor = computed(() => (props.disabled ? Color.GrayThird : Color.White))
</script>

<style lang="scss" scoped></style>
