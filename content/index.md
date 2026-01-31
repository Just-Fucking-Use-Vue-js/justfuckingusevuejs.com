---
title: Just Use Vue.js
description: Minimal boilerplate. Readable components. Predictable reactivity.
---

::hero
#title
<span class="dark:bg-linear-315 dark:from-[#42d392] dark:to-[#647eff] dark:bg-clip-text dark:text-transparent">Just Use <span class="light:bg-linear-315 light:from-[#42d392] light:to-[#647eff] light:bg-clip-text light:text-transparent">Vue.js</span>.</span>

#description
Minimal boilerplate. Readable components. Predictable reactivity.
::

## The Progressive Framework

Vue.js is designed to be incrementally adoptable. You can start small and scale up as needed. Whether you're adding interactivity to a static page or building a complex single-page application, Vue has you covered.

::with-tests

#default

```html [index.html]
<div id="app">
  <button @click="count++">Count: {{ count }}</button>
</div>

<script type="module">
  import {
    createApp,
    ref,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

  createApp({
    setup() {
      const count = ref(1);
      return { count };
    },
  }).mount("#app");
</script>
```

#test

```ts [tests/button.spec.ts]
describe("Button test", () => {
  const SystemUnderTest = defineComponent({
    template: '<button @click="count++">Count: {{ count }}</button>',
    setup: () => {
      const count = ref(1);

      return {
        count,
      };
    },
  });

  test("Should have initial value to 0", async () => {
    const component = mount(SystemUnderTest);
    await expect(component.find("button").text()).toEqual("Count: 1");
  });
  test("Should increment counter on click", async () => {
    const component = mount(SystemUnderTest);

    await component.find("button").trigger("click");

    await expect(component.find("button").text()).toEqual("Count: 2");
  });
});
```

::

This renders as:

:the-progressive-framework-illustration

**This makes Vue approachable for beginners, flattens the learning curve, and lets you focus on building your UI instead of assembling a complex toolchain.**

## Reactivity at its Core

Will it re-render? Should I memoize this function? These questions don't exist in Vue. The fine-grained reactivity system tracks dependencies automatically, making changes predictable and easy to reason about. No magic, no surprises.

```vue [TotalPrice.vue]
<script setup>
import { computed, ref, watchEffect } from "vue";

const price = ref(25);
const quantity = ref(3);

const total = computed(() => price.value * quantity.value);

watchEffect(() => {
  console.log(`Total price is now: $${total.value}`);
});

quantity.value += 2; // Console: Total price is now: $125
</script>
```

Want to share stateful logic between components? Just extract it to a plain function (a composable) and reuse it anywhere. Yes, it's that simple. Vue's reactivity works everywhere. Nothing more to learn.

```js [useCounter.js]
import { computed, ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function inc() {
    count.value += 1;
  }

  return { count, inc };
}
```

**Use the reactivity system directly, without ceremony. Your code stays clean, readable, and easy to maintain. Readable in and out of components.**

## Comprehensive Single-File Components

Vue.js syntax is HTML-compatible. There's no need to learn a new templating language. Just use standard HTML with special attributes (directives) to bind data and react to events. With this familiar syntax, Vue's Single-File components (SFCs) let you create clean, encapsulated, and reusable components with minimal boilerplate. that's easy to read and maintain.

```vue [Greeting.vue]
<script setup>
import { ref } from "vue";

const name = ref("Vue");
</script>

<template>
  <label class="text-muted text-sm">
    Name
    <input v-model="name" class="border rounded px-2 py-1" />
  </label>

  <p class="mt-2">Hello, {{ name }}!</p>
</template>
```

**SFCs keep your components organized and easy to understand, with clear separation of concerns. There's no need to write an infinity of components in a single file.**

## Composition by Nature

<!-- TODO: create a beautiful UI component to demonstrate this point? -->

Parent-child communication is at the heart of our UIs. Making it intuitive and you're assured a smooth development experience. Vue.js takes is seriously. Accept data (props) from parents and emit events (emits) to notify them of changes. Exactly like standard HTML elements.

```vue [Modal.vue]
<script setup>
const props = defineProps({
  title: String,
});

const emits = defineEmits(["close"]);
</script>

<template>
  <div class="modal">
    <h2>{{ props.title }}</h2>
    <button @click="emits('close')">Close</button>
  </div>
</template>
```

Even better, you can pass templates (slots) to compose complex components from simple building blocks.

::side-by-side
#left

```vue [Modal.vue]
<template>
  <div class="modal">
    <slot />
  </div>
</template>
```

#right

```vue [App.vue]
<template>
  <Modal>
    <h2>Welcome</h2>
    <p>This is a simple modal dialog.</p>
  </Modal>
</template>
```

::

**Clear boundaries make components easy to understand and reuse. Simple, elegant and HTML-compatible syntax keeps the learning curve flat.**

## Ecosystem That Fits

<!-- TODO: improve this text -->

To scale up, Vue ecosystem provides both official and community libraries that follow the same mental model, making them easy to learn and use together.

<!-- TODO: use cards, 2x2 grid -->

- Vue Router: Declarative routing for building SPAs. (https://router.vuejs.org/)
- Pinia: Intuitive state management with first-class TypeScript support. (https://pinia.vuejs.org/)
- VueUse: Collection of essential Vue composition utilities. (https://vueuse.org/)
- Vue Devtools: Debug and profile your Vue applications. (https://devtools.vuejs.org/)
- Nuxt UI: Component library for building beautiful UIs. (https://ui.nuxt.com/)

**There's no need create meetings to discuss which router or state management library to use. Vue's official libraries are designed to work together seamlessly, following the same mental model.**

<!-- TODO: not sure about these copy/paste bullets, need to think more about them. -->

<!-- ## Copy/paste bullets

- Do you want to express dependencies, or debug updates?
- If derived state exists, why isn’t it a `computed`?
- How much of your UI code is product, and how much is plumbing?
- Would you rather “manage effects” or “describe state”?
- When something changes, can you point to the dependency that caused it?
- Does your UI logic feel reusable as plain functions?
- Are you spending time syncing state across layers that should already agree?
- Can you keep components small without inventing new patterns?
- Do you want a framework you can try without committing a whole build pipeline?
- Would a calmer mental model make you faster day to day? -->

## ::call-to-action

links:

- label: Vue Playground
  url: https://play.vuejs.org?utm_source=justckingusevuejs.com&utm_medium=homepage&utm_term=vue+playground&utm_content=link
  target: \_blank
- label: Get Started
  url: https://vuejs.org/guide/quick-start.html?utm_source=justckingusevuejs.com&utm_medium=homepage&utm_term=get+started&utm_content=link
  target: \_blank

---

#title
Try it
#description
No need to over-engineer your UI. Just use Vue.js now.
::

<!--

<!-- ## Why “Just Use Vue”

The slogan is not “switch your stack today.”

It means:

- Stop hand-assembling UI state sync.
- Let derived state look derived.
- Put reusable UI logic in plain functions (composables), not trapped inside components.

When a value depends on other values, it should read like a dependency graph, not a convention.

```js
import { computed, ref } from 'vue'

const price = ref(19)
const quantity = ref(2)

// Derived state that stays correct by construction.
const total = computed(() => price.value * quantity.value)
``` -->
