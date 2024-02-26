import { type Ref } from 'vue'

interface UpdateActiveTabIndex {
	(index: number): void
}

export interface TabsData {
	activeTabIndex: Ref<number>
	updateActiveTabIndex?: UpdateActiveTabIndex
}
