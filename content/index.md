---
title: Just Use Vue.js
description: Minimal boilerplate. Readable components. Predictable reactivity.
---

::hero
#title
Just <span class="text-gradient">Use Vue</span>

#description
Predictable reactivity. Minimal boilerplate. Readable components.

#links
<a href="https://vuejs.org/guide/quick-start.html" target="_blank" class="hero-btn">Quick Start →</a>
<a href="https://vuejs.org/guide/quick-start.html#creating-a-vue-application" target="_blank" class="hero-btn">Installation</a>
::

## Sound familiar?

You've been there:
- "Why did this re-render 47 times?"
- "Which state library are we using this month?"
- "My custom hook is 200 lines for a counter"
- "The build takes 3 minutes for a Hello World"

Modern frontend has become an exercise in fighting your tools. It doesn't have to be this way.

## The Progressive Framework

Frontend got complicated. Vue didn't.

No build step required. Drop a script tag, write your component, ship it. When you need more power, Vue scales with you-from a simple widget to a full-featured SPA. The same mental model, [all the way up](https://vuejs.org/guide/introduction.html#the-progressive-framework).

`<button @click="count++">{{ count }}</button>` - That's it. That's reactive.

**Approachable for beginners. Powerful for experts. No toolchain assembly required.**

## Reactivity That Just Works

Will it re-render? Should I memoize? These questions don't exist here.

Vue's fine-grained reactivity tracks dependencies automatically. No dependency arrays. No manual optimization. Change a value, and only what needs to update, updates.

`const total = computed(() => price.value * quantity.value)` - Dependencies tracked. Automatically.

Want to share logic between components? Extract it to a plain function. That's it. No special syntax, no framework magic. Vue's reactivity works everywhere-inside and outside components.

**Clean. Readable. Reusable. No ceremony.**

## Single-File Components

HTML you already know. Logic where you expect it. Styles that don't leak.

Vue's templates are just HTML with superpowers. No new syntax to learn-just bind data and handle events with intuitive directives. Everything in one file, clearly organized.

`<input v-model="name" />`  Two-way binding. One line.

**One component. One file. No mental gymnastics.**

## Composition by Nature

Parent-child communication shouldn't require a PhD.

Props down. Events up. Exactly like HTML elements work. Vue makes component communication intuitive-accept data from parents, emit events to notify them. No context providers, no prop drilling debates.

`defineProps(['title'])` + `defineEmits(['close'])` Clear contract. Zero boilerplate.

Slots let you pass entire templates into components. Composition without complexity.

**Clear boundaries. Simple syntax. Flat learning curve.**

## Ecosystem That Fits

No meetings to debate which router to use. No decision fatigue. One mental model, everywhere.

- [Vue Router](https://router.vuejs.org/) Declarative routing for SPAs.
- [Pinia](https://pinia.vuejs.org/) State management with first-class TypeScript.
- [VueUse](https://vueuse.org/) Essential composition utilities.
- [Vue Devtools](https://devtools.vuejs.org/) Debug and profile like a pro.

**Vue's official libraries are designed to work together. Same patterns. Same mental model. No surprises.**

## "But..."

### "It's not as popular"

Popularity ≠ quality. Vue powers Alibaba, GitLab, Nintendo, Louis Vuitton, and parts of Apple's ecosystem. Second most used framework worldwide. Massive community. Mature ecosystem. Next question.

### "The job market..."

In Europe and Asia, Vue is everywhere. And here's the thing: a good Vue developer becomes productive in any framework fast. The mental model transfers. The skills compound.

### "Templates are weird"

They're HTML. The thing you already know. With superpowers. And they compile to highly optimized code with static analysis that catches errors before runtime. Your IDE loves them. Your team will too.

### "It's not enterprise-ready"

Tell that to Alibaba handling Singles' Day (11.11) with Vue-the biggest shopping event on the planet. Or GitLab running their entire frontend on it. At scale. For years. Or BMW, Adobe, NASA...

## Questions to Ask Yourself

- Does your derived state *look* derived?
- Can you reuse UI logic as plain functions?
- When something changes, can you point to what caused it?
- How much of your code is product vs. plumbing?
- Do you want to debug re-renders or express dependencies?
- If derived state exists, why isn't it a `computed`?
- Can you try a framework without committing to a build pipeline?
- Does your component state live in the component or in a separate file?
- Would a calmer mental model make you faster day to day?
- Are you fighting your tools or using them?

If you answered "no" to any of these, maybe it's time.

## Try It

[Vue Playground](https://play.vuejs.org/) | [Quick Start](https://vuejs.org/guide/quick-start.html)

---

This page is opinionated and playful. It's not a framework war.

Not affiliated with the Vue team.

Inspiration: [justfuckingusetailwind.com](https://justfuckingusetailwind.com/), [motherfuckingwebsite.com](https://motherfuckingwebsite.com/), [bettermotherfuckingwebsite.com](http://bettermotherfuckingwebsite.com/)
