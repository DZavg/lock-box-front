<template>
	<component :is="getComponent()" v-bind="getComponentProps()" v-on="getComponentHandlers()">
		{{ data[field.key] }}
	</component>
</template>

<script lang="ts" setup>
import { type ListField, type ListFieldData } from '@/shared/model/types/List/ListField'

interface Props {
	field: ListField
	data: ListFieldData
}

const props = withDefaults(defineProps<Props>(), {
	field: () => ({
		key: '',
		label: '',
		component: {
			name: '',
			handlers: () => {},
			props: () => {},
		},
	}),
})

const getComponentProps = () => {
	if (typeof props.field.component?.props === 'function')
		return props.field.component?.props(props.field, props.data)
	return {}
}

const getComponentHandlers = () => {
	if (typeof props.field.component?.handlers === 'function')
		return props.field.component?.handlers(props.field, props.data)
	return {}
}

const getComponent = () => {
	return props.field.component?.name || 'p'
}
</script>

<style scoped></style>
