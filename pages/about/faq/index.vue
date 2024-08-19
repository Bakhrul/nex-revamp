<template>
    <div>
        <Navbar></Navbar>

        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;background-position:left;padding:30px 0;min-height:100px;`">
                <div class="container">
                    <h6 class="text-white fw-bold">FAQ</h6>
                </div>
            </div>
            <section class="my-2">
                <div class="w-100">
                    <div class="accordion accordion-custom" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                        style="padding:20px 0 !important" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        Apa Saja yang Dibutuhkan untuk Memasang Nex?
                                    </button>
                                </div>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="color:unset !important;padding:20px !important">
                                    <div class="container">
                                        Untuk memasang TV satelit Nex, kamu memerlukan antena parabola, Nex receiver,
                                        serta
                                        kabel-kabel yang diperlukan untuk menghubungkan antara antena, dekoder, dan
                                        televisi.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                    <button class="accordion-button fw-bold collapsed" type="button"
                                        data-bs-toggle="collapse" style="padding:20px 0 !important;"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Berapa Biaya Langganan Nex?
                                    </button>
                                </div>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="color:unset !important;padding:20px !important">
                                    <div class="container">
                                        Harga paket Nex bisa kamu beli dengan harga mulai dari Rp9.900 sedangkan untuk
                                        receiver kamu bisa beli dengan harga mulai dari Rp314.000.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                    <button class="accordion-button fw-bold collapsed" type="button"
                                        data-bs-toggle="collapse" style="padding:20px 0 !important"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Apakah TV Satelit Nex Membutuhkan Internet?
                                    </button>
                                </div>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="color:unset !important;padding:20px !important">
                                    <div class="container">
                                        Tidak, TV satelit tidak memerlukan koneksi internet untuk menonton saluran
                                        televisi.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                    <button class="accordion-button fw-bold collapsed" type="button"
                                        data-bs-toggle="collapse" style="padding:20px 0 !important"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        Bagaimana Jika Saya Mau Aktivasi via Aplikasi Nex?
                                    </button>
                                </div>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="color:unset !important;padding:0 !important">
                                    <div class="container">
                                        <ol>
                                            <li>Download Aplikasi "Nex" di Google Play.</li>
                                            <li>Klik Menu My Nex.</li>
                                            <li>Isi data secara lengkap.</li>
                                            <li>Lalu klik proses.</li>
                                            <li>Nex Parabola-mu sudah aktif!</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                    <button class="accordion-button fw-bold collapsed" type="button"
                                        data-bs-toggle="collapse" style="padding:20px 0 !important"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        Bagaimana Jika Saya Mau Perbaikan Instalasi via Aplikasi?
                                    </button>
                                </div>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="color:unset !important;padding:0 !important">
                                    <div class="container">
                                        <ol>
                                            <li>Download Aplikasi "Nex" di Google Play</li>
                                            <li>Klik Menu Cari Toko & Teknisi</li>
                                            <li>Pilih Menu Teknisi</li>
                                            <li>Lalu Pilih Teknisi Terdekat</li>
                                            <li>Klik Telepon atau Whatsapp</li>
                                            <li>Kamu akan langsung terhubung dengan Tim Teknisi</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                    <button class="accordion-button fw-bold collapsed" type="button"
                                        data-bs-toggle="collapse" style="padding:20px 0 !important"
                                        data-bs-target="#collapseSixMobile" aria-expanded="false"
                                        aria-controls="collapseSixMobile">
                                        Payments
                                    </button>
                                </div>
                            </h2>
                            <div id="collapseSixMobile" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="padding: 0 !important;color:unset !important">
                                    <div class="accordion accordion-custom" id="accordionExampleS">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <div class="container">
                                                    <button class="accordion-button fw-bold" type="button"
                                                        data-bs-toggle="collapse"
                                                        style="background:#f2f2f2 !important;padding:20px 0 !important;"
                                                        data-bs-target="#collapseOneS" aria-expanded="true"
                                                        aria-controls="collapseOneS">
                                                        E-Wallet
                                                    </button>
                                                </div>
                                            </h2>
                                            <div id="collapseOneS" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleS">
                                                <div class="accordion-body"
                                                    style="color:unset !important;padding:20px !important">
                                                    <div class="container">
                                                        <img src="~/assets/payment/dana.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/ovo.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/linkaja.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/shopeepay.png" class="mb-3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <div class="container">
                                                    <button class="accordion-button fw-bold" type="button"
                                                        style="background:#f2f2f2 !important;padding:20px 0 !important"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwoS"
                                                        aria-expanded="true" aria-controls="collapseTwoS">
                                                        Bank Transfer
                                                    </button>
                                                </div>
                                            </h2>
                                            <div id="collapseTwoS" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleS">
                                                <div class="accordion-body"
                                                    style="color:unset !important;padding:20px !important">

                                                    <div class="container">
                                                        <img src="~/assets/payment/permata.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/mandiri.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/bni.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/bri.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/bca.png" class="mb-3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <div class="container">
                                                    <button class="accordion-button fw-bold" type="button"
                                                        data-bs-toggle="collapse"
                                                        style="background:#f2f2f2 !important;padding:20px 0 !important"
                                                        data-bs-target="#collapseThreeS" aria-expanded="true"
                                                        aria-controls="collapseThreeS">
                                                        Kartu Kredit
                                                    </button>
                                                </div>
                                            </h2>
                                            <div id="collapseThreeS" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleS">
                                                <div class="accordion-body"
                                                    style="color:unset !important;padding:20px !important">
                                                    <div class="container">
                                                        <img src="~/assets/payment/visa.png" class="mb-3" /><br>
                                                        <img src="~/assets/payment/mastercard.png" class="mb-3" />
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
            </section>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:100% 100%;width:100%;min-height:250px`">
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
                                        <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOned" aria-expanded="true"
                                            style="color:black !important" aria-controls="collapseOned">
                                            Apa Saja yang Dibutuhkan untuk Memasang Nex?
                                        </button>
                                    </h2>
                                    <div id="collapseOned" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body"
                                            style="color:unset !important;padding:20px !important">
                                            Untuk memasang TV satelit Nex, kamu memerlukan antena parabola, Nex
                                            receiver, serta
                                            kabel-kabel yang diperlukan untuk menghubungkan antara antena, dekoder, dan
                                            televisi.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button fw-bold collapsed" type="button"
                                            style="color:black !important" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwod" aria-expanded="false"
                                            aria-controls="collapseTwod">
                                            Berapa Biaya Langganan Nex?
                                        </button>
                                    </h2>
                                    <div id="collapseTwod" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body"
                                            style="color:unset !important;padding:20px !important">
                                            Harga paket Nex bisa kamu beli dengan harga mulai dari Rp9.900 sedangkan
                                            untuk
                                            receiver kamu bisa beli dengan harga mulai dari Rp314.000.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button fw-bold collapsed" type="button"
                                            style="color:black !important" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThreed" aria-expanded="false"
                                            aria-controls="collapseThreed">
                                            Apakah TV Satelit Nex Membutuhkan Internet?
                                        </button>
                                    </h2>
                                    <div id="collapseThreed" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body"
                                            style="color:unset !important;padding:20px !important">
                                            Tidak, TV satelit tidak memerlukan koneksi internet untuk menonton saluran
                                            televisi.
                                        </div>
                                    </div>

                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button fw-bold collapsed" type="button"
                                            style="color:black !important" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFourd" aria-expanded="false"
                                            aria-controls="collapseFourd">
                                            Bagaimana Jika Saya Mau Aktivasi via Aplikasi Nex?
                                        </button>
                                    </h2>
                                    <div id="collapseFourd" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:unset !important;padding:0 !important">
                                            <ol>
                                                <li>Download Aplikasi "Nex" di Google Play.</li>
                                                <li>Klik Menu My Nex.</li>
                                                <li>Isi data secara lengkap.</li>
                                                <li>Lalu klik proses.</li>
                                                <li>Nex Parabola-mu sudah aktif!</li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button fw-bold collapsed" type="button"
                                            style="color:black !important" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFived" aria-expanded="false"
                                            aria-controls="collapseFived">
                                            Bagaimana Jika Saya Mau Perbaikan Instalasi via Aplikasi?
                                        </button>
                                    </h2>
                                    <div id="collapseFived" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample-desktop">
                                        <div class="accordion-body" style="color:unset !important;padding:0 !important">
                                            <ol>
                                                <li>Download Aplikasi "Nex" di Google Play</li>
                                                <li>Klik Menu Cari Toko & Teknisi</li>
                                                <li>Pilih Menu Teknisi</li>
                                                <li>Lalu Pilih Teknisi Terdekat</li>
                                                <li>Klik Telepon atau Whatsapp</li>
                                                <li>Kamu akan langsung terhubung dengan Tim Teknisi</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <h5 class="text-center mt-5 fw-bold">Metode Pembayaran</h5>
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
                                <div class="col-lg-3 fw-bold">Bank Transfer</div>
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
    import backgroundImageMobile from "~/assets/header/faq-mobile.png"
    import backgroundImageDesktop from "~/assets/header/faq-desktop.png"
    import logoNex from "~/assets/logo-nex-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    useHead({
        title: 'FAQ | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'FAQ | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'FAQ | Nex Parabola'
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