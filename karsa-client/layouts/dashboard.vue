<script setup lang="ts">
definePageMeta({
  middleware: "authorization",
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>
