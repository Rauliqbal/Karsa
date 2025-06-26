<script setup lang="ts">
useSeoMeta({
  title: "Login - Karsa",
});
</script>

<template>
  <div class="grid grid-cols-2 h-dvh items-center">
    <div class="max-w-sm mx-auto">
      <h1 class="text-3xl font-semibold">Selamat Datang di Karsa</h1>
      <p class="text-secondary mt-4">
        Kami bantu kamu wujudkan niat dan tekad untuk meraih peluang karier
        terbaik.
      </p>

      <form action="" class="mt-8">
        <!-- Input nama -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input type="text" placeholder="Raul iqbal" class="pl-10" />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon name="akar-icons:person" class="text-gray-500" />
          </span>
        </div>
        <!-- Input email  -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input type="email" placeholder="raul@gmail.com" class="pl-10" />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Icon name="akar-icons:envelope" class="text-gray-500" />
          </span>
        </div>
        <!-- input Password -->
        <div class="relative w-full max-w-sm items-center mt-4">
          <Input
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

        <Button class="w-full mt-4" type="submit"> Submit </Button>
      </form>

      <p class="text-sm text-center mt-10">
        Belum punya akun Karsa?
        <NuxtLink to="/register" class="text-primary hover:underline"
          >Buat akun sekarang</NuxtLink
        >
      </p>
    </div>
    <div class="bg-primary w-full h-full"></div>
  </div>
</template>
