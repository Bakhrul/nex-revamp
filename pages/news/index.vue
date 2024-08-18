<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:cover;width:100%;background-position:left;padding:30px 0`">
                <div class="container">
                    <h6 class="text-white fw-bold">NEX NEWS</h6>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:220px`">
                <div class="container">
                    <h1 class="text-white fw-bold">NEX NEWS</h1>
                    <div class="text-white">Promo & informasi untuk sobat Nex</div>
                </div>
            </div>
        </div>
        <section class="my-3">
            <div class="container d-flex justify-content-center">
                <div class="w-100" style="overflow: auto;">
                    <div class="news-group d-flex flex-wrap justify-content-center">

                        <div style="cursor:pointer" class="news-filter me-3 mb-3" v-for="context in listCategory"
                            @click="selected = context.id" :class="selected == context.id ? 'active' : ''">
                            {{context.category}}</div>
                    </div>
                </div>
            </div>
        </section>
        <section style="background: #f2f2f2;" class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-3" v-for="a in listNews">
                        <div class="shadow-product w-100 product-box">
                            <img :src="a.image" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div style="overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;" class="fw-bold fs-5">{{a.title}}</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link :to="'/news/' + a.id" class="w-100 p-2 text-center fw-bold"
                                    style="border-radius:10px;border:2px #2C69A7 solid;color:#2C69A7 !important"
                                   >Baca Sekarang <i style="color:#2C69A7 !important;"
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
    import backgroundImageMobile from "~/assets/header/news-mobile.png"
    import backgroundImageDesktop from "~/assets/header/news-desktop.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const selected = ref('');
    const route = useRoute()

    import axios from "axios";
    const config = useRuntimeConfig()

    const listCategory = ref([]);
    const listNews = ref([]);
    const {
        data
    } = await getCategory()

    async function getCategory() {
        let res = await axios.get(config.public.API_URL + 'news/newscategory', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            listCategory.value = res.data.data.list;

            if (listCategory.value.length) {
                selected.value = listCategory.value[0].id;
            }

            return res.data.data;
        }
    }

    onMounted(() => {

        getNews()

    });


    async function getNews() {
        listNews.value = [];
        let res = await axios.get(config.public.API_URL + 'news/news', {
            params: {
                categoryid: selected.value
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            listNews.value = res.data.data.list;
            return res.data.data;
        }
    }
</script>