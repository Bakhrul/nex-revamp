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
                                    <img src="~/assets/receiver/1.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Biru</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/receiver/fitur-1.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver/2.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Kuning</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/receiver/fitur-2.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3"
                                    style="margin-top:120px !important">
                                    <button @click="openReceiver"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver/3.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Combo Merah</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/receiver/fitur-3.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver/4.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Combo Kuning</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/receiver/fitur-4.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver/5.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Combo Hitam</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/receiver/fitur-5.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img src="~/assets/receiver/6.png"
                                        style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Combo Merah</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" src="~/assets/receiver/fitur-6.png" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-receiver">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body modal-body-receiver">
                        <div class="row">
                            <div class="col-lg-5 px-5 d-flex align-items-center justify-content-center height-modal-receiver">
                                <img src="~/assets/receiver/3.png" class="w-100" />
                            </div>
                            <div class="col-lg-7">
                                <div class="p-3">
                                    <h3 class="text-left pt-2 fw-bold">Nex Parabola | Combo Hitam</h3>
                                    <div class="text-left pt-1 fs-5 pb-3" style="color:black;">Lebih canggih tampilan
                                        baru</div>
                                    <div class="row justify-content-center">
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/tokopedia.png"
                                                        style="height:50px;object-fit: contain;object-fit: center;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/bukalapak.png"
                                                        style="height:40px;object-fit: contain;object-fit: center;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/lazada.jpg"
                                                        style="height:40px;object-fit: contain;object-fit: center;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/shopee.svg"
                                                        style="height:40px;object-fit: contain;object-fit: center;" />
                                                </div>
                                            </a>
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
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/receiver.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    function openReceiver() {
        $("#modal-receiver").modal('show')
    }
</script>