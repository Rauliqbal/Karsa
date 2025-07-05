<script setup lang="ts">
import { ref, reactive } from "vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const templateStore = useTemplateStore();

const profile = reactive({
  name: "Muhamad Raul",
  jobTitle: "Fullstack Developer",
  phone: "089 1323",
  email: "raul@example.com",
  summary: "Experienced developer with expertise in Nuxt and Next.js.",
  photoUrl: "", // untuk preview foto
  experiences: [
    { role: "Frontend Developer", company: "ABC Corp", years: "2020-2022" },
    { role: "Backend Developer", company: "XYZ Ltd", years: "2022-2025" },
  ],
});

const pdfRef = ref<HTMLElement | null>(null);

const submitProfile = () => {
  localStorage.setItem("karsa_profile", JSON.stringify(profile));
  console.log("Profile submitted:", profile);
};

const downloadPDF = async () => {
  if (!pdfRef.value) return;

  await nextTick();

  const canvas = await html2canvas(pdfRef.value, {
    scale: 2,
    logging: true,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("resume.pdf");
};

const handlePhotoUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profile.photoUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <div class="container mt-20">
    <h2 class="text-2xl font-semibold mb-4">Profile Preview</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left: Form Input Profile -->
      <div class="bg-white p-6 rounded-2xl shadow-md no-print">
        <h2 class="text-2xl font-semibold mb-4">Data Diri</h2>
        <form @submit.prevent="submitProfile" class="space-y-4">
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
              type="text"
              class="mt-1 block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="jobTitle" class="block font-medium text-gray-700"
              >Job Title</label
            >
            <input
              id="jobTitle"
              v-model="profile.jobTitle"
              type="text"
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

          <button
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Simpan
          </button>
        </form>
      </div>

      <!-- Right: CV Preview -->
      <div ref="pdfRef" class="printable bg-white p-4 rounded-md">
        <div v-if="templateStore.selectedTemplate === 1">
          <CvTemplatesPertama v-bind="profile" />
        </div>
        <div v-else-if="templateStore.selectedTemplate === 2">
          <CvTemplatesKedua v-bind="profile" />
        </div>
        <div v-else-if="templateStore.selectedTemplate === 3">
          <CvTemplatesKetiga v-bind="profile" />
        </div>
        <div v-else>
          <p>No template selected. Please go back to choose a template.</p>
        </div>
      </div>
    </div>

    <div class="my-6 text-center no-print">
      <button
        @click="downloadPDF"
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  </div>
</template>
