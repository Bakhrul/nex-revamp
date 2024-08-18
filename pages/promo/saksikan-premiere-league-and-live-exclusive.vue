<template>
    <div>
        <Navbar></Navbar>
        <img :src="headerImageDesktop1" class="w-100">
        <section class="py-5">
            <div class="container">
                <h4 class="fw-bold text-center">Paket Liga Inggris</h4>
                <div class="text-center">Liga Inggris Musim 2024/25 LIVE dan Eksklusif di Nex</div>
                <img src="~/assets/static-content/banner/1-section.png" class="w-100 mt-5 mb-5">
                <div class="fw-bold fs-5 text-center">Untuk Membeli Paket Silahkan Kunjungi Marketplace Kami</div>
                <div class="row justify-content-center mt-2">                 
                    <div class="col-lg-4 mb-3 d-flex justify-content-center">
                        <a href="https://m.bukalapak.com/nex-parabola-official" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                <img src="~/assets/social-media/bukalapak.png" style="height:40px;max-width:100%;" />
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-3 d-flex justify-content-center">
                        <a href="https://shopee.co.id/nexparabola.official" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                <img src="~/assets/social-media/shopee.svg" style="height:40px;max-width:100%;" />
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-3 d-flex justify-content-center">
                        <a href="https://belipaket.mynex.id/" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center"
                                style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                <div class="d-flex align-items-center">
                                    <img src="~/assets/social-media/nex.png" style="height:40px;" />
                                </div>
                                
                            </div>
                        </a>
                    </div>
                </div>
                <div>Pertandingan Liga Inggris Musim 2024/25 SEGERA TAYANG! 
                    Match Regular dan Super Big Match pasti tayang LIVE dan EKSKLUSIF setiap minggu di Nex dengan
                    kualitas
                    HD biar makin mantap dan seru!<br><br>
                    Langganan Paket Liga Inggris+ SPESIAL PROMO buat kamu! 
                    HEMAT 500RB! Dari 2.4 juta menjadi 1.9 juta untuk 1 musim. Dapatkan pertandingan lengkap  Super Big
                    Match dan Match Regular setiap minggu.
                    Channel yang di dapat:<br>
                    - Champions TV 5<br>
                    - Champions TV 6<br>
                    - Nex PPV (Channel ini akan aktif 2 jam sebelum pertandingan)<br><br>
                    Langganan Paket Liga Inggris Hanya Rp 169rb/30 Hari
                    Nikmati semua pertandingan match reguler setiap minggu. Tapi ingat, paket ini TIDAK termasuk Super
                    Big
                    Match.<br>
                    Channel yang di dapat:<br>
                    - Champions TV 5<br>
                    - Champions TV 6<br>
                    <br>
                    Paket Liga Inggris PPV (Pay Per View) kisaran harga Rp 49rb – 69rb per match
                    Ingin nonton Super Big Match? Tinggal ADD ON paket Liga Inggris PPV ini! Channel NEX PPV akan aktif
                    2
                    jam sebelum pertandingan dimulai. Pastikan kamu sudah memiliki Paket Liga Inggris/Diamond/Premium
                    Sport
                    aktif untuk bisa membeli paket ini.<br>
                    Channel yang di dapat:<br>
                    - Nex PPV (Channel ini akan aktif 2 jam sebelum pertandingan)
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import headerImageDesktop1 from "~/assets/static-content/banner/1-detail.png"


    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
</script>