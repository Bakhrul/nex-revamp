<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:cover;width:100%;background-position:left;padding:30px 0`">
                <div class="container">
                    <h6 class="text-white fw-bold">Promo Receiver & Paket</h6>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:220px`">
                <div class="container">
                    <h1 class="text-white fw-bold">PROMO RECEIVER & PAKET</h1>
                    <div class="text-white">Nonton Tayangan Sports & Entertainment<br> Terbaik Makin Seru dengan Promo
                        Eksklusif!</div>
                </div>
            </div>
        </div>
        <section class="py-5" style="background:#232323">
            <div class="container">
                <h5 class="text-white">Promo Terbatas</h5>
                <div class="text-white">Pilih sesuai dengan kebutuhan kamu</div>
            </div>
            <div class="container mt-3">
                <div class="d-flex justify-content-center">
                    <div class="w-100">
                        <div class="slider-paket-terbatas">
                            <div class="me-3 width-slider-packet" style="position: relative;width:330px">
                                <div class="shadow-product w-100 product-box bg-black rounded"
                                    style="border:0 !important">
                                    <img src="~/assets/static-content/promo/paket-terbatas/1.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">Super Big Match - Manchester United vs
                                                Liverpool!</div>
                                        </div>
                                        <div class="text-white">Duel Panas Man United vs Liverpool di Matchweek 3.
                                            dengan harga 69rb/satu pertandingan. </div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openPacketTerbatas(1)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
                                    </div>
                                </div>
                            </div>
                            <div class="me-3 width-slider-packet" style="position: relative;width: 330px;">
                                <div class="shadow-product w-100 product-box bg-black rounded"
                                    style="border:0 !important">
                                    <img src="~/assets/static-content/promo/paket-terbatas/2.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">Kejuaraan Liga Indonesia Dimulai!</div>
                                        </div>
                                        <div class="text-white">Nikmati pertandingan langsung dan rasakan ketegangan
                                            serta kegembiraan sepakbola Indonesia.</div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openPacketTerbatas(2)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
                                    </div>
                                </div>
                            </div>
                            <div class="me-3 width-slider-packet" style="position: relative;width: 330px;">
                                <div class="shadow-product w-100 product-box bg-black rounded"
                                    style="border:0 !important">
                                    <img src="~/assets/static-content/promo/paket-terbatas/3.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">Dukung Timnas Indonesia (Paket Voli)
                                            </div>
                                        </div>
                                        <div class="text-white">Siap menyaksikan aksi-aksi spektakuler dari timnas
                                            Indonesia di aja terbaik Asia Tenggara?
                                        </div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openPacketTerbatas(3)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
                                    </div>
                                </div>
                            </div>
                            <div class="me-3 width-slider-packet" style="position: relative;width: 330px;">
                                <div class="shadow-product w-100 product-box bg-black rounded"
                                    style="border:0 !important">
                                    <img src="~/assets/static-content/promo/paket-terbatas/4.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">Ubah TV Biasa Jadi Smart & Dapat Vidio
                                                Platinum Gratis</div>
                                        </div>
                                        <div class="text-white">Dapatkan gratis paket Vidio Platinum selama 3 bulan
                                            untuk menikmati berbagai konten premium secara eksklusif.
                                        </div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openPacketTerbatas(4)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
                                    </div>
                                </div>
                            </div>
                            <div class="me-3 width-slider-packet" style="position: relative;width: 330px;">
                                <div class="shadow-product w-100 product-box bg-black rounded"
                                    style="border:0 !important">
                                    <img src="~/assets/static-content/promo/paket-terbatas/5.png" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3">
                                            <div class="fw-bold fs-6 text-white">Nikmati Hiburan Tanpa Batas selama 1
                                                Tahun Gratis</div>
                                        </div>
                                        <div class="text-white">Jangan lewatkan penawaran spesial ini dan rasakan
                                            pengalaman menonton yang luar biasa tanpa biaya tambahan!
                                        </div>
                                    </div>
                                    <div class="py-3 px-3 d-flex justify-content-center footer">
                                        <a @click="openPacketTerbatas(5)" href="javascript:void(0)"
                                            style="border-radius: 20px;background:#F3753A;"
                                            class="text-center btn text-white w-100 p-3">LEBIH LANJUT</a>
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
                <h5 class="mb-1 fw-bold">Promo Terbaru Lainnya</h5>
                <div class="mb-3">Pilih sesuai dengan kebutuhan kamu</div>
                <div class="slider-paket">
                    <div class="shadow-product product-box bg-white me-3 width-slider-packet" style="width:330px">
                        <img src="~/assets/static-content/promo/paket-lainnya/1.png" />
                        <div class="p-3 " style="min-height:180px">
                            <div class="d-flex justify-content-between mb-3">
                                <div class="fw-bold fs-6">Update Datamu & Dapatkan Paket Basic Gratis!</div>
                            </div>
                            <div>Segera update datamu dengan Nex dan nikmati GRATIS paket Basic selama 30 hari!</div>
                        </div>
                        <div class="py-3 px-3 d-flex justify-content-center footer">
                            <a @click="openPacketLainnya(1)" href="javascript:void(0)" style="border-radius: 20px;"
                                class="text-center btn bg-primary text-white w-100 p-3">LEBIH LANJUT</a>
                        </div>
                    </div>
                    <div class="shadow-product product-box bg-white me-3 width-slider-packet" style="width:330px">
                        <img src="~/assets/static-content/promo/paket-lainnya/2.png" />
                        <div class="p-3 " style="min-height:180px">
                            <div class="d-flex justify-content-between mb-3">
                                <div class="fw-bold fs-6">Super Diskon 71% Untuk Paket Diamond</div>
                            </div>
                            <div>Kejar diskon besar-besaran 71% untuk paket Diamond hanya dengan Rp 50.000!</div>
                        </div>
                        <div class="py-3 px-3 d-flex justify-content-center footer">
                            <a @click="openPacketLainnya(2)" href="javascript:void(0)" style="border-radius: 20px;"
                                class="text-center btn bg-primary text-white w-100 p-3">LEBIH LANJUT</a>
                        </div>
                    </div>
                    <div class="shadow-product product-box bg-white me-3 width-slider-packet" style="width:330px">
                        <img src="~/assets/static-content/promo/paket-lainnya/3.png" />
                        <div class="p-3 " style="min-height:180px">
                            <div class="d-flex justify-content-between mb-3">
                                <div class="fw-bold fs-6">Ubah TV Biasa Jadi Smart & Dapat Vidio Platinum Gratis</div>
                            </div>
                            <div>Dapatkan kesempatan istimewa dengan Nex! Beli dan aktivasi paket dengan membayar hanya
                                Rp 50.000 di hari yang sama</div>
                        </div>
                        <div class="py-3 px-3 d-flex justify-content-center footer">
                            <a @click="openPacketLainnya(3)" href="javascript:void(0)" style="border-radius: 20px;"
                                class="text-center btn bg-primary text-white w-100 p-3">LEBIH LANJUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>

        <!-- modal paket terbatas -->
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-terbatas-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-terbatas/1.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Super Big Match - Manchester United vs Liverpool!</h5>
                        <div style="line-height:1.5;">Duel Panas Man United vs Liverpool di Matchweek 3. Tayang LIVE di
                            channel Nex PPV dengan harga 69rb/satu pertandingan.  
                            Kamu tinggal ADD ON Paket Liga Inggris PPV pastikan kamu sudah memiliki Paket Liga
                            Inggris/Diamond/Premium Sport aktif untuk bisa membeli paket ini. 
                            *Paket bisa dibeli mulai tanggal 21 Agustus - 1 September 2024
                            *Channel akan aktif H-2 Jam sebelum pertandingan</div>
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
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-terbatas-2">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-terbatas/2.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Kejuaraan Liga Indonesia Dimulai!</h5>
                        <div style="line-height:1.5;">18 tim terbaik dari seluruh Indonesia siap bertarung memperebutkan
                            gelar juara! 
                            Saksikan setiap pertandingan seru dan momen spektakuler LIVE di Nex.
                            Beli paket Liga 1 hanya 69rb/30 Hari. 
                            Nikmati pertandingan langsung dan rasakan ketegangan serta kegembiraan sepakbola Indonesia.
                        </div>
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
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-terbatas-3">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-terbatas/3.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Dukung Timnas Indonesia</h5>
                        <div style="line-height:1.5;">SEA V League Voli Asia Tenggara!
                            Siap menyaksikan aksi-aksi spektakuler dari timnas Indonesia di aja terbaik Asia Tenggara?
                            Berlangganan paket voli hanya dengan 79rb dan nikmati seluruh pertandingan sepanjang
                            kejuaraan.
                            Dapatkan paket voli hanya dengan Rp 79.000 untuk 30 hari. Segera aktifkan paket voli-mu
                            sekarang dan saksikan momen-momen epik dari olahraga voli!</div>
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
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-terbatas-5">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-terbatas/5.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Nikmati Hiburan Tanpa Batas
                            selama 1 Tahun Gratis</h5>
                        <div style="line-height:1.5;">Nikmati hiburan tanpa batas dengan Nex! Dapatkan kesempatan untuk
                            menonton selama 1 tahun penuh secara GRATIS. Mulai dari film blockbuster, serial TV populer,
                            hingga acara olahraga langsung, semuanya ada di Nex. Jangan lewatkan penawaran spesial ini
                            dan rasakan pengalaman menonton yang luar biasa tanpa biaya tambahan!</div>
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
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-terbatas-4">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-terbatas/4.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Ubah TV Biasa Jadi Smart &
                            Dapat Vidio Platinum Gratis</h5>
                        <div style="line-height:1.5;">Dengan Nex, ubah TV biasa kamu menjadi smart TV dengan mudah!
                            Dapatkan gratis paket Vidio Platinum selama 3 bulan untuk menikmati berbagai konten premium
                            secara eksklusif. Tidak perlu mengganti TV, cukup hubungkan Nex dan nikmati akses ke ribuan
                            film, serial TV, dan acara favorit kamu. Jadi, jadikan TV-mu lebih seru dengan Nex hari ini!
                        </div>
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

        <!-- end modal terbatas -->

        <!-- start modal lainnya -->
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-lainnya-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-lainnya/1.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Update Datamu & Dapatkan Paket Basic Gratis!</h5>
                        <div style="line-height:1.5;">Syarat dan Ketentuan:<br>
                            <ol>
                                <li>Update data hanya berlaku untuk pelanggan Nex Parabola</li>
                                <li>Seluruh data yang diisi adalah informasi yang benar</li>
                                <li>Hadiah berupa Paket Basic 30 Hari dan hanya berlaku 1 kali</li>
                                <li>Nex Parabola berhak melakukan tindakan-tindakan yang diperlukan seperti pembatalan
                                    jika ditemukan pelanggaran & berhak mengubah syarat dan ketentuan tanpa
                                    pemberitahuan</li>
                                <li>Dengan mengikuti campaign ini pelanggan mengerti dan menyetujui s&k yang berlaku
                                </li>
                            </ol>
                        </div>
                        <a href="https://register.nexparabola.id/" target="_blank"
                            class="text-center btn bg-primary text-white w-100 p-3">UPDATE DATAMU SEKARANG</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-lainnya-2">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-lainnya/2.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Super Diskon 71% Untuk Paket Diamond</h5>
                        <div style="line-height:1.5;">Kejar diskon besar-besaran 71% untuk paket Diamond hanya dengan Rp 50.000! Dari harga normal Rp 169.000, sekarang kamu bisa menikmati akses eksklusif ke Vidio Diamond dengan harga terbaik. Tawaran ini berlaku untuk pelanggan baru yang belum pernah membeli paket Diamond sebelumnya, dengan aktivasi dari tahun 2019 hingga Mei2024. Segera aktifkan paket Diamond kamu dan rasakan pengalaman menonton yang luar biasa dengan Nex!
                        </div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-12 mb-3 d-flex justify-content-center">
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
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-paket-lainnya-3">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" style="max-width:450px">
                <div class="modal-content">
                    <div class="modal-body rounded">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <img src="~/assets/static-content/promo/paket-lainnya/3.png" class="w-100 rounded" />
                        <h5 class="fw-bold mt-3">Ubah TV Biasa Jadi Smart & Dapat Vidio Platinum Gratis</h5>
                        <div style="line-height:1.5;">Dengan Nex, ubah TV biasa kamu menjadi smart TV dengan mudah! Dapatkan gratis paket Vidio Platinum selama 3 bulan untuk menikmati berbagai konten premium secara eksklusif. Tidak perlu mengganti TV, cukup hubungkan Nex dan nikmati akses ke ribuan film, serial TV, dan acara favorit kamu. Jadi, jadikan TV-mu lebih seru dengan Nex hari ini!
                        </div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-lg-12 mb-3 d-flex justify-content-center">
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

    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/header/promo-mobile.png"
    import backgroundImageDesktop from "~/assets/header/promo-desktop.png"
    import logoNex from "~/assets/logo-nex.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    onMounted(() => {
        initSlider()
        sliderPaket()
    });

    onBeforeRouteLeave((to, from, next) => {
        if ($('.slider-paket-terbatas').hasClass('slick-initialized')) {
            $('.slider-paket-terbatas').slick('destroy');
        }
        if ($('.slider-paket').hasClass('slick-initialized')) {
            $('.slider-paket').slick('destroy');
        }
        next()
    })

    function openPacketTerbatas(type) {
        $("#modal-paket-terbatas-" + type).modal('show');
    }

    function openPacketLainnya(type) {
        console.log(type)
        $("#modal-paket-lainnya-" + type).modal('show');
    }

    function initSlider() {

        $('.slider-paket-terbatas').slick({
            infinite: false,
            speed: 300,
            centerMode: false,
            dots: false,
            variableWidth: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right'></i></button>",
        });

    }

    function sliderPaket() {
        $('.slider-paket').slick({
            infinite: false,
            speed: 300,
            centerMode: false,
            dots: false,
            variableWidth: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right'></i></button>",
        });
    }

    useHead({
        title: 'Promo | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'Promo | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'Promo | Nex Parabola'
            },
             {
                name: 'keywords',
                content: 'promo nex parabola, receiver nex parabola bundling diamond, nex parabola combo,'
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