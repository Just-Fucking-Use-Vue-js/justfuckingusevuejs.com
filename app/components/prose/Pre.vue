<script lang="ts" setup>
const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  meta?: string
  class?: string
}>()
defineSlots<{
  default: (props: {}) => any
}>()

const { copy, copied } = useClipboard()
const appConfig = useAppConfig()
</script>

<template>
  <div class="relative bg-[#292d3e] dark:bg-[#242424] group -mx-6 sm:mx-0 sm:rounded-lg">
    <button
      title="Copie code"
      class="absolute top-1 right-1 z-3 flex flex-row justify-center items-center opacity-0 rounded hover:bg-[#343848] dark:hover:bg-[#2f2f2f] group-hover:opacity-100 transition-opacity duration-400"
      :class="{
        'bg-[#343848] dark:bg-[#2f2f2f] opacity-100': copied,
      }"
      tabindex="-1"
      @click="copy(props.code || '')"
    >
      <template v-if="copied">
        <span class="mx-3 text-xs font-medium text-muted tracking-[0.2px] right-[10px]">
          Copied
        </span>
        <span class="w-px h-10 bg-[#292d3e] dark:bg-[#242424]" />
      </template>
      <span class="size-10 flex justify-center items-center">
        <UIcon
          :name="copied ? appConfig.ui.icons.copyCheck : appConfig.ui.icons.copy"
          class="size-4 bg-[#ffffffde] dark:bg-[#ebebeb61]"
        />
      </span>
    </button>

    <span class="absolute z-2 text-[#ffffffde] dark:text-[#ebebeb61] text-xs font-medium tracking-[0.2px] right-[10px] top-1 group-hover:opacity-0">
      {{ props.language }}
    </span>

    <pre
      class="px-6 py-[14px] overflow-x-auto break-words text-sm leading-[21px] tracking-[0.2px]"
      v-bind="$attrs"
      :class="props.class"
    ><slot /></pre>
  </div>
</template>
