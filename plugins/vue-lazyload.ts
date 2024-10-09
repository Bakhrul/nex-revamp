import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1, // Gambar akan dimuat 1.3 kali lebih awal sebelum masuk viewport  
    attempt: 2 // Jumlah percobaan untuk memuat gambar
  })
})