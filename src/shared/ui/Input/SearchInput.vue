<template>
	<InputWithIcon v-bind="props" v-model="inputValue">
		<CloseButtonIcon v-if="inputValue" :size="IconSize.S" @onClick="resetValue" />
		<BaseIcon v-else :color="iconColor" :icon="iconSearch" :size="IconSize.S" />
	</InputWithIcon>
</template>

<script lang="ts" setup>
import InputWithIcon from '@/shared/ui/Input/InputWithIcon.vue'
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'
import iconSearch from '@/shared/images/svg/icon-search.svg'
import { computed } from 'vue'
import { Color } from '@/shared/model/types/Color/Color'
import { IconSize } from '@/shared/model/types/Icon/IconSize'
import CloseButtonIcon from '@/shared/ui/Button/CloseButtonIcon.vue'

interface Props {
	name?: string
	placeholder?: string
	disabled?: boolean
	autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
	name: 'search',
	placeholder: 'Поиск',
	disabled: false,
	autocomplete: 'off',
})

const iconColor = computed(() => (props.disabled ? Color.GrayThird : Color.White))

const inputValue = defineModel('modelValue', { default: '' })

const resetValue = () => {
	inputValue.value = ''
}
</script>

<style lang="scss" scoped></style>
