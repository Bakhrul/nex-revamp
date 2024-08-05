<template>
    <div>
        <Navbar></Navbar>

        <div class="show-on-mobile">
            <img :src="backgroundImageMobile" class="w-100" />
            <section class="my-2">
                <div class="container">
                    <div class="accordion accordion-custom" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Apa Saja yang Dibutuhkan untuk Memasang Nex?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a
                                    galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Berapa Biaya Langganan Nex?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a
                                    galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Apakah TV Satelit Nex Membutuhkan Internet?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a
                                    galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Bagaimana Jika Saya Mau Aktivasi via Aplikasi Nex?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a
                                    galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Bagaimana Jika Saya Mau Perbaikan Instalasi via Aplikasi?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a
                                    galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>
                        </div>

                    </div>
                    <h5 class="text-center mt-5">Metode Pembayaran</h5>
                    <div class="d-flex justify-content-center mt-3">
                        <div style="max-width:300px;width:100%">
                            <div class="row py-3" style="border-bottom: 1px #ddd solid;">
                                <div class="col-lg-3 fw-bold">E-Wallet</div>
                                <div class="col-lg-9">
                                    <div class="d-flex flex-wrap">
                                        <img src="~/assets/payment/dana.png" class="me-2" />
                                        <img src="~/assets/payment/ovo.png" class="me-2" />
                                        <img src="~/assets/payment/linkaja.png" class="me-2" />
                                        <img src="~/assets/payment/shopeepay.png" class="me-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="row py-3" style="border-bottom: 1px #ddd solid;">
                                <div class="col-lg-3 fw-bold">Virtual Account</div>
                                <div class="col-lg-9">
                                    <div class="d-flex flex-wrap">
                                        <img src="~/assets/payment/permata.png" class="me-2" />
                                        <img src="~/assets/payment/mandiri.png" class="me-2" />
                                        <img src="~/assets/payment/bni.png" class="me-2" />
                                        <img src="~/assets/payment/bri.png" class="me-2" />
                                        <img src="~/assets/payment/bca.png" class="me-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="row py-3" style="border-bottom: 1px #ddd solid;">
                                <div class="col-lg-3 fw-bold">Kartu Kredit</div>
                                <div class="col-lg-9">
                                    <div class="d-flex flex-wrap">
                                        <img src="~/assets/payment/visa.png" class="me-2" />
                                        <img src="~/assets/payment/mastercard.png" class="me-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center" :style="`background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:220px`">
                <div class="container">
                    <h1 class="text-white fw-bold">FAQ & PAYMENT</h1>
                    <div class="text-white">Menjawab Pertanyaan Sobat Nex</div>
                </div>
            </div>
            <section class="my-5">

                <div class="container">
                    <div class="row mb-5">
                        <div class="col-lg-5 d-flex ">
                            <img src="~/assets/bg-about.png" class="w-100">
                        </div>
                        <div class="col-lg-7">
                            <div class="accordion accordion-custom accordion-custom-2" id="accordionExample-desktop">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOned" aria-expanded="true" style="color:black !important"
                                            aria-controls="collapseOned">
                                            Apa Saja yang Dibutuhkan untuk Memasang Nex?
                                        </button>
                                    </h2>
                                    <div id="collapseOned" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:black !important">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum
                                            has
                                            been the industry's standard dummy text ever since the 1500s, when an
                                            unknown
                                            printer
                                            took a
                                            galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" style="color:black !important"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwod"
                                            aria-expanded="false" aria-controls="collapseTwod">
                                            Berapa Biaya Langganan Nex?
                                        </button>
                                    </h2>
                                    <div id="collapseTwod" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:black !important">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum
                                            has
                                            been the industry's standard dummy text ever since the 1500s, when an
                                            unknown
                                            printer
                                            took a
                                            galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" style="color:black !important"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThreed"
                                            aria-expanded="false" aria-controls="collapseThreed">
                                            Apakah TV Satelit Nex Membutuhkan Internet?
                                        </button>
                                    </h2>
                                    <div id="collapseThreed" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:black !important">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum
                                            has
                                            been the industry's standard dummy text ever since the 1500s, when an
                                            unknown
                                            printer
                                            took a
                                            galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>

                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" style="color:black !important"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFourd"
                                            aria-expanded="false" aria-controls="collapseFourd">
                                            Bagaimana Jika Saya Mau Aktivasi via Aplikasi Nex?
                                        </button>
                                    </h2>
                                    <div id="collapseFourd" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:black !important">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum
                                            has
                                            been the industry's standard dummy text ever since the 1500s, when an
                                            unknown
                                            printer
                                            took a
                                            galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>

                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" style="color:black !important"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFived"
                                            aria-expanded="false" aria-controls="collapseFived">
                                            Bagaimana Jika Saya Mau Perbaikan Instalasi via Aplikasi?
                                        </button>
                                    </h2>
                                    <div id="collapseFived" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:black !important">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum
                                            has
                                            been the industry's standard dummy text ever since the 1500s, when an
                                            unknown
                                            printer
                                            took a
                                            galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <h5 class="text-center mt-5">Metode Pembayaran</h5>
                    <div class="d-flex justify-content-center mt-3">
                        <div style="max-width:700px;width:100%">
                            <div class="row py-3" style="border-bottom: 1px #ddd solid;">
                                <div class="col-lg-3 fw-bold">E-Wallet</div>
                                <div class="col-lg-9">
                                    <div class="d-flex flex-wrap">
                                        <img src="~/assets/payment/dana.png" class="me-2" />
                                        <img src="~/assets/payment/ovo.png" class="me-2" />
                                        <img src="~/assets/payment/linkaja.png" class="me-2" />
                                        <img src="~/assets/payment/shopeepay.png" class="me-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="row py-3" style="border-bottom: 1px #ddd solid;">
                                <div class="col-lg-3 fw-bold">Virtual Account</div>
                                <div class="col-lg-9">
                                    <div class="d-flex flex-wrap">
                                        <img src="~/assets/payment/permata.png" class="me-2" />
                                        <img src="~/assets/payment/mandiri.png" class="me-2" />
                                        <img src="~/assets/payment/bni.png" class="me-2" />
                                        <img src="~/assets/payment/bri.png" class="me-2" />
                                        <img src="~/assets/payment/bca.png" class="me-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="row py-3" style="border-bottom: 1px #ddd solid;">
                                <div class="col-lg-3 fw-bold">Kartu Kredit</div>
                                <div class="col-lg-9">
                                    <div class="d-flex flex-wrap">
                                        <img src="~/assets/payment/visa.png" class="me-2" />
                                        <img src="~/assets/payment/mastercard.png" class="me-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/faq.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
</script>