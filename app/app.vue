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
     -->
  </UApp>
</template>
