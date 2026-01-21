<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
</script>

<template>
  <UApp>
    <UMain>
      <ContentRenderer
        v-if="home"
        :value="home"
      />
    </UMain>

    <!-- Footer -->
    <!--
    ## Footer

This page is opinionated and playful. It’s not a framework war.

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
