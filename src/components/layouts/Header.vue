<script setup lang="ts">
import { inject } from "vue";
const isDesktop = inject("isDesktop");
</script>
<template>
  <div class="h-[50px] bg-yellow-500">{{ isDesktop }}</div>
</template>
