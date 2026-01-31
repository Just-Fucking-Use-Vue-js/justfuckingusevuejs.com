<script setup lang="ts">
const items = [
  {
    label: "How to use",
    icon: "i-lucide-pencil",
    slot: "use",
  },
  {
    label: "How to test",
    icon: "i-lucide-test-tube-diagonal",
    slot: "test",
  },
];
</script>
<template>
  <UTabs :items="items">
    <template #use>
      <slot />
    </template>

    <template #test>
      <slot name="test" />
    </template>
  </UTabs>
</template>
