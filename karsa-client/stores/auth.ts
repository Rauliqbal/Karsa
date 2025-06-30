import { defineStore } from "pinia";
import Cookies from "js-cookie";

interface UserResponse {
  success: boolean;
  message: string;
  data: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  actions: {
    // async login(email: string, password: string) {
    //     const config = useRuntimeConfig();
    //   try {
    //     const res = await $fetch(
    //       `${config.public.API_URL}/auth/login`,
    //       {
    //         email,
    //         password,
    //       }
    //     );
    //     this.token = res.data.token;
    //     this.getUser();
    //       useToast().success({
    //         title: "Login Berhasil",
    //         position: "topRight",
    //       })
    //   } catch (error) {

    //   }
    // },
    async getUser() {
      const config = useRuntimeConfig();
      const token = Cookies.get("karsa_token");
      try {
        const res = await $fetch<UserResponse>(
          `${config.public.API_URL}/auth/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.user = res.data;
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    },
  },
});
