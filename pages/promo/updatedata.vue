<template>
    <div>
        <Navbar></Navbar>
        <img alt="header" :src="headerImageDesktop1" class="w-100">
        <section class="py-5">
            <div class="container">
                <h4 class="fw-bold text-center">RAIH GRATIS NONTON FILM DAN SERIES SEPUASNYA  SELAMA 30 HARI DI NEX PARABOLA</h4>
                
                <div>Hanya dengan Update Data kamu dapat nikmati sepuasnya tayangan seru mulai dari Drama Korea, Film Hollywood, Drama Asia hingga Film Box Office tanpa jeda iklan lhoo! Tenang saja data kamu di jamin aman ya.
                </div>
                <div class="fs-5 fw-bold mt-3" style="color:#F3753A;">Cara dapat gratis nonton:</div>
                <ol style="padding:15px !important">
                    <li>Update Data mu di link https://register.nexparabola.id/</li>
                    <li>Isi data mu secara lengkap dan benar termasuk 16 digit No.SMC ID (Tekan tombol hijau pada remote untuk melihat No.SMC ID, contoh 800xxxxxxxxxxxxx) Lalu proses</li>
                    <li>Masukkan OTP yang di dapatkan dari No.HP yang didaftarkan dilangkah ke – 2.</li>
                    <li>Selesai, kamu akan mendapatkan Paket Basic 30 Hari.</li>
                    <li>Kerahasiaan data yang diberikan DIJAMIN AMAN sesuai perundang – undangan</li>
                </ol>
                <div class="fs-5 fw-bold mt-3" style="color:#F3753A;">Syarat dan Ketentuan:</div>
                <ol style="padding:15px !important">
                    <li>Update data hanya berlaku untuk pelanggan Nex Parabola.</li>
                    <li>Seluruh data yang diisi adalah informasi yang benar.</li>
                    <li>Promo berlaku sesuai periode berjalan.</li>
                    <li>Hadiah berupa Paket Basic 30 Hari dan hanya berlaku 1 kali.</li>
                    <li>Nex Parabola berhak melakukan tindakan-tindakan yang diperlukan seperti pembatalan jika ditemukan pelanggaran & berhak mengubah syarat dan ketentuan tanpa pemberitahuan.</li>
                    <li>Dengan mengikuti campaign ini pelanggan mengerti dan menyetujui s&k yang berlaku.</li>
                </ol>
                <div class="d-flex justify-content-center mt-5">
                    <a href="https://register.nexparabola.id/" target="_blank" style="border-radius: 20px;max-width:300px"
                    class="text-center btn bg-primary text-white w-100 p-3">UPDATE DATAMU SEKARANG</a>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import headerImageDesktop1 from "~/public/static-content/banner/2-detail.png"
    import logoNex from "~/public/bg-about-2.png";

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    useHead({
        title: 'Update Data | Nex',
        meta: [{
                name: 'title',
                content: 'Update Data | Nex'
            },
            {
                name: 'ogTitle',
                content: 'Update Data | Nex'
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