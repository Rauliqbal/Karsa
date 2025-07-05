<script setup lang="ts">
defineProps(["profile"]);
const emit = defineEmits(["submit-profile", "upload-photo"]);
</script>

<template>
  <div class="bg-white p-6 rounded-2xl shadow-md">
    <h2 class="text-xl font-semibold mb-4">Data Diri</h2>
    <form @submit.prevent="emit('submit-profile')" class="space-y-4">
      <div>
        <label class="block font-medium">Foto Profil</label>
        <input
          type="file"
          accept="image/*"
          @change="emit('upload-photo', $event)"
        />
        <div v-if="profile.photoUrl" class="mt-2">
          <img
            :src="profile.photoUrl"
            class="h-32 w-32 object-cover rounded-md border"
          />
        </div>
      </div>
      <input
        v-model="profile.name"
        type="text"
        placeholder="Nama Lengkap"
        class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        v-model="profile.email"
        type="text"
        placeholder="Email"
        class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        v-model="profile.jobTitle"
        type="text"
        placeholder="Job Title"
        class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        v-model="profile.phone"
        type="text"
        placeholder="Telepon"
        class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        v-model="profile.summary"
        rows="4"
        class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ringkasan Profil"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Simpan
      </button>
    </form>
  </div>
</template>
