<template>
  <div class="p-8 bg-white shadow-md rounded-md max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-primary">{{ name }}</h1>
    <p class="text-gray-600 mb-4">{{ jobTitle }}</p>

    <h2 class="text-xl font-semibold border-b mb-2">About</h2>
    <p class="mb-4">{{ summary }}</p>

    <h2 class="text-xl font-semibold border-b mb-2">Experience</h2>
    <ul class="list-disc pl-5">
      <li v-for="(exp, index) in experiences" :key="index">
        <strong>{{ exp.role }}</strong> at {{ exp.company }} ({{ exp.years }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  jobTitle: string;
  summary: string;
  experiences: Array<{ role: string; company: string; years: string }>;
}>();
</script>
