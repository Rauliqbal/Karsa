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
      <DashboardCvPreview :profile="profile" />
    </div>
  </div>
</template>
