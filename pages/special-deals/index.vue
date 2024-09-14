<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 25px">
                        <h6 class="text-white fw-bold" style="max-width:120px;margin-block-end: 0 !important;">Promo
                            Receiver & Paket</h6>
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
                        <h1 class="text-white fw-bold">PROMO RECEIVER & PAKET</h1>
                        <div class="text-white">Nonton Tayangan Sports & Entertainment<br> Terbaik Makin Seru dengan
                            Promo
                            Eksklusif!</div>
                    </div>
                </div>
            </div>
        </div>
        <section class="py-5" style="background:#232323">
            <div class="container">
                <h5 class="text-white show-on-desktop">Paket Terbatas</h5>
                <div class="text-white show-on-desktop">Pilih sesuai dengan kebutuhan kamu</div>
                <h5 class="text-white show-on-mobile text-center">Paket Terbatas</h5>

            </div>
            <div class="container mt-3">
                <div class="show-on-mobile">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 mb-3" v-for="(context, index) in listTerbatas">
                            <div style="position: relative;width:100%">
                                <div class="shadow-product w-100 product-box rounded-special-deals bg-black rounded"
                                    style="border:0 !important">
                                    <img :src="context.image" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">{{context.title}}</div>
                                        </div>
                                        <div class="text-white">{{context.note}} </div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openTerbatas(index)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="w-100 show-on-desktop">
                        <div class="slider-paket-terbatas">
                            <div class="me-3 width-slider-packet" style="position: relative;width:330px"
                                v-for="(context, index) in listTerbatas">
                                <div class="shadow-product w-100 product-box rounded-special-deals bg-black rounded"
                                    style="border:0 !important">
                                    <img :src="context.image" />
                                    <div class="p-3 " style="min-height:200px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">{{context.title}}</div>
                                        </div>
                                        <div class="text-white">{{context.note}} </div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openTerbatas(index)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-5 pb-5 bg-section">
            <div class="container">
                <h5 class="mb-1 fw-bold title-section show-on-desktop">Paket Lainnya</h5>
                <div class="mb-3 subtitle-section show-on-desktop">Pilih sesuai dengan kebutuhan kamu</div>
                <h5 class="show-on-mobile text-center">Paket Lainnya</h5>
                <div class="show-on-mobile">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 mb-3" v-for="(context, index) in listLainnya">
                            <div class="shadow-product product-box rounded-special-deals bg-white w-100">
                                <img :src="context.image" />
                                <div class="p-3 " style="min-height:180px">
                                    <div class="d-flex justify-content-between mb-3">
                                        <div class="fw-bold fs-6">{{context.title}}</div>
                                    </div>
                                    <div>{{context.note}}
                                    </div>
                                </div>
                                <div class="py-3 px-3 d-flex justify-content-center footer">
                                    <a @click="openLainnya(index)" href="javascript:void(0)"
                                        style="border-radius: 20px;"
                                        class="text-center btn bg-primary text-white w-100 p-3">LEBIH LANJUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider-paket show-on-desktop">
                    <div class="shadow-product product-box rounded-special-deals bg-white me-3 width-slider-packet"
                        style="width:330px" v-for="(context, index) in listLainnya">
                        <img :src="context.image" />
                        <div class="p-3 " style="min-height:180px">
                            <div class="d-flex justify-content-between mb-3">
                                <div class="fw-bold fs-6">{{context.title}}</div>
                            </div>
                            <div>{{context.note}}</div>
                        </div>
                        <div class="py-3 px-3 d-flex justify-content-center footer">
                            <a @click="openLainnya(index)" href="javascript:void(0)" style="border-radius: 20px;"
                                class="text-center btn bg-primary text-white w-100 p-3">LEBIH LANJUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>

        <!-- modal paket terbatas -->
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-spesial-deals">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:500px">
                <div class="modal-content">
                    <div class="modal-body rounded" v-if="dataDetail">
                        <!-- <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button> -->
                        <img :src="dataDetail.image" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">{{dataDetail.title}}</h5>
                        <div :class="dataDetail.shadow == 1 ? 'note-shadow' : ''" style="line-height:1.5;"
                            v-html="dataDetail.notedetail"></div>
                        <div class="row justify-content-center mt-5 px-4">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center"
                                v-for="context in dataDetail.ecommerce">
                                <a :href="context.url" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                        style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                        <img :src="context.logo" style="height:23px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a v-if="dataDetail.custom == 1 && dataDetail.buttontext && dataDetail.url"
                                :href="dataDetail.url" target="_blank"
                                class="text-center btn bg-primary text-white p-3 btn-sm">{{dataDetail.buttontext}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    import backgroundImageMobile from "~/assets/header/promo-mobile.png"
    import backgroundImageDesktop from "~/assets/header/promo-desktop.png"
    import logoNex from "~/assets/logo-nex-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const config = useRuntimeConfig()

    const listTerbatas = ref([]);
    const listLainnya = ref([])

    const dataDetail = ref(null);

    const {
        data
    } = await getPacket()

    async function getPacket() {
        let res = await axios.get(config.public.API_URL + 'home/specialdeal', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            listTerbatas.value = res.data.data.paketterbatas
            listLainnya.value = res.data.data.paketlain
            return res.data.data;
        }
    }

    function openLainnya(index) {
        dataDetail.value = listLainnya.value[index];
        $("#modal-spesial-deals").modal('show');
    }

    function openTerbatas(index) {
        dataDetail.value = listTerbatas.value[index];
        $("#modal-spesial-deals").modal('show');
    }
    onMounted(() => {
        initSlider()
        sliderPaket()
    });

    onBeforeRouteLeave((to, from, next) => {
        if ($('.slider-paket-terbatas').hasClass('slick-initialized')) {
            $('.slider-paket-terbatas').slick('destroy');
        }
        if ($('.slider-paket').hasClass('slick-initialized')) {
            $('.slider-paket').slick('destroy');
        }
        next()
    })

    function openPacketTerbatas(type) {
        $("#modal-paket-terbatas-" + type).modal('show');
    }

    function openPacketLainnya(type) {
        console.log(type)
        $("#modal-paket-lainnya-" + type).modal('show');
    }

    function initSlider() {

        $('.slider-paket-terbatas').slick({
            infinite: false,
            speed: 300,
            centerMode: false,
            dots: false,
            variableWidth: true,
            prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="30" height="30" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 18.5732L18 27.5732M18 27.5732L27 36.5732M18 27.5732H36M49.5 27.5732C49.5 39.9997 39.4264 50.0732 27 50.0732C14.5736 50.0732 4.5 39.9997 4.5 27.5732C4.5 15.1468 14.5736 5.07324 27 5.07324C39.4264 5.07324 49.5 15.1468 49.5 27.5732Z" stroke="#F3F3F3" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`,
            nextArrow: `<button type='button' class='slick-next pull-right'><svg width="30" height="30" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 36.5732L36 27.5732M36 27.5732L27 18.5732M36 27.5732L18 27.5732M4.5 27.5732C4.5 15.1468 14.5736 5.07324 27 5.07324C39.4264 5.07324 49.5 15.1468 49.5 27.5732C49.5 39.9996 39.4264 50.0732 27 50.0732C14.5736 50.0732 4.5 39.9996 4.5 27.5732Z" stroke="#F3F3F3" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`,
        });

    }

    function sliderPaket() {
        $('.slider-paket').slick({
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

    useHead({
        title: 'Promo | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'Promo | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'Promo | Nex Parabola'
            },
            {
                name: 'keywords',
                content: 'promo nex parabola, receiver nex parabola bundling diamond, nex parabola combo,'
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
</script>
<style scoped>
    .bg-section {
        background: #f2f2f2;
        border-top: 1px #ddd solid;
    }

    @media(max-width:991px) {
        .bg-section {
            background: #fff !important;
        }

        .product-box {
            max-width: 300px !important;
            display: block;
            margin: auto;
        }
    }
</style>