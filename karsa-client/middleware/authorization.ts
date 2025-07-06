import Cookies from "js-cookie"

export default defineNuxtRouteMiddleware ((to,from) => {
  const token = Cookies.get('karsa_token')
  const protectedRoutes = ['/dashboard', '/profile']
 
  if (protectedRoutes.includes(to.path) && !token.value) {
    return navigateTo('/login')
  }
})