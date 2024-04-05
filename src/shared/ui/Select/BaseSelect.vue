<template>
	<div
		ref="select"
		v-click-outside="toggleDropdown"
		:class="{ ['select--active']: isActive && options.length }"
		class="select"
		tabindex="1"
		@keydown.esc="toggleDropdown()"
		@keydown.enter="toggleDropdown(!isActive)"
	>
		<div class="select__head">
			<BaseLabel :label="label" />
			<div class="select__field" @click="toggleDropdown(!isActive)">
				<span>{{ getOptionById(inputValue)?.title }}</span>
				<DropdownButtonIcon
					:icon-color="iconColor"
					:is-active="isActive"
					class="select__dropdown-button"
				/>
				<BaseOptionList
					ref="selectOptions"
					:class="{
						['select__options_position_' + position]: !!position,
					}"
					class="select__options"
					tabindex="1"
				>
					<BaseOption
						v-for="option in options"
						:key="option.id"
						:is-active="optionIsActive(option.id)"
					>
						<BaseRadio v-model="inputValue" :name="name" :value="option.id">
							{{ option.title }}
						</BaseRadio>
					</BaseOption>
				</BaseOptionList>
			</div>
		</div>
		<BaseError :text="error" />
	</div>
</template>

<script lang="ts" setup>
import BaseRadio from '@/shared/ui/Radio/BaseRadio.vue'
import { computed, onMounted, ref, type Ref } from 'vue'
import { type Select } from '@/shared/model/types/Select/Select'
import DropdownButtonIcon from '@/shared/ui/Button/DropdownButtonIcon.vue'
import BaseLabel from '@/shared/ui/Label/BaseLabel.vue'
import BaseError from '@/shared/ui/Error/BaseError.vue'
import { IconColor } from '@/shared/model/types/Icon/IconColor'
import { Position } from '@/shared/model/types/Position/Position'
import useAbsolutePositioning from '@/shared/lib/composable/useAbsolutePositioning'
import BaseOption from '@/shared/ui/Option/BaseOption.vue'
import BaseOptionList from '@/shared/ui/Option/BaseOptionList.vue'

interface Props {
	name?: string
	modelValue?: string
	label?: string
	error?: string
	options: Array<Select>
}

const props = withDefaults(defineProps<Props>(), {
	name: '',
	modelValue: '',
	label: '',
	error: '',
	options: () => [],
})

const emits = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const isActive: Ref<boolean> = ref(false)
const select: Ref<HTMLElement | null> = ref(null)
const selectOptions: Ref<HTMLElement | null> = ref(null)

const inputValue = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		toggleDropdown(false)
		emits('update:modelValue', value)
	},
})

const optionTemplate: Select = {
	id: '',
	title: 'Не выбрано',
}

const getOptionById = (id: string): Select => {
	return props.options.find((item) => item.id === id) || optionTemplate
}

const setFirstOption = (): void => {
	inputValue.value = props.options[0].id
}

const toggleDropdown = (value: boolean = false): void => {
	isActive.value = value
}

const optionIsActive = (id: string): boolean => {
	return id === inputValue.value
}

const iconColor = computed(() => {
	return isActive.value ? IconColor.BluePrimary : IconColor.White
})

const { position } = useAbsolutePositioning(select, selectOptions, Position.Bottom, [
	Position.Top,
	Position.Bottom,
])

onMounted(() => {
	setFirstOption()
})
</script>

<style lang="scss" scoped>
.select {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: $indent-2xs;

	&--active {
		.select__field {
			border-color: $color-blue-primary;
		}

		.select__options {
			visibility: visible;
		}
	}

	&__head {
		display: flex;
		flex-direction: column;
		gap: $indent-2xs;
	}

	&__field {
		position: relative;
		padding: 12px 44px 12px $indent-s;
		border: 1px solid transparent;
		background-color: $color-dark-third;
		border-radius: $border-radius-s;
		color: $color-white;
		cursor: pointer;
		user-select: none;
	}

	&__dropdown-button {
		position: absolute;
		right: $indent-s;
		top: 50%;
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
}
</style>
