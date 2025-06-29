<script setup lang="ts">
interface Profile {
  name: string;
  email: string;
  phone: string;
  summary: string;
  theme: string;
}

const props = defineProps<{
  profile: Profile;
}>();

const themeClass = computed(() => {
  switch (props.profile.theme) {
    case "modern":
      return "bg-gradient-to-br from-white to-blue-50 text-blue-900";
    case "minimal":
      return "bg-white text-black border-gray-400";
    default: // classic
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
});
</script>

<template>
  <div class="bg-white p-6 rounded-2xl shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Preview CV</h2>
    <div :class="['border rounded-lg p-4 space-y-2', themeClass]">
      <h3 class="text-xl font-bold">
        {{ profile.name || "Nama Lengkap" }}
      </h3>
      <p class="text-gray-600">{{ profile.email || "Email" }}</p>
      <p class="text-gray-600">{{ profile.phone || "Nomor Telepon" }}</p>
      <p class="mt-4 whitespace-pre-wrap">
        {{ profile.summary || "Ringkasan profil akan tampil di sini." }}
      </p>
    </div>
  </div>
</template>
