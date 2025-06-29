<script setup lang="ts">
const profile = reactive({
  name: "",
  email: "",
  phone: "",
  summary: "",
  theme: "classic",
});

const submitProfile = () => {
  console.log("Profile submitted:", profile);
};

const themeClass = computed(() => {
  switch (profile.theme) {
    case "modern":
      return "bg-gradient-to-br from-white to-blue-50 text-blue-900";
    case "minimal":
      return "bg-white text-black border-gray-400";
    default: // classic
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
});

definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left: Form Input Profile -->
      <div class="bg-white p-6 rounded-2xl shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Data Diri</h2>
        <form @submit.prevent="submitProfile" class="space-y-4">
          <div>
            <label for="name" class="block font-medium text-gray-700"
              >Nama Lengkap</label
            >
            <input
              id="name"
              v-model="profile.name"
              type="text"
              class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="email" class="block font-medium text-gray-700"
              >Email</label
            >
            <input
              id="email"
              v-model="profile.email"
              type="email"
              class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="phone" class="block font-medium text-gray-700"
              >Nomor Telepon</label
            >
            <input
              id="phone"
              v-model="profile.phone"
              type="text"
              class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="summary" class="block font-medium text-gray-700"
              >Ringkasan Profil</label
            >
            <textarea
              id="summary"
              v-model="profile.summary"
              rows="4"
              class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label for="theme" class="block font-medium text-gray-700"
              >Pilih Tema CV</label
            >
            <select
              id="theme"
              v-model="profile.theme"
              class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="classic">Klasik</option>
              <option value="modern">Modern</option>
              <option value="minimal">Minimalis</option>
            </select>
          </div>

          <button
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Simpan
          </button>
        </form>
      </div>

      <!-- Right: CV Preview -->
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
    </div>
  </div>
</template>
