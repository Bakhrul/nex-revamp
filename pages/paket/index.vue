<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img alt="header" :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">Paket</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:100% 100%;width:100%;position:relative;`">
                <img alt="header" :src="backgroundImageDesktop" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 0">
                        <h1 class="text-white fw-bold">PAKET</h1>
                        <div class="text-white">Banyak Pilihan Untuk Menambah Keseruan<br> Kumpul dengan Keluarga!</div>
                    </div>
                </div>
            </div>
        </div>
        <section class="mt-3">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <div style="overflow:auto">
                        <div class="d-flex align-items-center pb-3" style="overflow:auto;width:100%">
                            <div class="packet-filter mb-3 me-3" style="cursor:pointer;width:200px;font-size:15px"
                                @click="type = 'all'" :class="type == 'all' ? 'active' : ''">SEMUA</div>
                            <div class="packet-filter mb-3 me-3"
                                style="cursor:pointer;width:200px !important;font-size:15px" v-for="context in list"
                                @click="type = context.id" :class="type == context.id ? 'active' : ''"
                                v-html="context.category"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-5 pb-5 bg-section">
            <div class="container">
                <template v-for="(category,index) in list">
                    <h4 class="mb-3 fw-bold c-primary" v-show="type == 'all' || type == category.id"
                        v-html="category.category">
                    </h4>
                    <div class="slider-paket slider-baru mb-5" :class="`slider-paket-${index}`"
                        v-show="type == 'all' || type == category.id">
                        <div class="me-3 width-slider-packet" style="width:330px;"
                            v-for="(packet, idx) in category.packet">
                            <div class="shadow-product w-100 product-box bg-white">
                                <NuxtImg alt="paket" loading="lazy" format="webp" :src="packet.image" />
                                <div class="p-3 " style="min-height:210px">
                                    <div class="d-flex justify-content-between mb-3 align-items-start">
                                        <div class="fw-bold fs-6 pe-2">{{packet.name}}</div>
                                        <div style="width:120px;">
                                            <div class="badge-packet">{{packet.badge}}</div>
                                        </div>
                                    </div>
                                    <div style="min-height:100px">{{packet.note}}</div>
                                    <div class="d-flex flex-wrap">
                                        <template v-for="option in packet.periode">
                                            <button :class="packet.selectPeriode == option.id ? 'active' : ''"
                                                class="btn btn-option-packet"
                                                @click="packet.selectPeriode = option.id;packet.selected = true;packet.selectPrice = option.price;packet.selectEcommerce = option.ecommerce"
                                                type="button">{{ option.name }}</button>
                                        </template>
                                    </div>
                                </div>
                                <div class="pb-3 px-3 d-flex justify-content-center footer">
                                    <button type="button"
                                        @click="detailPakcet(packet.id,packet.image,packet.name, packet.selectPrice, packet.noteDetail, packet.selectEcommerce)"
                                        style="border-radius: 20px;" :disabled="!packet.selected"
                                        class="text-center btn bg-primary text-white w-100 px-3 py-3">BELI
                                        SEKARANG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
        <Footer></Footer>
        <!-- START PELANGGAN BARU -->
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-packet">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:600px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <!-- <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button> -->
                        <NuxtImg alt="paket" loading="lazy" format="webp" :src="image" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="fs-6 fw-bold mt-3 pe-3" style="word-break: break-word">{{name}}</div>
                            <div style="width:160px" class="d-flex justify-content-end" v-if="badge">
                                <span class="fw-bold py-1 px-2 mt-3"
                                    style="width:auto;font-size:11px;text-align:center;border-radius:10px;color:#2C69A7;background:#D5E0E9;display: flex;align-items: center;min-height:32px;">
                                    {{badge}}
                                </span>
                            </div>
                        </div>
                        <div style="line-height:1.5;" class="pt-3" v-html="note"></div>
                        <div class="row justify-content-center mt-5 px-4">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center" v-for="context in ecommerce">
                                <a :href="context.url" target="_blank" class="w-100"
                                    @click="$ctaPacket(id, context.id)">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                        style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                        <NuxtImg alt="ecommerce" loading="lazy" format="webp" :src="context.logo" style="height:23px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PELANGGAN SETIA -->
    </div>
</template>

<script setup>
    import axios from "axios"

    import backgroundImageMobile from "~/public/header/paket.png"
    import backgroundImageDesktop from "~/public/header/paket.png"
    import logoNex from "~/public/bg-about-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    const type = ref('all')
    const list = ref([]);
    const config = useRuntimeConfig()
    const {
        $ctaPacket
    } = useNuxtApp()

    const image = ref('');
    const id = ref('');
    const name = ref('');
    const note = ref('');
    const badge = ref('');
    const ecommerce = ref([]);
    const {
        data
    } = await getPacket()

    async function getPacket() {
        let res = await axios.get(config.public.API_URL + 'paket/paket', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            for (let i = 0; i < res.data.data.list.length; i++) {
                let listPacket = [];
                for (let x = 0; x < res.data.data.list[i].paket.length; x++) {
                    let paket = res.data.data.list[i].paket[x]
                    let listPeriode = [];
                    if (paket.period) {
                        for (let p = 0; p < paket.period.length; p++) {
                            listPeriode.push({
                                id: paket.period[p].id,
                                price: paket.period[p].badgedetail,
                                ecommerce: paket.period[p].ecommerce,
                                name: paket.period[p].period,
                            })
                        }
                    }

                    listPacket.push({
                        id: paket.id,
                        name: paket.paketname,
                        image: paket.image,
                        badge: paket.paketbadge,
                        price: paket.badgedetail,
                        ecommerce: paket.ecommerce,
                        periode: listPeriode,
                        note: paket.note,
                        noteDetail: paket.notedetail,
                        selected: listPeriode.length > 0 ? false : true,
                        selectPeriode: '',
                        selectPrice: listPeriode.length > 0 ? '' : paket.badgedetail,
                        selectEcommerce: listPeriode.length > 0 ? [] : paket.ecommerce,
                    })
                }
                list.value.push({
                    id: res.data.data.list[i].id,
                    category: res.data.data.list[i].category,
                    packet: listPacket,

                })
            }
            return res.data.data;
        }
    }

    onMounted(() => {

        for (let i = 0; i < list.value.length; i++) {
            $('.slider-paket-' + i).slick({
                infinite: true,
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
    });

    function detailPakcet(idX, imageX, nameX, price, noteX, ecommerceX) {
        image.value = imageX;
        name.value = nameX;
        note.value = noteX;
        badge.value = price;
        id.value = idX;
        ecommerce.value = ecommerceX;

        $("#modal-packet").modal('show');

        $ctaPacket(idX, '');
    }



    useHead({
        title: 'Paket | Nex',
        meta: [{
                name: 'title',
                content: 'Paket | Nex'
            },
            {
                name: 'ogTitle',
                content: 'Paket | Nex'
            },
            {
                name: 'keywords',
                content: 'daftar paket nex parabola, daftar harga paket nex parabola, harga paket nex parabola, paket tv olahraga, paket diamond nex parabola, tv langganan liga inggris, nex parabola paket, paket nex parabola liga 1, paket tv champion, paket liga inggris, langganan piala dunia, langganan liga inggris, satelit nex parabola, paket kids nex parabola, paket basic nex parabola, harga receiver nex parabola'
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
    }
</style>