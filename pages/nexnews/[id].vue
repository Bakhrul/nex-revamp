<template :key="route.fullPath">
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">NEX NEWS</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageDesktop" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 0">
                        <h1 class="text-white fw-bold">NEX NEWS</h1>
                        <div class="text-white">Promo & informasi untuk sobat Nex</div>
                    </div>
                </div>
            </div>
        </div>
        <section class="my-3">
            <div class="container d-flex justify-content-center">
                <div class="w-100" style="overflow: auto;">
                    <div class="news-group d-flex flex-wrap justify-content-center">

                        <nuxt-link :to="'/nexnews/' + context.slug" style="cursor:pointer" class="news-filter me-3 mb-3"
                            v-for="context in listCategory" :class="selected == context.slug ? 'active' : ''">
                            {{context.category}}</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section style="background: #f2f2f2;" class="pt-5" id="news-section">
            <div class="container">
                <div class="d-flex justify-content-center mt-3 mb-3" v-if="pageStatus == 'data-load'">
                    <div class="spinner-border text-primary" style="width:50px;height:50px;" role="status">
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-4 mb-5" v-for="a in listNews">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img :src="a.image" />
                            <div class="d-flex px-3 py-2 mt-1 justify-content-between align-items-center">
                                <span class="px-3 py-2"
                                    style="background:#8E8E93;color:#fff;border-radius: 10px;font-size:12px;">{{a.category}}</span>
                                <div class="text-gray-400"
                                    style="font-size:12px;font-weight:bold;color:#8E8E93 !important">{{a.trxdate}}</div>
                            </div>
                            <div class="px-3 py-1" style="min-height:100px">
                                <div style="overflow: hidden;line-clamp:2;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
                                    class="fw-bold fs-5">{{a.title}}</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px black solid">
                                <nuxt-link :to="`/nexnews/${a.slugcategory}/${a.slug}`"
                                    class="w-100 text-center fw-bold"
                                    style="border-radius:10px;color:#2C69A7 !important">Baca Sekarang <i
                                        style="color:#2C69A7 !important;" class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-100 d-flex justify-content-center" v-if="listPage().length">
                    <ul class="custom-vue-datatable-pagination">
                        <li>
                            <button type="button" class="btn-prev-next-datatable" @click="changePage(currentPage - 1)"
                                :disabled="currentPage <= 1">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                        </li>

                        <li v-for="page in listPage()" :key="page.name">
                            <button type="button" :class="currentPage == page.name ? 'active' : ''"
                                @click="changePage(page.name)" :disabled="currentPage == page.name">
                                {{ page.name }}
                            </button>
                        </li>

                        <li>
                            <button type="button" class="btn-prev-next-datatable" @click="changePage(currentPage + 1)"
                                :disabled="currentPage >= totalPage()">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/header/news.png"
    import backgroundImageDesktop from "~/assets/header/news.png"
    import logoNex from "~/assets/logo-nex-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    const route = useRoute()
    definePageMeta({
        key: route => route.fullPath
    })

    const selected = ref('');

    import axios from "axios";
    const config = useRuntimeConfig()

    const listCategory = ref([]);
    const listNews = ref([]);

    const currentPage = ref(1);
    const totalData = ref(0);
    const perPage = ref(3)

    const pageStatus = ref('');
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
                if (route.params.id) {
                    selected.value = route.params.id;
                } else {
                    selected.value = listCategory.value[0].slug;
                }

            }

            return res.data.data;
        }
    }

    onMounted(() => {

        getNews()

    });


    async function getNews() {
        listNews.value = [];
        pageStatus.value = 'data-load'
        let res = await axios.get(config.public.API_URL + 'news/news', {
            params: {
                page: currentPage.value,
                length: perPage.value,
                slug: selected.value
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        pageStatus.value = 'standby'
        if (res.status == 200) {
            listNews.value = res.data.data.list;
            totalData.value = Number(res.data.data.total_data)
            return res.data.data;
        }
    }

    useHead({
        title: 'News | Nex',
        meta: [{
                name: 'title',
                content: 'News | Nex'
            },
            {
                name: 'ogTitle',
                content: 'News | Nex'
            },
            {
                name: 'description',
                content: 'Layanan TV Satelit Parabola berlangganan Indonesia. Tonton Premium Live Football dan hiburan tanpa hambatan dengan resolusi HD hingga 4K.'
            },
            {
                name: 'og:description',
                content: 'Layanan TV Satelit Parabola berlangganan Indonesia. Tonton Premium Live Football dan hiburan tanpa hambatan dengan resolusi HD hingga 4K.'
            },
            {
                name: 'og:image',
                content: logoNex
            },
            {
                name: 'og:image:width',
                content: '512'
            },
            {
                name: 'og:image:height',
                content: '512'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:site',
                content: '@nexparabola_tv'
            },
        ],
    })

    function totalPage() {
        return Math.ceil(Number(totalData.value) / Number(perPage.value));
    }

    function startPage() {
        if (currentPage.value == 1) {
            return 1;
        }

        if (currentPage.value == totalPage()) {
            return totalPage() - (5 - 1);
        }

        return Number(currentPage.value) - 1;
    }

    function listPage() {

        const range = [];


        for (let x = startPage(); x <= Math.min(startPage() + 5 - 1, totalPage()); x++) {
            if (x > 0) {
                range.push({
                    name: x,
                    isDisabled: x === Number(currentPage.value)
                });
            }
        }


        if (range.length == 3 && (Number(currentPage.value) + 1) == totalPage()) {
            if (range[0].name - 1 > 0) {
                range.unshift({
                    name: range[0].name - 1,
                    isDisabled: false,
                })
            }
        }

        if (range.length == 4 && (Number(currentPage.value) + 1) == totalPage() || (Number(currentPage.value) + 2) ==
            totalPage()) {
            if (range[0].name - 1 > 0) {
                range.unshift({
                    name: range[0].name - 1,
                    isDisabled: false,
                })
            }
        }

        return range;
    }

    function changePage(page) {
        currentPage.value = page
        listNews.value = []
        document.getElementById("news-section").scrollIntoView();
        getNews()
    }
</script>