import { defineComponent, type Ref } from 'vue'

interface UpdateActiveTabName {
	(name: string): void
}

export interface TabsData {
	activeTabName: Ref<string>
	updateActiveTabName?: UpdateActiveTabName
}

export interface TabData {
	name: string
	buttonText: string
	component: ReturnType<typeof defineComponent>
}
