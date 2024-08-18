<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:cover;width:100%;background-position:left;padding:30px 0`">
                <div class="container">
                    <h6 class="text-white fw-bold">Paket</h6>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:220px`">
                <div class="container">
                    <h1 class="text-white fw-bold">PAKET</h1>
                    <div class="text-white">Banyak Pilihan Untuk Menambah Keseruan<br> Kumpul dengan Keluarga!</div>
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
        <section style="background: #f2f2f2" class="pt-5 pb-5" v-show="type == 'semua' || type == 'baru'">
            <div class="container">
                <h5 class="mb-3">Pelanggan Baru</h5>
                <div class="slider-paket slider-baru">
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-baru/1.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">Basic</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Baru</div>
                                    </div>
                                </div>
                                <div>Paket favorit pilihan pelanggan setia Nex, dimana 16 Siaran Premium akan hadir
                                    menemani kamu!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganBaru(1)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-baru/2.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">KIDS</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Baru</div>
                                    </div>
                                </div>
                                <div>Kumpulan tayangan terbaik dari mancanegara yang seru dan edukatif untuk menemani si
                                    kecil</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganBaru(2)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-baru/3.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">DIAMOND</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Baru</div>
                                    </div>
                                </div>
                                <div>Paket terbaik dari Nex dimana kami bisa menikmati Kesenangan Tak Terbatas mulai
                                    dari Olahraga hingga Hiburan</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganBaru(3)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style="background: #f2f2f2" class="pt-5 pb-5" v-show="type == 'semua' || type == 'setia'">
            <div class="container">
                <h5 class="mb-3">Pelanggan Setia</h5>
                <div class="slider-paket slider-setia">
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/1.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">TIMNAS</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Berikan dukungan terbaikmu untuk tim nasional Indonesia di laga-laga paling
                                    bergengsi!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(1)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/2.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">LIGA INGGRIS
                                        PPV</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Laga Super Big Match dari 5 tim Arsenal, Chelsea, Liverpool, Manchester City, &
                                    Manchester United</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(2)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/3.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">LIGA 1</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Saksikan klub terbaik Liga Indonesia favoritmu bertanding memperebutkan gelar
                                    juara!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(3)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/4.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">VOLI</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Nikmati aksi penuh adrenalin dari setiap servis hingga spike yang memukau,
                                    eksklusif untuk kamu yang suka Voli!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(4)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/5.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">LIGA INDONESIA+ CHAMPIONS</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Nikmati paket juara untuk kamu yang paling olahraga. Olahraga favoritmu dalam satu
                                    paket!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(5)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/6.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">LIGA INGGRIS</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Jangan sampai ketinggalan pertandingan dari klub-klub terbaik Liga Inggris dalam
                                    High Definition!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(6)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/7.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">LIGA INGGRIS+</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Paket rekomendasi dimana kamu bisa menyaksikan Super Big Match dan Match Tim Besar,
                                    dijamin Pasti Tayang!</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(7)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                    <div class="me-3" style="width:330px;">
                        <div class="shadow-product w-100 product-box bg-white">
                            <img src="~/assets/static-content/paket/pelanggan-setia/8.png" />
                            <div class="p-3 " style="min-height:150px">
                                <div class="d-flex justify-content-between mb-3 align-items-center">
                                    <div class="fw-bold fs-6">PREMIUM SPORTS</div>
                                    <div style="width:120px;">
                                        <div class="badge-packet">Pelanggan Setia</div>
                                    </div>
                                </div>
                                <div>Raih sensasi seru lewat tayangan Olahraga Dunia terlengkap & terkini di Premium
                                    Sports</div>
                            </div>
                            <div class="py-3 px-5 d-flex justify-content-center footer">
                                <a @click="openPelangganSetia(8)" href="javascript:void(0)" style="border-radius: 20px;"
                                    class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        <!-- START PELANGGAN BARU -->
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-baru-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-baru/1.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">BASIC</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 19.900
                                </div>
                            </div>
                        </div>
                        <div style="line-height:1.5;">Animal Planet, Discovery, BBC Earth, BBC Lifestyle, BBC World
                            News, AXN, ONE, Rock Entertainment, Rock Action, MTV, HGTV, TLC, AFN, Citra Culinary &
                            Travel, & 6 Channel TV Nasional</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-baru-2">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-baru/2.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">KIDS</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 19.900
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nickelodeon, Nickelodeon Junior, Dreamworks, Animax</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-baru-3">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-baru/3.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">DIAMOND</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 239.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex Football (1, 2, 3), Champions TV (1, 2, 3, 5, 6), Voli TV,
                            Dreamworks, Nickelodeon, Nickelodeon Junior, Animax, Animal Planet, Discovery, BBC Earth,
                            BBC Lifestyle, BBC World News, AXN, ONE, Rock Entertainment, & banyak lagi</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PELANGGAN BARU -->
        <!-- START PELANGGAN SETIA -->
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/1.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">TIMNAS</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 59.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex Sport 4 HD</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-2">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/2.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">LIGA INGGRIS
                                PPV</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 69.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex PPV HD</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-3">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/3.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">LIGA 1</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 69.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex PPV HD</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-4">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/4.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">VOLI</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 79.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex PPV HD</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-5">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/5.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">LIGA INDONESIA+
                                CHAMPIONS</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 99.900
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex Sport 1 & 2 HD, Champions TV HD 1,2, & 3.</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-6">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/6.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">LIGA INGGRIS</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 169.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;"></div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-7">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/7.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">LIGA INGGRIS+</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 2.499.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Champions TV 5, Champions TV 6, Nex PPV</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-pelanggan-setia-8">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/paket/pelanggan-setia/8.png" class="w-100 rounded" />
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="fw-bold mt-3 me-3">PREMIUM SPORTS</h5>
                            <div style="width:140px">
                                <div class="fw-bold p-1"
                                    style="width:140px;font-size:11px;text-align:center;border-radius:5px;color:#2C69A7;background:#D5E0E9">
                                    Mulai dari Rp 2.499.000
                                </div>
                            </div>
                        </div>

                        <div style="line-height:1.5;">Nex Football, Nex Football 2, Nex Football 3, Champions TV (1, 2,
                            3, 5, 6) & Voli TV</div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/shopee.svg"
                                            style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 mb-3 d-flex justify-content-center">
                                <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                                    <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                        style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/social-media/nex.png" style="height:40px;max-width:100%;" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PELANGGAN SETIA -->
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/header/paket-mobile.png"
    import backgroundImageDesktop from "~/assets/header/paket-desktop.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    const type = ref('semua')

    function openPacket() {
        $("#modal-packet").modal('show');
    }

    onMounted(() => {
        sliderBaru()
        sliderSetia()
    });

    function openPelangganBaru(type) {
        $("#modal-pelanggan-baru-" + type).modal('show');
    }

    function openPelangganSetia(type) {
        $("#modal-pelanggan-setia-" + type).modal('show');
    }

    function sliderBaru() {
        $('.slider-baru').slick({
            infinite: false,
            speed: 300,
            centerMode: false,
            dots: false,
            variableWidth: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right' aria-hidden='true'></i></button>",
        });
    }

    function sliderSetia() {
        $('.slider-setia').slick({
            infinite: false,
            speed: 300,
            centerMode: false,
            dots: false,
            variableWidth: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right' aria-hidden='true'></i></button>",
        });
    }
</script>