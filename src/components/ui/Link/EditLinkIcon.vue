<template>
  <BaseLinkIcon
    :icon="iconEdit"
    :link="link"
  />
</template>

<script lang="ts" setup>
import iconEdit from '@/shared/images/svg/icon-edit.svg'
import BaseLinkIcon from '@/components/ui/Link/BaseLinkIcon.vue'

interface Props {
	link: string | object
}

withDefaults(defineProps<Props>(), {
	link: '',
})
</script>

<style lang="scss" scoped></style>
