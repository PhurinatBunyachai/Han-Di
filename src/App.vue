<script setup lang="ts">
import HomePage from '@/components/HomePage.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HomePage msg="Vite + Vue" />
  <Button>Click me</Button>
</template>

<style scoped>
</style>
