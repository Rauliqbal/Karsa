<script setup lang="ts">
const name = ref("");
const email = ref("");
const password = ref("");
const confPassword = ref("");

const login = async () => {
  try {
    const res = await $fetch("http://localhost:4000/api/v1/auth/register", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        confPassword: confPassword.value,
      },
    });
  } catch (error) {
    alert(error);
  }
};

useSeoMeta({
  title: "Login - Karsa",
});
</script>

<template>
  <div
    class="container grid grid-cols-2 my-40 items-center bg-white shadow-md border rounded-xl overflow-hidden"
  >
    <div class="max-w-sm mx-auto py-10">
      <h1 class="text-3xl font-semibold">Selamat Datang di Karsa</h1>
      <p class="text-secondary mt-4">
        Kami bantu kamu wujudkan niat dan tekad untuk meraih peluang karier
        terbaik.
      </p>

      <form @submit.prevent="login" class="mt-8">
        <!-- Input nama -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input
            v-model="name"
            type="text"
            placeholder="Raul iqbal"
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon name="akar-icons:person" class="text-gray-500" />
          </span>
        </div>
        <!-- Input email  -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input
            v-model="email"
            type="email"
            placeholder="raul@gmail.com"
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon name="akar-icons:envelope" class="text-gray-500" />
          </span>
        </div>
        <!-- input Password -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input
            v-model="password"
            type="password"
            placeholder="Konfirmasi password"
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon name="akar-icons:lock-on" class="text-gray-500" />
          </span>
        </div>
        <!-- input Confirm Password -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input
            v-model="confPassword"
            type="password"
            placeholder="Konfirmasi password"
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon name="akar-icons:lock-on" class="text-gray-500" />
          </span>
        </div>

        <p class="float-right text-sm mt-1">
          Lupa akun?
          <NuxtLink to="/register" class="text-primary hover:underline">
            klik disini
          </NuxtLink>
        </p>

        <Button class="w-full mt-5" type="submit">Submit</Button>
      </form>

      <p class="text-sm text-center mt-4">
        Belum punya akun Karsa?
        <NuxtLink to="/register" class="text-primary hover:underline"
          >Buat akun sekarang</NuxtLink
        >
      </p>
    </div>
    <div class="h-[540px]">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Karsa Project"
      />
    </div>
  </div>
</template>
