<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftBar from '@/components/LeftBarModule/MajorLeftBarComponent.vue'
import HeaderModule from '@/components/HeaderModule/MajorHeaderComponent.vue'
import 'animate.css'
</script>

<template>
  <header>
    <HeaderModule />
  </header>
  <LeftBar />
  <main>
    <Toast position="top-right" />
    <RouterView />
  </main>
</template>

<style>
header {
  width: 100%;
}
footer {
  max-width: 100vw;
}
body {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
}
p,
h1,
h2,
h3,
a,
span,
nav {
  margin: 0;
}
</style>
