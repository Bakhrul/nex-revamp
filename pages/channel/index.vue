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
                    <h1 class="text-white fw-bold">Channel</h1>
                    <div class="text-white">Kami Hadirkan Program Unggulan dengan Pilihan Channel Terlengkap</div>
                </div>
            </div>
        </div>
        <section class="mt-3">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-lg-12 d-flex flex-wrap justify-content-center">
                        <div class="me-3 mb-3">
                            <div class="mb-2 fw-bolder" style="font-size:13px;">Tanggal</div>
                            <div class="dropdown ">
                                <button class="btn btn-secondary dropdown-toggle text-left"
                                    style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>

                                        <span style="font-weight:600;">Rabu, 25 Jul- 24</span>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item"
                                            style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                            v-for="a in 10" href="#">Option 1</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="me-3 mb-3">
                            <div class="mb-2 fw-bolder" style="font-size:13px;">Kategori</div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle text-left"
                                    style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>

                                        <span style="font-weight:600;">Free to View</span>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item"
                                            style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                            v-for="a in 10" href="#">Option 1</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="me-3 mb-3">
                            <div class="mb-2 fw-bolder" style="font-size:13px;">Channel</div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle text-left"
                                    style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>

                                        <span style="font-weight:600;">Champions TV 1</span>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item"
                                            style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                            v-for="a in 10" href="#">Option 1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div style="background: #f2f2f2;" class="mt-3 py-5">
                <div class="container">
                    <img src="~/assets/logo-channel.png" class="mb-1">
                    <div class="table-responsive mt-3">
                        <table class="table table-custom">
                            <thead>

                                <tr>
                                    <th class="text-center">Jam</th>
                                    <th class="text-center">Program Acara</th>
                                    <th class="text-center">Sinopsis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="a in 10">
                                    <td class="text-center">01:15</td>
                                    <td class="text-center">The Bussiness</td>
                                    <td class="text-center">If you need to enter</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/mobile/channel.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
</script>