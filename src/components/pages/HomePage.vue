<script setup lang="ts">
import { useGroupStore } from "@/stores/group";
const groupStore = useGroupStore();
</script>

<template>
  <div class="h-[500px] w-full shadow-lg rounded-md">
    {{ groupStore.count }}
    <div @click="groupStore.increment()">+</div>
  </div>
</template>
