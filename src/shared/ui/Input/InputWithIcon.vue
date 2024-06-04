<template>
	<BaseInput ref="inputWithIcon" class="input-with-icon" v-bind="props" v-model="inputValue">
		<template #icon>
			<div class="input-with-icon__icon">
				<slot></slot>
			</div>
		</template>
	</BaseInput>
</template>

<script lang="ts" setup>
import { type InputTypeHTMLAttribute, ref, type Ref } from 'vue'
import BaseInput from '@/shared/ui/Input/BaseInput.vue'

interface Props {
	name: string
	label?: string
	placeholder?: string
	error?: string
	type?: InputTypeHTMLAttribute
	disabled?: boolean
	autocomplete?: string
}

const props = defineProps<Props>()
defineEmits<(e: 'update:modelValue', value: string) => void>()

const inputValue = defineModel('modelValue', { default: '' })
const inputWithIcon: Ref<InstanceType<typeof BaseInput> | null> = ref(null)

defineExpose({
	inputWithIcon,
})
</script>

<style lang="scss" scoped>
.input-with-icon {
	&:deep(.input__wrapper) {
		position: relative;

		input {
			padding-right: 44px;
		}
	}

	&__icon {
		position: absolute;
		top: 50%;
		right: $indent-s;
		font-size: 0;
		line-height: 0;
		transform: translateY(-50%);
	}
}
</style>
