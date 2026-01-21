<script lang="ts" setup>
defineSlots<{
  title: (props: unknown) => unknown
  description: (props: unknown) => unknown
}>()
</script>

<template>
  <UPageHero
    :ui="{
      wrapper: 'text-left',
      title: 'sm:text-5xl font-extrabold tracking-[-1.5px]',
      description: 'sm:text-lg'
    }"
  >
    <template #title>
      <slot name="title" mdc-unwrap="p" />
    </template>
    <template #description>
      <slot name="description" mdc-unwrap="p" />
    </template>
  </UPageHero>
</template>
