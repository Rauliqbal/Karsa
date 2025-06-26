<script setup lang="ts"></script>

<template>
  <nav class="bg-white py-4 absolute top-0 left-0 right-0">
    <div class="container flex items-center justify-between">
      <img class="h-14" src="~/assets/images/karsaCrop.png" alt="" />

      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="ml-4">Home</NuxtLink>
        <NuxtLink to="/about" class="ml-4">Informasi</NuxtLink>
        <NuxtLink to="/about" class="ml-4">Artikel</NuxtLink>
        <NuxtLink to="/about" class="ml-4">Info Loker</NuxtLink>
      </div>

      <Button class="btn-primary">
        <NuxtLink to="/login">Login</NuxtLink>
      </Button>
    </div>
  </nav>
</template>
