<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: v => colorMode.preference = v ? 'dark' : 'light',
})
</script>

<template>
  <UApp>
    <button
      class="color-mode-switch fixed top-4 right-4 z-50"
      :class="{ dark: isDark }"
      @click="isDark = !isDark"
    >
      <span class="check">
        <UIcon
          :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          class="icon"
        />
      </span>
    </button>
    <UMain class="content">
      <ContentRenderer
        v-if="home"
        :value="home"
      />
    </UMain>

    <!-- Footer -->
    <!--
    ## Footer

This page is opinionated and playful. It's not a framework war.

Not affiliated with the Vue team.

Inspiration (format and tone, not negativity):

- https://justfuckingusetailwind.com/
- https://motherfuckingwebsite.com/
- https://perfectmotherfuckingwebsite.com/
- https://justfuckingusehtml.com/
- http://bettermotherfuckingwebsite.com/
- https://justfuckingusereact.com/

add nuxt-llm to easily have the page using AI (and ofc, add a link to it in the footer with something like "Need to convince your LLM? use a link"
and use a cloudflare rules to redirect requests to md page https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/ (and use curl -s https://your-domain.com/docs -H "Accept: text/markdown" | glow
     -->
  </UApp>
</template>
