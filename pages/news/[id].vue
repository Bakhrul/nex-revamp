<template>
    <div>
        <Navbar></Navbar>
        <section style="background:#f2f2f2">
            <div class="container container-news-detail">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-8">
                                <h1 style="font-weight:600;" class="mt-5 mb-3">{{title}}</h1>
                                <span class="px-3 py-2 mt-5"
                                    style="background:#6e6e6e;color:#fff;border-radius: 10px">{{category}}</span>
                                <div class="fs-5 pt-3" style="color:#8a8686">{{date}}</div>
                                <img :src="image" class="w-100 mb-5 mt-3" />
                                <div class="mb-5" v-html="content"></div>
                            </div>
                            <div class="col-lg-4">
                                <h3 style="border-bottom: 1px #ddd solid;font-weight:500" class="pb-3 mt-5">Klik Untuk
                                    Cek Paket NEX Parabola</h3>
                                <div class="shadow-product mb-5 w-100 product-box bg-white">
                                    <img src="~/assets/static-content/paket/pelanggan-baru/1.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3 align-items-center">
                                            <div class="fw-bold fs-6">Basic</div>
                                            <div style="width:120px;">
                                                <div class="badge-packet">Pelanggan Baru</div>
                                            </div>
                                        </div>
                                        <div>Paket favorit pilihan pelanggan setia Nex, dimana 16 Siaran Premium akan
                                            hadir
                                            menemani kamu!</div>
                                    </div>
                                    <div class="py-3 px-5 d-flex justify-content-center footer">
                                        <a @click="openPelangganBaru(1)" href="javascript:void(0)"
                                            style="border-radius: 20px;"
                                            class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                                    </div>
                                </div>
                                <div class="shadow-product w-100 product-box bg-white">
                                    <img src="~/assets/static-content/paket/pelanggan-baru/2.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3 align-items-center">
                                            <div class="fw-bold fs-6">KIDS</div>
                                            <div style="width:120px;">
                                                <div class="badge-packet">Pelanggan Baru</div>
                                            </div>
                                        </div>
                                        <div>Kumpulan tayangan terbaik dari mancanegara yang seru dan edukatif untuk
                                            menemani si
                                            kecil</div>
                                    </div>
                                    <div class="py-3 px-5 d-flex justify-content-center footer">
                                        <a @click="openPelangganBaru(2)" href="javascript:void(0)"
                                            style="border-radius: 20px;"
                                            class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                                    </div>
                                </div>
                                <div class="shadow-product w-100 product-box bg-white">
                                    <img src="~/assets/static-content/paket/pelanggan-baru/3.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3 align-items-center">
                                            <div class="fw-bold fs-6">DIAMOND</div>
                                            <div style="width:120px;">
                                                <div class="badge-packet">Pelanggan Baru</div>
                                            </div>
                                        </div>
                                        <div>Paket terbaik dari Nex dimana kami bisa menikmati Kesenangan Tak Terbatas
                                            mulai
                                            dari Olahraga hingga Hiburan</div>
                                    </div>
                                    <div class="py-3 px-5 d-flex justify-content-center footer">
                                        <a @click="openPelangganBaru(3)" href="javascript:void(0)"
                                            style="border-radius: 20px;"
                                            class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <h3>Artikel Lainnya</h3>
                                <div class="row">
                                    <div class="col-lg-4 mb-3" v-for="a in other">
                                        <div class="shadow-product w-100 product-box">
                                            <img :src="a.image" />
                                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                                style="min-height:120px">
                                                <div class="fw-bold fs-5" style="overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;">{{a.title}}</div>
                                            </div>
                                            <div class="p-3 d-flex justify-content-center footer"
                                                style="border-top:1px #ddd solid">
                                                <nuxt-link :to="'/news/' + a.id" class="w-100 p-2 text-center fw-bold"
                                                    style="border-radius:10px;border:2px #2C69A7 solid;color:#2C69A7 !important"
                                                   >Baca Sekarang <i
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
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-baru-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-baru/1.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">BASIC</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 19.900
                                </div>
                            </div>
                        </div>
                        <div style="line-height:1.5;">Animal Planet, Discovery, BBC Earth, BBC Lifestyle, BBC World
                            News, AXN, ONE, Rock Entertainment, Rock Action, MTV, HGTV, TLC, AFN, Citra Culinary &
                            Travel, & 6 Channel TV Nasional</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-baru-2">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-baru/2.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">KIDS</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 19.900
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nickelodeon, Nickelodeon Junior, Dreamworks, Animax</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-baru-3">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-baru/3.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">DIAMOND</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 239.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex Football (1, 2, 3), Champions TV (1, 2, 3, 5, 6), Voli TV,
                            Dreamworks, Nickelodeon, Nickelodeon Junior, Animax, Animal Planet, Discovery, BBC Earth,
                            BBC Lifestyle, BBC World News, AXN, ONE, Rock Entertainment, & banyak lagi</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
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

    import axios from "axios";
    const config = useRuntimeConfig()

    const title = ref('');
    const date = ref('');
    const image = ref('');
    const content = ref('');
    const category = ref('');
    const other = ref([]);

    const {
        data
    } = await getDetail()



    async function getDetail() {
        let res = await axios.get(config.public.API_URL + 'news/newsdetail', {
            params: {
                id: route.params.id
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            title.value = res.data.data.title;
            date.value = res.data.data.trxdate;
            image.value = res.data.data.image;
            content.value = res.data.data.content;
            category.value = res.data.data.category;
            other.value = res.data.data.othernews;
            return res.data.data;
        }
    }

    function openPelangganBaru(type) {
        $("#modal-pelanggan-baru-" + type).modal('show');
    }
</script>