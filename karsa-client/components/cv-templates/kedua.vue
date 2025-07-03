<template>
  <div class="p-10 bg-gray-50 rounded-lg max-w-2xl mx-auto border">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold">{{ name }}</h1>
        <p class="text-gray-500">{{ jobTitle }}</p>
      </div>
      <div>
        <!-- Avatar Placeholder -->
        <div class="w-16 h-16 rounded-full bg-gray-300"></div>
      </div>
    </div>

    <h2 class="text-lg font-semibold mb-2">Profile</h2>
    <p class="mb-4">{{ summary }}</p>

    <h2 class="text-lg font-semibold mb-2">Work Experience</h2>
    <div v-for="(exp, index) in experiences" :key="index" class="mb-3">
      <h3 class="font-bold">{{ exp.role }}</h3>
      <p class="text-gray-600">{{ exp.company }} ({{ exp.years }})</p>
    </div>
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
