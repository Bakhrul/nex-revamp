<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-desktop">
            <carousel :items-to-show="1" :autoplay="2500" :wrapAround="true">
                <slide :key="1">
                    <div class="d-flex align-items-center py-5"
                        :style="`background-image:url('${headerImageDesktop1}');background-size:100% 100%;width:100%;min-height:300px;height:100%;`">
                        <div class="container">
                            <div style="max-width:500px">
                                <h1 class="text-start fw-bold pt-5" style="color:#41054F;">Saksikan Premier League Live
                                    & Exclusive</h1>
                                <div class="text-start fs-5 pt-3" style="color:#37003C;">Berlangganan paket liga inggris
                                    dan dukung tim andalan kamu dalam laga bergerngsi secara live selama satu musim
                                </div>
                                <div class="d-flex">
                                    <nuxt-link to="/promo/saksikan-premiere-league-and-live-exclusive"
                                        class="btn text-white py-2 px-5 fw-bold mt-3 mb-5 fs-5"
                                        style="background:#37003C;" type="button">Lihat Lebih Lanjut</nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide :key="2">
                    <div class="d-flex align-items-center py-5"
                        :style="`background-image:url('${headerImageDesktop2}');background-size:100% 100%;width:100%;min-height:300px;height:100%;`">
                        <div class="container">
                            <div style="max-width:500px">
                                <h1 class="text-start fw-bold pt-5" style="color:#fff;">Update Datamu dan
                                    Dapatkan 30 Hari
                                    Gratis Nonton</h1>
                                <div class="d-flex">
                                    <nuxt-link to="/promo/updatedata"
                                        class="btn text-white py-2 px-5 fw-bold mt-3 mb-5 fs-5"
                                        style="background:#F3753A;" type="button">Lihat Lebih Lanjut</nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide :key="3">
                    <div class="d-flex align-items-center py-5"
                        :style="`background-image:url('${headerImageDesktop3}');background-size:100% 100%;width:100%;min-height:300px;height:100%;`">
                        <div class="container">
                            <div style="max-width:500px">
                                <h1 class="text-start fw-bold pt-5" style="color:black;">Receiver</h1>
                                <div class="text-start fs-5 pt-3" style="color:black;">Dapatkan produk TV Satelit
                                    terbaik berupa Receiver dan Paket Program Channel Televisi berkualitas untuk
                                    kebutuhan kamu.
                                </div>
                                <div class="d-flex">
                                    <nuxt-link to="/receiver" class="btn text-white py-2 px-5 fw-bold mt-3 mb-5 fs-5"
                                        style="background:#F3753A;" type="button">Lihat Lebih Lanjut</nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </slide>

                <template #addons>

                    <pagination />
                </template>
            </carousel>
        </div>
        <div class="show-on-mobile">
            <carousel :items-to-show="1" :autoplay="2500" :wrapAround="true">
                <slide :key="1">
                    <div class="d-flex align-items-center py-3 header-mobile"
                        :style="`background-image:url('${headerImageMobile1}');width:100%;height:100%;`">
                        <div class="container">
                            <div style="max-width:100%">
                                <h5 class="text-center fw-bold pt-5" style="color:#41054F;">Saksikan Premier League LIVE
                                    & Eksklusif</h5>
                                <div class="text-center fs-7 pt-2" style="color:#37003C;">Langganan Paket Liga Inggris
                                    dan dukung tim andalan kamu dalam laga bergengsi
                                </div>
                                <div class="d-flex justify-content-center">
                                    <nuxt-link to="/promo/saksikan-premiere-league-and-live-exclusive"
                                        class="btn text-white py-2 px-5 fw-bold mt-3 fs-6" style="background:#2C69A7;"
                                        type="button">Lihat Lebih Lanjut <i class="bi bi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide :key="2">
                    <div class="d-flex align-items-center py-3 header-mobile"
                        :style="`background-image:url('${headerImageMobile2}');width:100%;height:100%;`">
                        <div class="container">
                            <div style="max-width:100%">
                                <h5 class="text-center fw-bold pt-5" style="color:#41054F;">Update Data Mu Sekarang!
                                </h5>
                                <div class="text-center fs-7 pt-2" style="color:#37003C;">Dan Dapatkan GRATIS 30 Hari
                                    Nonton
                                </div>
                                <div class="d-flex justify-content-center">
                                    <nuxt-link to="/promo/updatedata" class="btn text-white py-2 px-5 fw-bold mt-3 fs-6"
                                        style="background:#2C69A7;" type="button">Lihat Lebih Lanjut <i
                                            class="bi bi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide :key="3">
                    <div class="d-flex align-items-center py-3 header-mobile"
                        :style="`background-image:url('${headerImageMobile3}');width:100%;height:100%;`">
                        <div class="container">
                            <div style="max-width:100%">
                                <h5 class="text-center fw-bold pt-5" style="color:#41054F;">Nikmati Hiburan Tanpa Batas
                                </h5>
                                <div class="text-center fs-7 pt-2" style="color:#37003C;">Dapatkan produk TV Satelit
                                    terbaik berupa Receiver dan Paket Program Channel Televisi berkualitas untuk
                                    kebutuhan kamu.
                                </div>
                                <div class="d-flex justify-content-center">
                                    <nuxt-link to="/receiver" class="btn text-white py-2 px-5 fw-bold mt-3 fs-6"
                                        style="background:#2C69A7;" type="button">Lihat Lebih Lanjut <i
                                            class="bi bi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </slide>
                <template #addons>

                    <pagination />
                </template>
            </carousel>
        </div>
        <section class="py-1 mt-5">
            <div class="container">
                <div class="title-section">Receiver & Paket Berlangganan</div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="me-3">

                        <div class="subtitle-section mb-3">Pilih sesuai dengan kebutuhan kamu</div>
                    </div>
                    <nuxt-link style="width:100px;font-size:14px !important;" class="show-on-mobile mb-3" to="/paket">
                        Lihat
                        Semua
                    </nuxt-link>
                </div>
                <div class="row" style="overflow:auto !important;flex-wrap:nowrap">
                    <div class="col-4 mb-3 column-receiver-and-packet">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/1.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-6">Receiver</div>
                                <div class="text-center">Mulai dari</div>
                                <div class="fw-bold text-center fs-6">Rp 314.000</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/receiver">Beli Sekarang <i style="color:black;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 mb-3 column-receiver-and-packet">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/2.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-6">Paket Berlangganan</div>
                                <div class="text-center">Mulai dari</div>
                                <div class="fw-bold text-center fs-6">Rp 314.000</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/paket">Beli Sekarang <i style="color:black;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 mb-3 column-receiver-and-packet">
                        <div class="shadow-product w-100 product-box" style="height:100%">
                            <img src="~/assets/3.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-6">List Channel & Program</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/channel">Beli Sekarang <i style="color:black;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-3">
            <div class="match-box"
                :style="`background-image:url('${backgroundImage}');background-size: cover;background-repeat:no-repeat;min-height:500px`">
                <div class="container-fluid">
                    <div class="py-3 px-5 group-match">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="title-section title-match"
                                    style="color:#2C69A7;font-size:42px;font-weight:bold">Jadwal
                                    Minggu Ini
                                </div>
                                <div class="subtitle-section subtitle-match" style="font-size:20px;color:#2C69A7;">Mulai
                                    dari sepak bola, Voli, Basket
                                    hingga Tenis</div>
                            </div>
                            <div class="col-lg-7">
                                <div class="d-flex flex-wrap">
                                    <div style="width:50%" class="pe-3 sub-group-match">
                                        <div class="dropdown mb-3 w-100">
                                            <button
                                                class="btn btn-dropdown-match btn-secondary dropdown-toggle text-left w-100"
                                                style="padding: 5px 15px;color:#00539B;border:1px #00539B solid;background:#fff"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>
                                                    <span class="title" style="font-size:13px;">Filter By
                                                        Kompetisi</span><br>
                                                    <span class="subtitle"
                                                        style="font-weight:600;">{{selectKompetisi}}</span>
                                                </span>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item"
                                                        style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                                        v-for="context in listKompetisi" href="javascript:void(0)"
                                                        @click="selectKompetisi = context.kompetisi; selectKompetisiId = context.id;getJadwalKompetisi()">{{context.kompetisi}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div style="width:50%" class="sub-group-match">
                                        <div class="dropdown mb-3 w-100">
                                            <button
                                                class="btn btn-dropdown-match btn-secondary dropdown-toggle text-left w-100"
                                                style="padding: 5px 15px;color:#00539B;border:1px #00539B solid;background:#fff"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>
                                                    <span class="title" style="font-size:13px;">By Date</span><br>
                                                    <span class="subtitle"
                                                        style="font-weight:600;">{{selectKompetisiDate}}</span>
                                                </span>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item"
                                                        style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                                        v-for="context in listKompetisiDate" href="javascript:void(0)"
                                                        @click="selectKompetisiDate = context.trxdatetext; selectKompetisiDateId = context.trxdate;getJadwalKompetisi()">{{context.trxdatetext}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row d-flex justify-content-end">
                            <div class="col-lg-8">
                                <div class="w-100 bg-white p-3" style="border-radius:10px">

                                    <div class="row match-result">
                                        <div class="col-lg-6" v-for="context in resultKompetisi">
                                            <div class="w-100">
                                                <img :src="context.logo" class="mt-3" style="width:100px !important">
                                            </div>
                                            <div class="d-flex align-items-center pb-2 mt-2 match-result-element"
                                                style="border-bottom:1px black solid"
                                                v-for="schedule in context.schedule">
                                                <div class="text title-club"
                                                    style="color:#00539B;font-weight:600;font-size:14px;margin-right:10px;text-align:right;">
                                                    {{ schedule.club1 }}</div>
                                                <img :src="schedule.logo1" class="image-club"
                                                    style="width:30px;margin-right:10px;">
                                                <div class="text time"
                                                    style="color:#00539B;font-weight:600;font-size:14px;margin-right:10px">
                                                    {{ schedule.jam }}</div>
                                                <img :src="schedule.logo2" class="image-club"
                                                    style="width:30px;margin-right:10px;text-align:left">
                                                <div class="text title-club"
                                                    style="color:#00539B;font-weight:600;font-size:14px;">
                                                    {{schedule.club2}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container d-flex justify-content-center">
                <img src="@/assets/ilustrator-mobile.png" class="w-100 show-on-mobile mb-3" style="max-width:500px" />
            </div>
        </section>
        <section class="mb-3">
            <div class="container">
                <div class="title-section ">{{filmTitle}}</div>
                <div class="subtitle-section">{{filmSubtitle}}</div>
            </div>
            <div class="container">
                <div class="wrap-gallery d-flex py-3" id="mom-movie-gallery"
                    style="background-color:white; overflow-x: auto; width:100%;">
                    <div class="gallery" v-for="context in listFilm">
                        <img :src="context.imageurl" style="margin-right:10px;border-radius: 10px;" />
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-5">
            <div class="container">
                <div class="title-section ">{{kidTitle}}</div>
                <div class="subtitle-section">{{kidSubtitle}}
                </div>
            </div>
            <div class="container">
                <div class="wrap-gallery d-flex py-3" id="kids-movie-gallery"
                    style="background-color:white; overflow-x: auto; width:100%;">
                    <div class="gallery" v-for="context in listKid">
                        <img :src="context.imageurl" style="margin-right:10px;border-radius: 10px;" />
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import axios from "axios"
    import backgroundImage from "~/assets/bg-pertandingan.png"
    import headerImageDesktop1 from "~/assets/static-content/banner/1.png"
    import headerImageDesktop2 from "~/assets/static-content/banner/2.png"
    import headerImageDesktop3 from "~/assets/static-content/banner/3.png"

    import headerImageMobile1 from "~/assets/static-content/banner/1-mobile.png"
    import headerImageMobile2 from "~/assets/static-content/banner/2-mobile.png"
    import headerImageMobile3 from "~/assets/static-content/banner/3-mobile.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const config = useRuntimeConfig()

    const intervalKidsMovie = ref(null);
    const intervalMom = ref(null);

    const filmTitle = ref('');
    const filmSubtitle = ref('');
    const listFilm = ref([]);

    const kidTitle = ref('');
    const kidSubtitle = ref('');
    const listKid = ref([]);

    const listKompetisi = ref([]);
    const listKompetisiDate = ref([]);

    const selectKompetisi = ref('');
    const selectKompetisiId = ref('');

    const selectKompetisiDate = ref('');
    const selectKompetisiDateId = ref('');

    const resultKompetisi = ref([]);

    import logoNex from "~/assets/logo-nex-2.png";
    const {
        data
    } = await getHome()
    onMounted(() => {
        sliderKidsMovie()
        momMovieGallery()
        if (selectKompetisiDateId.value && selectKompetisiId.value) {
            getJadwalKompetisi()
        }
    });
    useHead({
        title: 'TV Satelit Parabola Berlangganan Indonesia | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'TV Satelit Parabola Berlangganan Indonesia | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'TV Satelit Parabola Berlangganan Indonesia | Nex Parabola'
            },
            {
                name: 'keywords',
                content: 'Nex, Nex Parabola, Pay TV, TV Berlangganan'
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

    onBeforeRouteLeave((to, from, next) => {
        if (intervalKidsMovie.value) {
            clearInterval(intervalKidsMovie.value);
        }
        if (intervalMom.value) {
            clearInterval(intervalMom.value);
        }
        next()

    })

    async function getHome() {
        let res = await axios.get(config.public.API_URL + 'home/home', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })

        if (res.status == 200) {
            filmTitle.value = res.data.data.filmtitle;
            filmSubtitle.value = res.data.data.filmtitlenote;
            listFilm.value = res.data.data.filmbanner;
            kidTitle.value = res.data.data.kidstitle;
            kidSubtitle.value = res.data.data.kidstitlenote;
            listKid.value = res.data.data.kidsbanner;

            listKompetisi.value = res.data.data.kompetisi;
            listKompetisiDate.value = res.data.data.kompetisidate;

            if (listKompetisi.value.length) {
                selectKompetisiId.value = listKompetisi.value[0].id;
                selectKompetisi.value = listKompetisi.value[0].kompetisi;
            }

            if (listKompetisiDate.value.length) {
                selectKompetisiDateId.value = listKompetisiDate.value[0].trxdate;
                selectKompetisiDate.value = listKompetisiDate.value[0].trxdatetext;
            }



            return res.data.data
        }
    }

    async function getJadwalKompetisi() {
        resultKompetisi.value = []
        let res = await axios.get(config.public.API_URL + 'home/jadwalkompetisi', {
            params: {
                kompetisiid: selectKompetisiId.value,
                trxdate: selectKompetisiDateId.value
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })

        if (res.status == 200) {
            resultKompetisi.value = res.data.data.list;
        }
    }

    function sliderKidsMovie() {
        let elGallery = document.getElementById('kids-movie-gallery');
        let triggerStop = 0;
        let kanan = true;
        intervalMom.value = setInterval(() => {
            if (triggerStop == elGallery.scrollLeft && elGallery.scrollLeft > 0) {
                if (kanan) {
                    kanan = false;
                } else {
                    kanan = true;
                }
            } else if (elGallery.scrollLeft < 1) {
                kanan = true;
            }

            triggerStop = elGallery.scrollLeft;

            if (kanan) {
                elGallery.scrollTo(elGallery.scrollLeft + 1, 0);
            } else {
                elGallery.scrollTo(elGallery.scrollLeft - 1, 0);
            }
        }, 15);
    }

    function momMovieGallery() {
        let elGallery = document.getElementById('mom-movie-gallery');
        let triggerStop = 0;
        let kanan = true;
        intervalKidsMovie.value = setInterval(() => {
            if (triggerStop == elGallery.scrollLeft && elGallery.scrollLeft > 0) {
                if (kanan) {
                    kanan = false;
                } else {
                    kanan = true;
                }
            } else if (elGallery.scrollLeft < 1) {
                kanan = true;
            }

            triggerStop = elGallery.scrollLeft;

            if (kanan) {
                elGallery.scrollTo(elGallery.scrollLeft + 1, 0);
            } else {
                elGallery.scrollTo(elGallery.scrollLeft - 1, 0);
            }
        }, 15);
    }
</script>

<style scoped>
    @media(max-width:991px) {
        .column-receiver-and-packet {
            min-width: 250px
        }
    }

    @media(max-width:991px) {
        .header-mobile {
            display: flex;
            align-items: flex-end !important;
            min-height: 900px;
            background-position: center;
            background-size: cover;
        }
    }

    @media(max-width:876px) {
        .header-mobile {
            min-height: 700px;
            background-size: cover;
        }
    }

    @media(max-width:576px) {
        .header-mobile {
            background-size: cover;
            min-height: 500px
        }
    }
</style>