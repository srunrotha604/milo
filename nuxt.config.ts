export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: [
    '@/assets/styles/tailwind.css',
    '@/assets/styles/main.css',
    '@/assets/styles/fonts.css',
  ],
})
