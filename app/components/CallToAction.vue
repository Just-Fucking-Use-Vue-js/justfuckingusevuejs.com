<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

const props = defineProps<{
  links: ButtonProps[]
}>()
defineSlots<{
  title: (props: any) => any
  description: (props: any) => any
}>()
</script>

<template>
  <UPageCTA :links="props.links">
    <template #title>
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </template>
    <template #description>
      <slot
        name="description"
        mdc-unwrap="p"
      />
    </template>
  </UPageCTA>
</template>
