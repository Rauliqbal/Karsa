<template>
  <div class="p-6 bg-white border border-gray-200 rounded-lg max-w-2xl mx-auto">
    <div class="text-center mb-6">
      <div v-if="photoUrl" class="flex justify-center mb-4">
        <img
          :src="photoUrl"
          alt="Profile Photo"
          class="h-32 w-32 object-cover rounded-full border"
        />
      </div>

      <h1 class="text-3xl font-extrabold">{{ name }}</h1>
      <p class="text-gray-700">{{ email }}</p>
      <p class="text-gray-700">{{ phone }}</p>
      <p class="text-gray-primary mt-2">{{ jobTitle }}</p>
    </div>

    <section class="mb-4">
      <h2 class="text-xl font-semibold border-b pb-1 mb-2">Summary</h2>
      <p>{{ summary }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="py-1">Role</th>
            <th class="py-1">Company</th>
            <th class="py-1">Years</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(exp, index) in experiences" :key="index">
            <td class="py-1">{{ exp.role }}</td>
            <td class="py-1">{{ exp.company }}</td>
            <td class="py-1">{{ exp.years }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  summary: string;
  photoUrl?: string; // tambahkan photoUrl props
  experiences: Array<{ role: string; company: string; years: string }>;
}>();
</script>
