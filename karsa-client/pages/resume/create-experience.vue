<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from "vue";
import Textarea from "~/components/ui/textarea/Textarea.vue";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// Reactive state untuk template yang dipilih
const templateStore = ref<number>(0);

console.log("template:", templateStore.value);

// Refs
const pdfRef = ref<HTMLElement | null>(null);

// Data profil
const profile = reactive({
  name: "Muhamad Raul",
  jobTitle: "Fullstack Developer",
  phone: "089 1323",
  email: "raul@example.com",
  summary: "Experienced developer with expertise in Nuxt and Next.js.",
  photoUrl: "",
  experiences: [
    { role: "Frontend Developer", company: "ABC Corp", years: "2020-2022" },
    { role: "Backend Developer", company: "XYZ Ltd", years: "2022-2025" },
  ],
});

// Simpan profil ke localStorage
const submitProfile = () => {
  localStorage.setItem("karsa_profile", JSON.stringify(profile));
  console.log("Profile submitted:", profile);
  navigateTo("/resume/create-experience");
};

// Generate & download PDF dari preview
// const downloadPDF = async () => {
//   if (!pdfRef.value) return;
//   await nextTick();

//   const canvas = await html2canvas(pdfRef.value, {
//     scale: 2,
//     logging: true,
//   });

//   const imgData = canvas.toDataURL("image/png");
//   const pdf = new jsPDF("p", "mm", "a4");

//   const imgProps = pdf.getImageProperties(imgData);
//   const pdfWidth = pdf.internal.pageSize.getWidth();
//   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//   pdf.save("resume.pdf");
// };

// Upload dan preview foto profil
const handlePhotoUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0] || null;

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profile.photoUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

// Load template pilihan dari localStorage
onMounted(() => {
  const storedTemplate = localStorage.getItem("karsa_template");
  if (storedTemplate) {
    templateStore.value = parseInt(storedTemplate);
  }
});
</script>

<template>
  <template>
    <div class="container mt-20">
      <h2 class="text-2xl font-semibold mb-4">Profile Preview</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Left: Form Input Profile -->
        <div class="bg-white p-6 rounded-2xl shadow-md no-print">
          <h2 class="text-xl font-bold mb-4">Data Diri</h2>
          <form @submit.prevent="submitProfile" class="space-y-4">
            <!-- Foto Profil -->
            <div>
              <label for="photo" class="block font-medium text-gray-700"
                >Foto Profil</label
              >
              <input
                id="photo"
                type="file"
                accept="image/*"
                @change="handlePhotoUpload"
                class="mt-1 block w-full text-gray-700"
              />
              <div v-if="profile.photoUrl" class="mt-2">
                <img
                  :src="profile.photoUrl"
                  alt="Preview"
                  class="h-32 w-32 object-cover rounded-md border"
                />
              </div>
            </div>

            <!-- Input Fields -->
            <div>
              <label for="name" class="block font-medium text-gray-700"
                >Nama Lengkap</label
              >
              <Input
                id="name"
                v-model="profile.name"
                type="text"
                class="input"
              />
            </div>

            <div>
              <label for="email" class="block font-medium text-gray-700"
                >Email</label
              >
              <Input
                id="email"
                v-model="profile.email"
                type="text"
                class="input"
              />
            </div>

            <div>
              <label for="jobTitle" class="block font-medium text-gray-700"
                >Job Title</label
              >
              <Input
                id="jobTitle"
                v-model="profile.jobTitle"
                type="text"
                class="input"
              />
            </div>

            <div>
              <label for="phone" class="block font-medium text-gray-700"
                >Nomor Telepon</label
              >
              <Input
                id="phone"
                v-model="profile.phone"
                type="text"
                class="input"
              />
            </div>

            <div>
              <label for="summary" class="block font-medium text-gray-700"
                >Ringkasan Profil</label
              >
              <Textarea
                id="summary"
                v-model="profile.summary"
                rows="4"
                placeholder="Ringkasan singkat tentang diri Anda"
              />
            </div>

            <button type="submit" class="btn-primary">Next: Experience</button>
          </form>
        </div>

        <!-- Right: CV Preview -->
        <ResumePreview :profile="profile" :templateId="templateStore" />
      </div>
    </div>
  </template>
</template>
