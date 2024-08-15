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
                    <h1 class="text-white fw-bold">PROMO RECEIVER & PAKET</h1>
                    <div class="text-white">Nonton Tayangan Sports & Entertainment Terbaik Makin Seru dengan Promo
                        Eksklusif!</div>
                </div>
            </div>
        </div>
        <section class="py-5" style="background:#000">
            <div class="container">
                <h4 class="text-center text-white">Promo Terbatas</h4>
                <div class="d-flex justify-content-center">
                    <div class="w-100" style="max-width:900px">
                        <div class="slider-receiver">

                            <div class="p-3" style="position: relative;" v-for="a in 5">
                                <div
                                    :style="`background:linear-gradient(359.32deg, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 99.42%),url('${backgroundImageProduct}');background-size:cover;width:100%;min-height:350px;position:relative;background-position:center;border-radius:15px`">
                                    <div style="position:absolute;bottom:15px"
                                        class="p-3 d-flex flex-column align-items-start justify-content-start w-100">
                                        <div class="text-white fw-bold" style="font-size:22px">PAKET LIGA INGGRIS</div>
                                        <div class="text-center text-white pt-2">Liga Inggris Musim 2024/25</div>
                                        <button @click="openPacket()" class="btn text-white p-2 mt-3 w-100" type="button"
                                            style="background:#F3753A;">Beli Paket<i
                                                class="bi bi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style="background: #f2f2f2" class="pt-5 pb-5">
            <div class="container">
                <h5 class="mb-3">Promo Terbaru Lainnya</h5>
                <div class="row justify-content-center">
                    <div class="col-lg-4 mb-3" v-for="a in 5">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img :src="backgroundImageProduct" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="fw-bold fs-5">PAKET LIGA INGGRIS</div>
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
    import backgroundImageMobile from "~/assets/mobile/special-deals.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"
    import backgroundImageProduct from "~/assets/sample-product.jpg"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    onMounted(() => {
        initSlider()
    });

    onBeforeRouteLeave((to, from, next) => {
        if ($('.slider-receiver').hasClass('slick-initialized')) {
            $('.slider-receiver').slick('destroy');
        }
        next()
    })

    function openPacket() {
        $("#modal-packet").modal('show');
    }

    function initSlider() {

        $('.slider-receiver').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerMode: false,
            dots: false,
            variableWidth: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>"
        });
    }
</script>