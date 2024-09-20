<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center p-5"
                :style="`background:linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:250px`">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1 class="text-white fw-bold">Kenapa NEX</h1>
                            <div class="text-white">Nex merupakan TV satelit berlangganan dari group SCM (Surya Citra
                                Media) dibawah naungan PT. Mediatama Televisi (MTV). Nex hadir menawarkan beragam
                                keunggulan dan menjadi pilihan terbaik untuk TV satelit serta sarana hiburan yang tepat
                                bagi seluruh keluarga di Indonesia.</div>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="~/assets/bg-about.png" class="w-100" style="max-width: 400px;">
                        </div>
                    </div>

                </div>
            </div>
            <section class="my-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="~/assets/hero-about.png" class="w-100">
                        </div>
                        <div class="col-lg-6">
                            <h2 class=" fw-bold line-after-text"><span>Keunggulan NEX</span></h2>
                            <div class="">
                                <ol style="padding:0 !important;margin-left:15px;line-height: 2;">
                                    <li>Siaran TV Nasional "Free To Air" Yang Lengkap</li>
                                    <li>Kualitas Tayangan dan Suara HD (High Definition) </li>
                                    <li>Ragam Pilihan Exclusive In-House Channel
                                    </li>
                                    <li>Siaran Ajang Sepak Bola Premium
                                    </li>
                                    <li>Jaringan Dealer & Service Center Yang Tersebar Secara Nasional
                                    </li>
                                    <li>Akses Jangkauan Seluruh Indonesia</li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div class="d-flex align-items-center p-5"
                :style="`background:url('${backgroundImageDesktop2}');background-size:cover;width:100%;min-height:220px`">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1 class="text-white fw-bold">Teknologi NEX</h1>
                            <h5 class="text-white mt-3">Perangkat Platform</h5>
                            <div class="text-white">Menggunakan antena parabola, baik C-BAND, KU-BAND & Receiver Nex
                                untuk mendapatkan gambar HD (High Definition) dan suara jernih.
                            </div>
                            <h5 class="text-white mt-3">Keamanan (CAS)</h5>
                            <div class="text-white">Dalam sistem penyiaran DVB, kami menggunakan peralatan pengacak
                                standar yang mengimplementasikan DVB CSA (Common Scrambling Algorithm) untuk mengacak
                                konten video ke dalam Stream MPEG yang disiarkan melalui satelit.
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img src="~/assets/hero-about-3.png" class="w-100" style="max-width: 400px;">
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="show-on-mobile">
            <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">About NEX</h6>
                    </div>
                </div>
            </div>
        </div>
            <section class="my-2">
                <div class="w-100">
                    <div class="accordion accordion-custom" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" style="padding:20px 0 !important"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Kenapa Nex
                                </button>
                            </div>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="padding:0 !important;color:unset !important">
                                    <div class="d-flex align-items-center p-2"
                                        style="background:rgb(0 0 0 / 80%) !important;">
                                        <div class="container">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6">
                                                    <div class="text-white">Nex merupakan TV satelit berlangganan dari
                                                        group SCM (Surya Citra
                                                        Media) dibawah naungan PT. Mediatama Televisi (MTV). Nex hadir
                                                        menawarkan beragam
                                                        keunggulan dan menjadi pilihan terbaik untuk TV satelit serta
                                                        sarana hiburan yang tepat
                                                        bagi seluruh keluarga di Indonesia.</div>
                                                </div>
                                                <div class="col-lg-6 d-flex justify-content-center">
                                                    <img src="~/assets/bg-about-2.png" class="w-100 mt-3"
                                                        style="max-width: 100%;width:100%">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" style="padding:20px 0 !important;"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Keunggulan Nex
                                </button>
                            </div>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="padding:0 !important;color:unset !important">
                                    <div class="container">
                                    <ol>
                                        <li>Siaran TV Nasional "Free To Air" Yang Lengkap</li>
                                        <li>Kualitas Tayangan dan Suara HD (High Definition) </li>
                                        <li>Ragam Pilihan Exclusive In-House Channel
                                        </li>
                                        <li>Siaran Ajang Sepak Bola Premium
                                        </li>
                                        <li>Jaringan Dealer & Service Center Yang Tersebar Secara Nasional
                                        </li>
                                        <li>Akses Jangkauan Seluruh Indonesia</li>
                                    </ol>
                                    <div class="px-3 mb-3">
                                    <img src="~/assets/hero-about-2.png" class="w-100 mt-3"
                                        style="width:100%">
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <div class="container">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" style="padding:20px 0 !important;"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Teknologi Nex
                                </button>
                            </div>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="padding:0 !important;color:unset !important">
                                    <div class="d-flex align-items-center p-2"
                                        :style="`background:#00529C !important;width:100%;min-height:220px`">
                                        <div class="container">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6">                                                    
                                                    <h5 class="text-white mt-3">Perangkat Platform</h5>
                                                    <div class="text-white">Menggunakan antena parabola, baik C-BAND,
                                                        KU-BAND & Receiver Nex
                                                        untuk mendapatkan gambar HD (High Definition) dan suara jernih.
                                                    </div>
                                                    <h5 class="text-white mt-3">Keamanan (CAS)</h5>
                                                    <div class="text-white">Dalam sistem penyiaran DVB, kami menggunakan
                                                        peralatan pengacak
                                                        standar yang mengimplementasikan DVB CSA (Common Scrambling
                                                        Algorithm) untuk mengacak
                                                        konten video ke dalam Stream MPEG yang disiarkan melalui
                                                        satelit.
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 d-flex justify-content-center">
                                                    <img src="~/assets/bg-about-2.png" class="w-100 mt-3"
                                                        style="max-width: 100%;">
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
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/header/about-mobile.png"
    import backgroundImageDesktop from "~/assets/header-about.png"
    import backgroundImageDesktop2 from "~/assets/bg-about-3.png"
    import logoNex from "~/assets/logo-nex-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    useHead({
        title: 'Tentang Kami | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'Tentang Kami | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'Tentang Kami | Nex Parabola'
            },
             {
                name: 'keywords',
                content: 'apa itu nex parabola'
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
    .line-after-text {
        position: relative
    }

    .line-after-text span {
        background-color: #fff;
        padding-right: 15px;
    }

    .line-after-text::after {

        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.5em;
        border-top: 3px solid #2C69A7;
        z-index: -1;

    }

    ol li{
        padding-top:20px !important
    }
    ol li:first-child{
        padding-top:0 !important
    }
    
</style>