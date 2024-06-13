<template>
  <div
    ref="select"
    v-click-outside="closeSelect"
    :class="{ ['select--active']: isActive && options.length }"
    class="select"
    tabindex="1"
    @keydown.esc="closeSelect"
    @keydown.enter="toggleDropdown"
  >
    <div
      ref="selectField"
      class="select__head"
    >
      <BaseLabel :label="label" />
      <div
        class="select__field"
        @click="toggleDropdown"
      >
        <span>{{ getTitleActiveOption }}</span>
        <DropdownButtonIcon
          :icon-color="iconColor"
          :is-active="isActive"
          class="select__dropdown-button"
        />
        <BaseOptionList
          ref="optionList"
          :class="{
            ['select__options_position_' + position]: !!position,
          }"
          class="select__options"
          @click.stop
        >
          <BaseOption
            v-for="option in options"
            :key="option.id"
            :is-active="optionIsActive(option)"
          >
            <BaseRadio
              v-model.prevent.stop="modelValue"
              :name="name"
              :title="option.title"
              :value="option.id"
              class="select__radio-button"
            />
          </BaseOption>
        </BaseOptionList>
      </div>
    </div>
    <BaseError :text="error" />
  </div>
</template>

<script lang="ts" setup>
import BaseRadio from '@/components/ui/Radio/BaseRadio.vue'
import { computed, ref, type Ref } from 'vue'
import { type Option } from '@/global/types/ui/option/Option'
import DropdownButtonIcon from '@/components/ui/Button/DropdownButtonIcon.vue'
import BaseLabel from '@/components/ui/Label/BaseLabel.vue'
import BaseError from '@/components/ui/Error/BaseError.vue'
import { Color } from '@/global/types/ui/color/Color'
import BaseOption from '@/components/ui/Option/BaseOption.vue'
import BaseOptionList from '@/components/ui/Option/BaseOptionList.vue'
import useSelect from '@/composables/useSelect'

interface Props {
	name?: string
	modelValue?: string
	label?: string
	error?: string
	options: Option[]
}

const props = withDefaults(defineProps<Props>(), {
	name: '',
	modelValue: '',
	label: '',
	error: '',
	options: () => [],
})

const { position, selectField, optionList, checkPosition } = useSelect()
const emits = defineEmits<(e: 'update:modelValue', value: string) => void>()
const isActive: Ref<boolean> = ref(false)

const modelValue = computed({
	get() {
		return props.modelValue
	},
	set(value: string) {
		toggleDropdown()
		emits('update:modelValue', String(value))
	},
})

const toggleDropdown = (): void => {
	if (isActive.value) {
		closeSelect()
		return
	}
	openSelect()
}

const openSelect = () => {
	checkPosition()
	isActive.value = true
}

const closeSelect = () => {
	isActive.value = false
}

const getTitleActiveOption = computed(
	() => props.options.find((item) => optionIsActive(item))?.title || 'Не выбрано',
)

const optionIsActive = (option: Option): boolean => {
	return option.id === modelValue.value
}

const iconColor = computed(() => {
	return isActive.value ? Color.BluePrimary : Color.White
})
</script>

<style lang="scss" scoped>
.select {
	display: inline-flex;
	width: 100%;
	flex-direction: column;
	gap: $indent-2xs;

	&__head {
		display: flex;
		flex-direction: column;
		gap: $indent-2xs;
	}

	&__field {
		position: relative;
		padding: 12px 44px 12px $indent-s;
		border: 1px solid transparent;
		border-radius: $border-radius-s;
		background-color: $color-dark-third;
		color: $color-white;
		cursor: pointer;
		user-select: none;
	}

	&__dropdown-button {
		position: absolute;
		top: 50%;
		right: $indent-s;
		transform: translateY(-50%);
	}

	&__options {
		position: absolute;
		left: 0;
		visibility: hidden;

		&_position {
			&_top {
				bottom: calc(100% + 8px);
			}

			&_bottom {
				top: calc(100% + 8px);
			}
		}
	}

	&__radio-button {
		padding: 12px $indent-s;
	}

	&--active {
		.select__field {
			border-color: $color-blue-primary;
		}

		.select__options {
			visibility: visible;
		}
	}
}
</style>
