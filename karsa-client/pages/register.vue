<script setup lang="ts">
import Cookies from "js-cookie";
import LoaderCircle from "~/icons/loader-circle.vue";

interface LoginResponse {
  data: {
    token: string;
  };
}

interface ZodIssue {
  validation?: string;
  code: string;
  message: string;
  path: string[];
  [key: string]: any;
}

const toast = useToast();
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isLoading = ref(false);

const resetInput = () => {
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const name = ref("");
};

const register = async () => {
  isLoading.value = true;
  try {
    const res = await $fetch<LoginResponse>(
      "http://localhost:4000/api/v1/auth/register",
      {
        method: "POST",
        body: {
          name: name.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
        },
      }
    );

    Cookies.set("token", res.data.token);
    toast.success({ title: "Login Berhasil", position: "topRight" });
    resetInput();

    setTimeout(() => {
      navigateTo("/");
    }, 2000);
  } catch (error: any) {
    const issues: ZodIssue[] | undefined = error?.data?.message?.issues;

    if (Array.isArray(issues)) {
      issues.forEach((issue: ZodIssue) => {
        toast.error({
          title: issue.message,
          position: "topRight",
        });
      });
    } else {
      const fallbackMessage = error?.data?.message || "Login gagal. Coba lagi.";
      toast.error({
        title: fallbackMessage,
        position: "topRight",
      });
    }
  } finally {
    isLoading.value = false;
    resetInput();
  }
};

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Daftar Akun - Karsa",
});
</script>

<template>
  <div
    class="grid lg:grid-cols-2 items-center bg-white overflow-hidden min-h-screen p-6"
  >
    <div class="max-w-sm mx-auto">
      <img
        class="h-14 mb-20"
        src="~/assets/images/logo-karsa.svg"
        alt="KarsaCV adalah platform pembuatan CV modern yang membantu siapa saja — dari pelajar, mahasiswa, hingga profesional."
      />

      <h1 class="text-3xl font-semibold">Buat Akun dan Mulai Susun CV</h1>
      <p class="text-secondary mt-4">
        Dengan semangat karsa (niat & tekad), mari wujudkan peluang karier
        terbaikmu.
      </p>

      <form @submit.prevent="login" class="mt-8">
        <!-- Input name  -->
        <div>
          <label for="name" class="text-sm">Nama</label>
          <div class="relative w-full max-w-sm items-center mt-1">
            <Input
              v-model="name"
              type="text"
              placeholder="Masukkan nama panjang anda"
              class="pl-10"
              id="name"
            />
            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
              <Icon name="akar-icons:envelope" class="text-gray-500" />
            </span>
          </div>
        </div>
        <!-- Input email  -->
        <div class="mt-4">
          <label for="email" class="text-sm">Email</label>
          <div class="relative w-full max-w-sm items-center mt-1">
            <Input
              v-model="email"
              type="email"
              placeholder="Masukkan email aktif"
              class="pl-10"
              id="email"
            />
            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
              <Icon name="akar-icons:envelope" class="text-gray-500" />
            </span>
          </div>
        </div>
        <!-- input Password -->
        <div class="mt-4">
          <label for="password" class="text-sm">Password</label>
          <div class="relative w-full max-w-sm items-center mt-1">
            <Input
              v-model="password"
              type="password"
              placeholder="Password minimal 6 karakter"
              class="pl-10"
              id="password"
            />
            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
              <Icon name="akar-icons:lock-on" class="text-gray-500" />
            </span>
          </div>
        </div>

        <!-- input Conf Password -->
        <div class="mt-4">
          <label for="confirmPassword" class="text-sm"
            >Konfirmasi Password</label
          >
          <div class="relative w-full max-w-sm items-center mt-1">
            <Input
              v-model="confirmPassword"
              type="password"
              placeholder="Konfirmasi password"
              class="pl-10"
              id="confirmPassword"
            />
            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
              <Icon name="akar-icons:lock-on" class="text-gray-500" />
            </span>
          </div>
        </div>

        <p class="float-right text-sm mt-1">
          Lupa akun?
          <NuxtLink to="/" class="text-primary hover:underline">
            klik disini
          </NuxtLink>
        </p>

        <!-- Submit -->
        <Button class="w-full mt-5" type="submit" :disabled="isLoading">
          <LoaderCircle class="w-5 h-5 animate-spin mr-2" v-if="isLoading" />
          Submit</Button
        >
      </form>

      <p class="text-sm text-center mt-4">
        Sudah punya akun Karsa?
        <NuxtLink to="/register" class="text-primary hover:underline"
          >Buat akun sekarang</NuxtLink
        >
      </p>
    </div>
    <div
      class="hidden lg:block w-full h-full overflow-hidden rounded-2xl relative"
    >
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Karsa Project"
      />
      <div class="bg-primary/60 absolute inset-0"></div>
    </div>
  </div>
</template>
