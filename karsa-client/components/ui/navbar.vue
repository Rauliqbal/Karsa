<script setup lang="ts"></script>

<template>
  <nav class="bg-white py-4">
    <div class="container flex items-center justify-between">
      <img class="h-16" src="~/assets/images/karsaCrop.png" alt="" />

      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="ml-4">Home</NuxtLink>
        <NuxtLink to="/about" class="ml-4">Informasi</NuxtLink>
        <NuxtLink to="/about" class="ml-4">Artikel</NuxtLink>
        <NuxtLink to="/about" class="ml-4">Info Loker</NuxtLink>
      </div>

      <button class="btn-primary">Masuk / Daftar</button>
    </div>
  </nav>
</template>
