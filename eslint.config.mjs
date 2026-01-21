// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  })
