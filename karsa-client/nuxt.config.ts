import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_BASE_URL || "http://localhost:4000/api/v1",
    },
  },
  modules: [
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@nuxt/icon",
    "nuxt-toast",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Poppins: ["400", "500", "600", "700"],
    },
  },
  shadcn: {
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
