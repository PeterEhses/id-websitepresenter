// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: true,
  modules: [
    // 'nuxt-content-assets',
    '@nuxt/content',
    // '@nuxtjs/i18n',
  ],
})
