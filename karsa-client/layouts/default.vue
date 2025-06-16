<script setup lang='ts'>
</script>

<template>
  <div>
    <nav class="flex items-center gap-2">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>

    <slot />
  </div>
</template>