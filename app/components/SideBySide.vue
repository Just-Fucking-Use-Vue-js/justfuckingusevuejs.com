<script lang="ts" setup>
defineSlots<{
  left: (props: {}) => any
  right: (props: {}) => any
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <slot
        name="left"
        mdc-unwrap="p"
      />
    </div>
    <div>
      <slot
        name="right"
        mdc-unwrap="p"
      />
    </div>
  </div>
</template>
