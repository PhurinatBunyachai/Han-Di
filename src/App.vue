<script setup lang="ts">
import Footer from "@/components/layouts/Footer.vue";
import Header from "@/components/layouts/Header.vue";
</script>

<template>
  <Header />
  <div class="h-screen container mx-auto max-w-[1280px]">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>
