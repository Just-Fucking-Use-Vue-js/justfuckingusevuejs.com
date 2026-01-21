<script lang="ts" setup>
defineSlots<{
  title: (props: {}) => any
  description: (props: {}) => any
}>()
</script>

<template>
  <div>
    <h1 class="">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <p class="">
      <slot
        name="description"
        mdc-unwrap="p"
      />
    </p>
  </div>
</template>
