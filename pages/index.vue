<template>
    <div>
        <Navbar></Navbar>
        <div class="w-100 show-on-desktop">
            <carousel :items-to-show="1" :autoplay="2500" :transition="0" :wrapAround="true">
                <slide v-for="(context, index) in listBanner" :key="index" style="padding: 0 !important">
                    <a href="javascript:void(0)" @click="showBanner(index)" class="w-100" style="padding: 0 !important">
                        <img :src="context.imagedesktop" class="w-100" />
                    </a>
                </slide>
                <template #addons>

                    <pagination />
                </template>
            </carousel>
        </div>
        <div class="w-100 show-on-mobile">
            <carousel :items-to-show="1" :autoplay="2500" :transition="0" :wrapAround="true">
                <slide v-for="(context, index) in listBanner" :key="index" style="padding: 0 !important">
                    <a href="javascript:void(0)" @click="showBanner(index)" class="w-100" style="padding: 0 !important">
                        <img :src="context.imagemobile" class="w-100" />
                    </a>
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
                    <div>

                        <div class="subtitle-section mb-3 pt-2">Pilih sesuai dengan kebutuhan kamu</div>
                    </div>
                </div>
                <div class="w-100 show-on-mobile">
                    <div class="slider-paket slider-paket-home">
                        <div class="column-receiver-and-packet me-2">
                            <div class="shadow-product w-100 product-box">
                                <img src="~/assets/1.png" style="min-height: unset !important;" />
                                <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                    style="min-height:120px">
                                    <div class="fw-bold text-center fs-6">Receiver</div>
                                    <div class="text-center pt-1">Mulai dari</div>
                                    <div class="fw-bold text-center fs-5 pt-1">Rp 314.000</div>
                                </div>
                                <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                    <nuxt-link style="color:#00529C;font-weight:500;" to="/receiver">Beli Sekarang <i
                                            style="color:#00529C;" class="bi bi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="column-receiver-and-packet me-2">
                            <div class="shadow-product w-100 product-box">
                                <img src="~/assets/2.png" style="min-height: unset !important;" />
                                <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                    style="min-height:120px">
                                    <div class="fw-bold text-center fs-6">Paket Berlangganan</div>
                                    <div class="text-center pt-1">Mulai dari</div>
                                    <div class="fw-bold text-center fs-5 pt-1">Rp 19.900</div>
                                </div>
                                <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                    <nuxt-link style="color:#00529C;font-weight:500;" to="/paket">Beli Sekarang <i
                                            style="color:#00529C;" class="bi bi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="column-receiver-and-packet">
                            <div class="shadow-product w-100 product-box" style="height:100%">
                                <img src="~/assets/3.png" style="min-height: unset !important;" />
                                <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                    style="min-height:120px">
                                    <div class="fw-bold text-center fs-5">List Channel & Program</div>
                                </div>
                                <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                    <nuxt-link style="color:#00529C;font-weight:500;" to="/channel">Beli Sekarang <i
                                            style="color:#00529C;" class="bi bi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row show-on-desktop" style="overflow:auto !important;flex-wrap:nowrap">
                    <div class="col-4 mb-3 column-receiver-and-packet">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/1.png" style="min-height: unset !important;" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-6">Receiver</div>
                                <div class="text-center pt-1">Mulai dari</div>
                                <div class="fw-bold text-center fs-5 pt-1">Rp 314.000</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link style="color:#00529C;font-weight:500;" to="/receiver">Beli Sekarang <i
                                        style="color:#00529C;" class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 mb-3 column-receiver-and-packet">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/2.png" style="min-height: unset !important;" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-6">Paket Berlangganan</div>
                                <div class="text-center pt-1">Mulai dari</div>
                                <div class="fw-bold text-center fs-5 pt-1">Rp 19.900</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link style="color:#00529C;font-weight:500;" to="/paket">Beli Sekarang <i
                                        style="color:#00529C;" class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 mb-3 column-receiver-and-packet">
                        <div class="shadow-product w-100 product-box" style="height:100%">
                            <img src="~/assets/3.png" style="min-height: unset !important;" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-5">List Channel & Program</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link style="color:#00529C;font-weight:500;" to="/channel">Beli Sekarang <i
                                        style="color:#00529C;" class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-3">
            <div class="match-box"
                :style="`background-image:url('${backgroundImage}');background-size: 100% 100%;background-repeat:no-repeat;min-height:500px`">
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
                                                <div class="d-flex justify-content-end align-items-center" style="width:43%;">
                                                    <div class="text title-club text-right"
                                                        style="color:#00539B;font-weight:600;font-size:14px;padding-right:10px;text-align:right;">
                                                        {{ schedule.club1 }}</div>
                                                    <img :src="schedule.logo1" class="image-club" style="width:25px;margin-right:10px">
                                                </div>
                                                <div class="text time text-center "
                                                    style="color:#00539B;font-weight:600;font-size:14px;width:14%">
                                                    {{ schedule.jam }}</div>
                                                <div class="d-flex justify-content-start align-items-center"
                                                    style="width:43%;padding-left:10px;">
                                                    <img :src="schedule.logo2" class="image-club"
                                                        style="width:25px;margin-right:10px;text-align:left">
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

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-banner-1">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:550px">
            <div class="modal-content">
                <div class="modal-body rounded">
                    <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                            class="bi bi-x"></i></button>
                    <img src="~/assets/static-content/banner/september/1.png" class="w-100 rounded" />
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mt-3 me-3">Super Big Match - Manchester City vs Arsenal</h5>
                    </div>
                    <div style="line-height:1.5;">Duel Panas Manchester City vs Arsenal di Pekan 5. Tayang LIVE di
                        channel Nex PPV dengan harga 59rb/satu pertandingan.  
                        Kamu tinggal ADD ON Paket Liga Inggris PPV pastikan kamu sudah memiliki Paket Liga
                        Inggris/Diamond/Premium Sport aktif untuk bisa membeli paket ini. 
                        <br><br>
                        *Paket bisa dibeli mulai tanggal 9 - 22 September<br>
                        *Channel akan aktif H-2 Jam sebelum pertandingan</div>
                    <div class="row justify-content-center mt-5 px-4">
                        <div class="col-lg-6 mb-3 d-flex justify-content-center">
                            <a href="https://www.lazada.co.id/shop/nex-parabola-tv/" target="_blank" class="w-100">
                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                    <img src="~/assets/social-media/lazada.jpg" style="height:23px;max-width:100%;" />
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 mb-3 d-flex justify-content-center">
                            <a href="javascript:void(0)" target="_blank" class="w-100">
                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                    <img src="~/assets/social-media/tokopedia.png"
                                        style="height:23px;max-width:100%;" />
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 mb-3 d-flex justify-content-center">
                            <a href="https://shopee.co.id/nexparabola.official?shopCollection=253318341#product_list"
                                target="_blank" class="w-100">
                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                    <img src="~/assets/social-media/shopee.png" style="height:23px;max-width:100%;" />
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 mb-3 d-flex justify-content-center">
                            <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                    <img src="~/assets/social-media/nex.png" style="height:23px;max-width:100%;" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="https://wa.me/6281260012700" class="cs-floating">
        <div class="box">Punya pertanyaan?
            Kami siap untuk
            membantu anda</div>
        <img src="~/assets/cs.png">
    </a>

    <div class="modal fade" tabindex="-1" role="dialog" id="modal-banner">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:500px">
            <div class="modal-content">
                <div class="modal-body rounded" v-if="dataBanner">
                    <!-- <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                            class="bi bi-x"></i></button> -->
                    <img :src="dataBanner.imagedesktop" class="w-100 rounded" />
                    <h5 class="fw-bold mt-3">{{dataBanner.title}}</h5>
                    <div :class="dataBanner.shadow == 1 ? 'note-shadow' : ''" style="line-height:1.5;"
                        v-html="dataBanner.notedetail"></div>
                    <div class="row justify-content-center mt-5 px-4">
                        <div class="col-lg-6 mb-3 d-flex justify-content-center"
                            v-for="context in dataBanner.ecommerce">
                            <a :href="context.url" target="_blank" class="w-100">
                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                    <img :src="context.logo" style="height:23px;max-width:100%;" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a v-if="dataBanner.custom == 1 && dataBanner.buttontext && dataBanner.url"
                            :href="dataBanner.url" target="_blank"
                            class="text-center btn bg-primary text-white p-3 btn-sm">{{dataBanner.buttontext}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios"
    import backgroundImage from "~/assets/bg-pertandingan.png"

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

    const listBanner = ref([]);

    const dataBanner = ref(null);

    import logoNex from "~/assets/logo-nex-2.png";
    const {
        data
    } = await getHome()
    onMounted(() => {
        sliderKidsMovie()
        momMovieGallery()
        sliderPacketHome()
        if (selectKompetisiDateId.value && selectKompetisiId.value) {
            getJadwalKompetisi()
        }
    });

    function sliderPacketHome() {
        $('.slider-paket-home').slick({
            infinite: false,
            speed: 300,
            centerMode: false,
            dots: false,
            variableWidth: true,
            prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="30" height="30" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0002 8.33337L8.8335 12.5M8.8335 12.5L13.0002 16.6667M8.8335 12.5H17.1668M23.4168 12.5C23.4168 18.253 18.7531 22.9167 13.0002 22.9167C7.2472 22.9167 2.5835 18.253 2.5835 12.5C2.5835 6.74707 7.2472 2.08337 13.0002 2.08337C18.7531 2.08337 23.4168 6.74707 23.4168 12.5Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`,
            nextArrow: `<button type='button' class='slick-next pull-right'><svg width="30" height="30" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9998 16.6666L17.1665 12.5M17.1665 12.5L12.9998 8.33329M17.1665 12.5L8.83317 12.5M2.58317 12.5C2.58317 6.74699 7.24687 2.08329 12.9998 2.08329C18.7528 2.08329 23.4165 6.74699 23.4165 12.5C23.4165 18.2529 18.7528 22.9166 12.9998 22.9166C7.24687 22.9166 2.58317 18.2529 2.58317 12.5Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>`,
        });
    }

    function showBanner(index) {
        dataBanner.value = listBanner.value[index]
        $("#modal-banner").modal('show');
    }
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
            listBanner.value = res.data.data.topbanner;
            listKid.value = res.data.data.kidsbanner;
            for (let i = 0; i < 25; i++) {
                listKid.value = listKid.value.concat(res.data.data.kidsbanner);
                listFilm.value = listFilm.value.concat(res.data.data.filmbanner);
            }


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

        elGallery.scrollTo(elGallery.scrollWidth, 0);

        let kiri = true;
        let fixedLeft = elGallery.scrollLeft;
        let trigger = elGallery.scrollLeft;
        setTimeout(() => {

            intervalMom.value = setInterval(() => {

                if (trigger > 0 && kiri) {
                    trigger = elGallery.scrollLeft - 1
                    elGallery.scrollTo(elGallery.scrollLeft - 1, 0);
                    if (trigger < 1) {
                        kiri = false
                    }
                } else {
                    trigger = elGallery.scrollLeft + 1
                    elGallery.scrollTo(elGallery.scrollLeft + 1, 0);
                    if (trigger >= fixedLeft) {
                        kiri = true
                    }
                }
            }, 40)
        }, 500);

    }

    function momMovieGallery() {
        let elGallery = document.getElementById('mom-movie-gallery');
        let triggerStop = 0;
        let kiri = true;
        elGallery.scrollTo(0, 0);
        setTimeout(() => {
            intervalKidsMovie.value = setInterval(() => {
                if (triggerStop == elGallery.scrollLeft && elGallery.scrollLeft > 0) {
                    if (kiri) {
                        kiri = false;
                    } else {
                        kiri = true;
                    }
                } else if (elGallery.scrollLeft < 1) {
                    kiri = true;
                }

                triggerStop = elGallery.scrollLeft;

                if (kiri) {
                    elGallery.scrollTo(elGallery.scrollLeft + 1, 0);
                } else {
                    elGallery.scrollTo(elGallery.scrollLeft - 1, 0);
                }
            }, 30);
        }, 500);

    }
</script>

<style scoped>
    @media(max-width:991px) {
        .column-receiver-and-packet {
            width: 190px !important
        }

        .column-receiver-and-packet .fs-6 {
            font-size: 15px !important;
        }

        .column-receiver-and-packet .fs-5 {
            font-size: 16px !important
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