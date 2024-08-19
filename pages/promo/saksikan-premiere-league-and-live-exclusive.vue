<template>
    <div>
        <Navbar></Navbar>
        <img :src="headerImageDesktop1" class="w-100">
        <section class="py-5">
            <div class="container">
                <h4 class="fw-bold text-center">Paket Liga Inggris</h4>
                <div class="text-center">Liga Inggris Musim 2024/25 LIVE dan Eksklusif di Nex</div>
                <img src="~/assets/static-content/banner/1-section.png" class="w-100 mt-5 mb-5">
                <div class="fw-bold fs-5 text-center show-on-desktop">Untuk Membeli Paket Silahkan Kunjungi Marketplace Kami</div>
                <div class="d-flex show-on-desktop justify-content-center mt-3">
                    <div class="mb-3 d-flex justify-content-center me-3" style="width:150px">
                        <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                <img src="~/assets/social-media/shopee.png" style="height:23px;max-width:100%;" />
                            </div>
                        </a>
                    </div>
                    <div class="mb-3 d-flex justify-content-center" style="width:180px">
                        <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                <img src="~/assets/social-media/nex.png" style="height:17px;max-width:100%;" />
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
                <div class="d-flex show-on-mobile justify-content-center mt-5">
                    <div class="mb-3 d-flex justify-content-center" style="width:100%">
                        <a href="https://shopee.co.id/nexparabola.official" target="_blank" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                <img src="~/assets/social-media/shopee.png" style="height:23px;max-width:100%;" />
                            </div>
                        </a>
                    </div>
                    <div class="mb-3 d-flex justify-content-center" style="width:100%">
                        <a href="https://belipaket.mynex.id/" target="_blank" class="w-100">
                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                <img src="~/assets/social-media/nex.png" style="height:17px;max-width:100%;" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import headerImageDesktop1 from "~/assets/static-content/banner/1-detail.png"

    import logoNex from "~/assets/logo-nex-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    useHead({
        title: 'Premiere League | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'Premiere League | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'Premiere League | Nex Parabola'
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