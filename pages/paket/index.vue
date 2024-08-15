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
                    <h1 class="text-white fw-bold">PAKET</h1>
                    <div class="text-white">Banyak Pilihan Untuk Menambah Keseruan Kumpul dengan Keluarga!</div>
                </div>
            </div>
        </div>
        <section class="my-3">
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-lg-3 mb-3">

                        <div class="packet-filter" style="cursor:pointer" @click="type = 'semua'"
                            :class="type == 'semua' ? 'active' : ''">SEMUA</div>

                    </div>
                    <div class="col-lg-3 mb-3">

                        <div class="packet-filter" style="cursor:pointer" @click="type = 'baru'"
                            :class="type == 'baru' ? 'active' : ''">PELANGGAN BARU</div>

                    </div>
                    <div class="col-lg-3 mb-3">

                        <div class="packet-filter" style="cursor:pointer" @click="type = 'setia'"
                            :class="type == 'setia' ? 'active' : ''">PELANGGAN SETIA
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <section style="background: #f2f2f2" class="pt-5 pb-5">
            <div class="container">
                <h5 class="mb-3">Promo Terbaru Lainnya</h5>
                <div class="row">
                    <div class="col-lg-4 mb-3" v-for="a in 6">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/sample-product.jpg" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-5">Paket Liga Inggris</div>
                                    <div class="badge-packet">Pelanggan Baru</div>
                                </div>
                                <div>Animal Planet, Discovery, BBC Earth, BBC Lifestyle, BBC World News, AXN, ONE, Rock
                                    Entertainment, Rock Action, MTV, HGTV, TLC, AFN, Citra Culinary & Travel, & 6
                                    Channel TV Nasional</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPacket()" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">Beli Sekarang <i
                                        class="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>

        <div class="modal fade" tabindex="-1" role="dialog" id="modal-packet">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i class="bi bi-x"></i></button>
                        <img src="~/assets/sample-product.jpg" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Paket Liga Inggris</h5>
                        <div style="line-height:1.5;">Animal Planet, Discovery, BBC Earth, BBC Lifestyle, BBC World News, AXN, ONE, Rock Entertainment, Rock Action, MTV, HGTV, TLC, AFN, Citra Culinary & Travel, & 6 Channel TV Nasional</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="javascript:void(0)" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/tokopedia.png"  style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="javascript:void(0)" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/bukalapak.png"  style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="javascript:void(0)" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/lazada.jpg"  style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="javascript:void(0)" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/shopee.svg"  style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/paket.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    const type = ref('semua')

    function openPacket() {
        $("#modal-packet").modal('show');
    }
</script>