<template>
    <div>
        <Navbar></Navbar>
        <section style="background:#fff">
            <div class="container container-news-detail">
                <div class="card" style="border:0 !important;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-8 pt-3">
                                <span class="px-3 py-2 mt-5"
                                    style="background:#8E8E93;color:#fff;border-radius: 10px">{{category}}</span>
                                <h1 style="font-weight:600;" class="mt-3 mb-3">{{title}}</h1>
                                <div class="fs-5 pt-1" style="color:#8a8686">{{date}}</div>
                                <img :src="image" class="w-100 mb-5 mt-3" />
                                <div class="mb-5" v-html="content"></div>
                            </div>
                            <div class="col-lg-4 show-on-desktop">
                                <div style="border-bottom: 3px #a5a1a1 solid;font-weight:bold;max-width:250px;display: block;margin:auto;"
                                    class="pb-3 fs-4 mb-3 mt-5 text-center">Klik Untuk
                                    Cek Paket<br> NEX</div>
                                <div class="w-100" style="max-width:300px;display: block;margin:auto"
                                    v-for="(packet, idx) in listPacket">
                                    <div class="shadow-product mb-3 w-100 product-box bg-white">
                                        <img :src="packet.image" />
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
                                                @click="detailPakcet(packet.image,packet.name, packet.selectPrice, packet.noteDetail, packet.selectEcommerce)"
                                                style="border-radius: 20px;" :disabled="!packet.selected"
                                                class="text-center btn bg-primary text-white w-100 px-3 py-3">BELI
                                                SEKARANG</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-5 show-on-mobile">
                                <div class="title-section-news">Klik Untuk Cek Paket Nex</div>
                                <div class="slider-news slider-paket">
                                    <div class="shadow-product width-slider-news mb-3 product-box bg-white"
                                        v-for="(packet, idx) in listPacket">
                                        <img :src="packet.image" />
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
                                                @click="detailPakcet(packet.image,packet.name, packet.selectPrice, packet.noteDetail, packet.selectEcommerce)"
                                                style="border-radius: 20px;" :disabled="!packet.selected"
                                                class="text-center btn bg-primary text-white w-100 px-3 py-3">BELI
                                                SEKARANG</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-5">
                                <div class="title-section-news">Artikel Lainnya</div>
                                <div class="slider-news slider-paket">
                                    <div class="width-slider-news mb-3" v-for="a in other">
                                        <div class="shadow-product w-100 product-box">
                                            <img :src="a.image" />
                                            <div
                                                class="d-flex px-3 py-2 mt-1 justify-content-between align-items-center">
                                                <span class="px-3 py-2"
                                                    style="background:#8E8E93;color:#fff;border-radius: 10px;font-size:12px;">{{a.category}}</span>
                                                <div class="text-gray-400"
                                                    style="font-size:12px;font-weight:bold;color:#8E8E93 !important">
                                                    {{a.trxdate}}</div>
                                            </div>
                                            <div class="px-3 py-1" style="min-height:100px">
                                                <div style="overflow: hidden;line-clamp:2;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
                                                    class="fw-bold fs-5">{{a.title}}</div>
                                            </div>
                                            <div class="p-3 d-flex justify-content-center footer"
                                                style="border-top:1px black solid">
                                                <nuxt-link :to="`/nexnews/${a.slugcategory}/${a.slug}`" class="w-100 text-center fw-bold"
                                                    style="border-radius:10px;color:#2C69A7 !important">Baca Sekarang <i
                                                        style="color:#2C69A7 !important;"
                                                        class="bi bi-chevron-right"></i></nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <img :src="imagePacket" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="fs-6 fw-bold mt-3 pe-3" style="word-break: break-word">{{namePacket}}</div>
                            <div style="width:160px" class="d-flex justify-content-end" v-if="badgePacket">
                                <span class="fw-bold py-1 px-2 mt-3"
                                    style="width:auto;font-size:11px;text-align:center;border-radius:10px;color:#2C69A7;background:#D5E0E9;display: flex;align-items: center;min-height:32px;">
                                    {{badgePacket}}
                                </span>
                            </div>
                        </div>
                        <div style="line-height:1.5;" class="pt-3" v-html="notePacket"></div>
                        <div class="row justify-content-center mt-5 px-4">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center" v-for="context in ecommercePacket">
                                <a :href="context.url" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                        style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                        <img :src="context.logo" style="height:23px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PELANGGAN BARU -->
    </div>
</template>

<script setup>
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    const route = useRoute()
    import logoNex from "~/assets/logo-nex-2.png";
    import axios from "axios";

    definePageMeta({
        key: route => route.fullPath
    })

    const config = useRuntimeConfig()

    const router = useRouter()

    const title = ref('');
    const date = ref('');
    const image = ref('');
    const content = ref('');
    const category = ref('');
    const other = ref([]);

    const listPacket = ref([]);
    const imagePacket = ref('');
    const namePacket = ref('');
    const notePacket = ref('');
    const badgePacket = ref('');
    const ecommercePacket = ref([]);

    const metaTitle = ref('');
    const metaDesc = ref('');
    const metaKeyword = ref('');

    const {
        data
    } = await getDetail()



    async function getDetail() {
        let res = await axios.get(config.public.API_URL + 'news/newsdetail', {
            params: {
                slug: route.params.id
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            if(!res.data.success){
                router.replace({
                    path: '/nexnews'
                })
                return false;
            }
            title.value = res.data.data.title;
            date.value = res.data.data.trxdate;
            image.value = res.data.data.image;
            content.value = res.data.data.content;
            category.value = res.data.data.category;
            other.value = res.data.data.othernews;
            metaTitle.value = res.data.data.metatitle ? res.data.data.metatitle : res.data.data.metetitle;
            metaDesc.value = res.data.data.metadesc;
            metaKeyword.value = res.data.data.metakeyword;
            for (let i = 0; i < res.data.data.paket.length; i++) {
                let paket = res.data.data.paket[i];

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

                listPacket.value.push({
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
            return res.data.data;
        }
    }

    function detailPakcet(imageX, nameX, price, noteX, ecommerceX) {
        imagePacket.value = imageX;
        namePacket.value = nameX;
        notePacket.value = noteX;
        badgePacket.value = price;
        ecommercePacket.value = ecommerceX;
        $("#modal-packet").modal('show');
    }

    useHead({
        title: `${title.value}`,
        meta: [{
                name: 'title',
                content: `${metaTitle.value}`
            },
            {
                name: 'ogTitle',
                content: `${metaTitle.value}`
            },
            {
                name: 'description',
                content: `${metaDesc.value}`
            },
            {
                name: 'og:description',
                content: `${metaDesc.value}`
            },
            {
                name: 'keywords',
                content: `${metaKeyword.value}`
            },
            {
                name: 'og:image',
                content: `${image.value || logoNex}`
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

    onMounted(() => {


        $('.slider-news').slick({
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

        $('.slider-news-paket').slick({
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

    });
</script>

<style scoped>
    .width-slider-news {
        width: 280px;
        margin-right: 10px
    }

    .title-section-news {
        font-size: 24px !important;
        font-weight: bold;
        position: relative;
        top: -20px;
    }

    @media(max-width:991px) {
        .title-section-news {
            top: -25px;
            font-size: 13px !important
        }
    }
</style>