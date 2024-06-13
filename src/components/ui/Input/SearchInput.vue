<template>
  <InputWithIcon
    ref="searchInput"
    v-bind="props"
    v-model="inputValue"
  >
    <CloseButtonIcon
      v-if="inputValue"
      :size="IconSize.S"
      @on-click="resetValue"
    />
    <BaseIcon
      v-else
      :color="iconColor"
      :icon="iconSearch"
      :size="IconSize.S"
    />
  </InputWithIcon>
</template>

<script lang="ts" setup>
import InputWithIcon from '@/components/ui/Input/InputWithIcon.vue'
import BaseIcon from '@/components/ui/Icon/BaseIcon.vue'
import iconSearch from '@/assets/images/svg/icon-search.svg'
import { computed, type Ref, ref } from 'vue'
import { Color } from '@/model/types/Color/Color'
import { IconSize } from '@/model/types/Icon/IconSize'
import CloseButtonIcon from '@/components/ui/Button/CloseButtonIcon.vue'

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
const inputValue = defineModel<string>('modelValue', { default: '' })
const searchInput: Ref<InstanceType<typeof InputWithIcon> | null> = ref(null)

const resetValue = () => {
	inputValue.value = ''
	searchInput.value?.inputWithIcon?.input?.focus()
}
</script>

<style lang="scss" scoped></style>
