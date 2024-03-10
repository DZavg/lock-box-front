<template>
	<div
		v-click-outside="toggleDropdown"
		class="select"
		ref="select"
		:class="{ ['select--active']: isActive && options.length }"
		tabindex="1"
		@keydown.esc="toggleDropdown()"
		@keydown.enter="toggleDropdown(!isActive)"
	>
		<div class="select__head">
			<BaseLabel :label="label" />
			<div class="select__field" @click="toggleDropdown(!isActive)">
				<span>{{ getOptionById(inputValue)?.title }}</span>
				<DropdownButtonIcon class="select__dropdown-button" :icon-color="iconColor" />
				<div
					ref="selectOptions"
					class="select__options"
					:class="{
						['select__options_position_' + position]: !!position,
					}"
				>
					<div class="select__list" tabindex="1">
						<BaseRadio
							v-for="option in options"
							:key="option.id"
							class="select__item"
							:class="{ ['select__item--active']: optionIsActive(option.id) }"
							v-model="inputValue"
							:value="option.id"
							:name="name"
						>
							{{ option.title }}
						</BaseRadio>
					</div>
				</div>
			</div>
		</div>
		<BaseError :text="error" />
	</div>
</template>

<script lang="ts" setup>
import BaseRadio from '@/shared/ui/Radio/BaseRadio.vue'
import { computed, onMounted, ref, type Ref } from 'vue'
import { type Select } from '@/shared/types/Select/Select'
import DropdownButtonIcon from '@/shared/ui/Button/DropdownButtonIcon.vue'
import BaseLabel from '@/shared/ui/Label/BaseLabel.vue'
import BaseError from '@/shared/ui/Error/BaseError.vue'
import { IconColor } from '@/shared/types/Icon/IconColor'
import { Position } from '@/app/types/AbsolutePositioning/Position'
import useAbsolutePositioning from '@/app/composable/useAbsolutePositioning'

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
	display: inline-flex;
	flex-direction: column;
	gap: $indent-2xs;
	max-width: 288px;
	width: 100%;

	&--active {
		.select__field {
			border-color: $color-blue-primary;
		}
		.select__dropdown-button {
			&:deep(svg) {
				rotate: -90deg;
			}
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
		font-size: 0;
		line-height: 0;
		&:deep(svg) {
			transition: rotate 0.1s ease-in;
		}
	}

	&__options {
		width: 100%;
		position: absolute;
		left: 0;
		border-radius: $border-radius-s;
		background-color: $color-dark-third;
		padding: $indent-2xs;
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

	&__list {
		@include scrollbar();
		overscroll-behavior: contain;
		overflow: hidden auto;
		display: flex;
		flex-direction: column;
		gap: $indent-2xs;
		max-height: 196px;
		padding-right: $indent-2xs;
	}

	&__item {
		padding: 12px $indent-s;
		border-radius: $border-radius-xs;
		transition: background-color 0.1s ease-in;

		&--active,
		&:hover,
		&:focus {
			background-color: $color-dark-secondary;
		}
	}
}
</style>
