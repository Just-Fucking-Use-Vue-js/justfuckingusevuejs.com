export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
    icons: {
      copy: 'i-lucide-clipboard',
      copyCheck: 'i-lucide-clipboard-check',
    },
    prose: {
      h2: {
        slots: {
          base: 'mt-16 mb-[1.8rem] pt-[1.8rem] text-2xl text-default tracking-[-0.02em] leading-[1.5] font-semibold border-t border-t-muted',
        },
      },
      p: {
        base: 'text-default tracking-[0.2px] leading-[1.7] mb-6',
      },
    },
  },
})
