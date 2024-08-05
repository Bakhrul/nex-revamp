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
                    <h1 class="text-white fw-bold">RECEIVER</h1>
                    <div class="text-white">Kami Hadirkan Teknologi Terbaik Untuk Pengalaman Menonton Paling Seru!</div>
                </div>
            </div>
        </div>
        <section class="pt-5 pb-5" style="background-color: #f2f2f2">

            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Biru</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/feature-1.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                <button style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;" class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver-2.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Biru</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/feature-1.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                <button style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;" class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver-3.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Biru</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/feature-1.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                <button style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;" class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/receiver.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
</script>