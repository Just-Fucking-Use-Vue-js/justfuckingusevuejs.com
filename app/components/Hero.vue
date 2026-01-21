<script lang="ts" setup>
defineSlots<{
  title: (props: unknown) => unknown
  description: (props: unknown) => unknown
  links: (props: unknown) => unknown
}>()
</script>

<template>
  <UPageHero
    :ui="{
      wrapper: 'text-center',
      title: 'sm:text-5xl font-extrabold tracking-[-1.5px]',
      description: 'sm:text-lg',
    }"
  >
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
    <template #links>
      <slot name="links" />
    </template>
  </UPageHero>
</template>
