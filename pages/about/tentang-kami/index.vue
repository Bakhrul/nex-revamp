<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center p-5"
                :style="`background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:220px`">
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
                            <div class="text-white">Menggunakan antena parabola, baik C-BAND, KU-BAND & Receiver Nex untuk mendapatkan gambar HD (High Definition) dan suara jernih.
                            </div>
                            <h5 class="text-white mt-3">Keamanan (CAS)</h5>
                            <div class="text-white">Dalam sistem penyiaran DVB, kami menggunakan peralatan pengacak standar yang mengimplementasikan DVB CSA (Common Scrambling Algorithm) untuk mengacak konten video ke dalam Stream MPEG yang disiarkan melalui satelit.
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
            <img :src="backgroundImageMobile" class="w-100" />
            <section class="my-2">
                <div class="container">
                    <div class="accordion accordion-custom" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Kenapa Nex
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
                                    Keunggulan Nex
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
                                    Teknologi Nex
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
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/about.png"
    import backgroundImageDesktop from "~/assets/header-about.png"
    import backgroundImageDesktop2 from "~/assets/bg-about-3.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
</script>
<style scoped>
.line-after-text{
    position: relative
}
.line-after-text span{
    background-color: #fff;
    padding-right: 15px;
}
    .line-after-text::after{

  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 3px solid #2C69A7;
  z-index: -1;

    }
</style>