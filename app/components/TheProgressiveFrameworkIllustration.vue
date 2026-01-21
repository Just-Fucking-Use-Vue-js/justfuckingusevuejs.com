<script lang="ts" setup>
const count = ref(1)
</script>

<template>
  <div class="flex justify-center align-center">
    <UButton
      :label="`Count ` + count"
      @click="count++"
    />
  </div>
</template>
