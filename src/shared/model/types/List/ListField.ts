import { type Component } from 'vue'

interface ListFieldComponent {
	name: Component | string
	props?: Function
	handlers?: Function
}

export interface ListField {
	label?: string
	key: string
	component?: ListFieldComponent
}

export interface ListFieldData {
	[key: string]: any
}
