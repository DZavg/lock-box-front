import { type Component, type ShallowRef } from 'vue'

interface ListFieldComponent {
	name: ShallowRef<Component> | string
	props: Function
	handlers: Function
}

export interface ListField {
	label?: string
	key: string
	component?: ListFieldComponent
}

export interface ListFieldData {
	[key: string]: any
}
