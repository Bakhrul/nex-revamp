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
                    <div class="col-lg-2 mb-3">

                        <div class="packet-filter" style="cursor:pointer" @click="type = 'semua'"
                            :class="type == 'semua' ? 'active' : ''">Semua</div>

                    </div>
                    <div class="col-lg-2 mb-3">

                        <div class="packet-filter" style="cursor:pointer" @click="type = 'baru'"
                            :class="type == 'baru' ? 'active' : ''">Pelanggan Baru</div>

                    </div>
                    <div class="col-lg-2 mb-3">

                        <div class="packet-filter" style="cursor:pointer" @click="type = 'setia'"
                            :class="type == 'setia' ? 'active' : ''">Pelanggan Setia
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
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="~/assets/sample-product.jpg" class="w-100" />
                        <h2 class="fw-bold mt-3">Paket Liga Inggris</h2>
                        <div style="line-height:2;">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="row justify-content-center">
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/tokopedia.png" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/bukalapak.png" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/lazada.jpg" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/shopee.svg" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
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
    import backgroundImageMobile from "~/assets/mobile/receiver.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    const type = ref('semua')

    function openPacket() {
        $("#modal-packet").modal('show');
    }
</script>