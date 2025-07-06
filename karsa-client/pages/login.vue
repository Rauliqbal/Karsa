<script setup lang="ts">
import Cookies from "js-cookie";
import LoaderCircle from "~/icons/loader-circle.vue";

const resetInput = () => {
  const email = ref("");
  const password = ref("");
};

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
const email = ref("");
const password = ref("");
const isLoading = ref(false);

const login = async () => {
  isLoading.value = true;
  try {
    const res = await $fetch<LoginResponse>(
      "http://localhost:4000/api/v1/auth/login",
      {
        method: "POST",
        body: {
          email: email.value,
          password: password.value,
        },
      }
    );

    Cookies.set("karsa_token", res.data.token);
    toast.success({ title: "Login Berhasil", position: "topRight" });
    resetInput();

    setTimeout(() => {
      navigateTo("/dashboard");
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
  middleware: "guest",
});
useSeoMeta({
  title: "Login - Karsa",
});
</script>

<template>
  <div
    class="grid lg:grid-cols-2 items-center bg-white overflow-hidden h-screen p-6"
  >
    <div class="max-w-sm mx-auto">
      <img
        class="h-14 mb-20"
        src="~/assets/images/logo-karsa.svg"
        alt="KarsaCV adalah platform pembuatan CV modern yang membantu siapa saja — dari pelajar, mahasiswa, hingga profesional."
      />

      <h1 class="text-3xl font-semibold">Selamat Datang di Karsa</h1>
      <p class="text-secondary mt-4">
        Kami bantu kamu wujudkan niat dan tekad untuk meraih peluang karier
        terbaik.
      </p>

      <form @submit.prevent="login" class="mt-8">
        <!-- Input email  -->
        <div>
          <label for="email" class="text-sm">Email</label>
          <div class="relative w-full max-w-sm items-center mt-1">
            <Input
              v-model="email"
              type="email"
              placeholder="raul@gmail.com"
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
              placeholder="Konfirmasi password"
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

        <p class="float-right text-sm mt-1">
          Lupa akun?
          <NuxtLink to="/register" class="text-primary hover:underline">
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
        Belum punya akun Karsa?
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
