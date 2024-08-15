<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <img :src="backgroundImageMobile" class="w-100" />
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:220px`">
                <div class="container">
                    <h1 class="text-white fw-bold">NEX NEWS</h1>
                    <div class="text-white">Promo & Informasi untuk Sobat Nex</div>
                </div>
            </div>
        </div>
        <section class="my-3">
            <div class="container d-flex justify-content-center">
                <div class="w-100" style="overflow: auto;">
                    <div class="news-group d-flex flex-wrap justify-content-center">

                        <div class="news-filter me-3 mb-3" @click="selected = 'semua'" :class="selected == 'semua' ? 'active' : ''">Semua</div>
                            <div class="news-filter me-3 mb-3" @click="selected = 'family'" :class="selected == 'family' ? 'active' : ''">Family
                                Entertainment</div>
                       

                            <div class="news-filter me-3 mb-3" @click="selected = 'sports'" :class="selected == 'sports' ? 'active' : ''">Sports
                            </div>
                       
                            <div class="news-filter me-3 mb-3" @click="selected = 'national'" :class="selected == 'national' ? 'active' : ''">TV
                                National</div>
                      
                            <div class="news-filter me-3 mb-3" @click="selected = 'kids'" :class="selected == 'kids' ? 'active' : ''">Kids
                            </div>
                      
                            <div class="news-filter me-3 mb-3" @click="selected = 'nex'" :class="selected == 'nex' ? 'active' : ''">Nex News
                            </div>
                      
                            <div class="news-filter me-3 mb-3" @click="selected = 'anime'" :class="selected == 'anime' ? 'active' : ''">Anime
                            </div>
                        

                    </div>
                </div>
            </div>
        </section>
        <section style="background: #f2f2f2;" class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-3" v-for="a in 6">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/sample-event.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold fs-5">7 Teknik Pernafasan Kabut di Anime Kimetsu no Yaiba</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/news/title" class="w-100 p-2 text-center fw-bold" style="border-radius:10px;border:2px #2C69A7 solid;color:#2C69A7 !important" href="javascript:void(0)">Baca Sekarang <i style="color:#2C69A7 !important;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/news.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const selected = ref('semua');
    const route = useRoute()
</script>