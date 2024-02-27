<template>
	<RouterLink class="link-icon" type="button" :to="link">
		<BaseIcon :icon="icon" :size="size" />
	</RouterLink>
</template>

<script lang="ts" setup>
import BaseIcon from '@/shared/ui/Icon/BaseIcon.vue'

interface Props {
	link: string | object
	icon: string
	size?: string | number
}

withDefaults(defineProps<Props>(), {
	link: '',
	icon: '',
	size: 24,
})

defineEmits<{ (e: 'onClick'): void }>()
</script>

<style lang="scss" scoped>
.link-icon {
	line-height: 0;

	svg {
		transition: opacity 0.15s ease-in;
	}

	&:hover {
		svg {
			opacity: 0.7;
		}
	}
}
</style>
