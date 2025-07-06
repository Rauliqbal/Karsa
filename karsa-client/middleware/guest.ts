import Cookies from "js-cookie"

export default defineNuxtRouteMiddleware(() => {
  const token = useCookie('karsa_token')

  if (token.value) {
    return navigateTo('/dashboard')
  }
})