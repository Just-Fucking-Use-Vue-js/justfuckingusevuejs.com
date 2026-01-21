<script lang="ts" setup>
defineSlots<{
  title: (props: unknown) => unknown
  description: (props: unknown) => unknown
  links: (props: unknown) => unknown
}>()
</script>

<template>
  <section class="hero">
    <h1>
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <p class="hero-description">
      <slot
        name="description"
        mdc-unwrap="p"
      />
    </p>
    <div class="hero-links">
      <slot name="links" />
    </div>
  </section>
</template>
