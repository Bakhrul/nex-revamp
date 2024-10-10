<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img alt="term" :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">Syarat dan Ketentuan</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:100% 100%;width:100%;position:relative;`">
                <img alt="term" :src="backgroundImageDesktop" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 0">
                        <h1 class="text-white fw-bold">Syarat dan Ketentuan</h1>
                    </div>
                </div>
            </div>
        </div>
        <section class="mt-3">

            <div class="container">
                <b>A. Pendahuluan</b><br>
                Dengan melakukan pembelian Set Top Box Nex ini, Pengguna dianggap telah membaca dan menyetujui, dan oleh
                karena itu terikat pada Syarat dan Ketentuan sebagaimana dimaksud di bawah ini:<br>
                Pembelian Set Top Box Nex merupakan transaksi jual beli yang dilakukan oleh dan antara PT Mediatama
                Televisi sebagai penyelenggara layanan televisi kabel berlangganan sekaligus pihak yang memiliki hak
                atas siaran-siaran yang terdapat pada Layanan Nex dengan setiap orang yang bermaksud menggunakan Layanan
                ini sesuai dengan Syarat dan Ketentuan ini.<br>

                <b>B. Pengertian</b><br>
                <ol>
                    <li> Nex adalah operator TV satelit berlangganan yang memiliki dan mengoperasikan secara sah Layanan
                        Nex di
                        bawah PT Mediatama Televisi, sebuah perseroan terbatas yang didirikan berdasarkan hukum Republik
                        Indonesia, beralamat di SCTV Tower Lantai 15, Senayan City, Jl. Asia Afrika lot 19, Jakarta
                        Pusat 10270,
                        Indonesia.</li>
                    <li> Pengguna adalah perorangan yang membeli dan menggunakan Set Top Box Nex untuk penggunaan dan
                        berlangganan Layanan Nex dan bertanggung jawab atas segala akibat yang timbul daripadanya.</li>
                    <li> Layanan Nex adalah layanan penyiaran televisi kabel berlangganan oleh Nex secara direct to
                        home kepada
                        Pengguna dengan menggunakan Hybrid System.</li>
                    <li> Set Top Box Nex adalah perangkat keras yang dibeli oleh Pengguna untuk menikmati Layanan Nex
                        dalam area
                        dan cakupan Wilayah Pengguna.</li>
                    <li>Konten adalah setiap konten digital termasuk namun tidak terbatas pada Konten-Konten Nex, teks,
                        grafik,
                        foto, video, film, film seri, streaming televisi, suara, musik, kombinasi audio visual, atau
                        materi
                        lainnya yang ditampilkan dan disediakan pada platform Nex untuk Pengguna sebagai bagian dari
                        Layanan Nex
                        yang bentuknya dapat berkembang dari waktu ke waktu.</li>
                    <li> Grup Emtek adalah PT Elang Mahkota Teknologi, Tbk. termasuk seluruh anak perusahaannya dimana
                        Nex adalah
                        salah satu afiliasinya.</li>
                    <li> Pelanggan Retail adalah pelanggan yang melakukan pembelian Set Top Box Nex di Official Online
                        Store Nex
                        Parabola, toko-toko elektronik, dan berbagai tempat lainnya.</li>
                    <li>Mitra Konten adalah setiap orang perorangan atau perusahaan yang memiliki saluran siaran atau
                        akun
                        khusus yang telah diverifikasi dan didaftarkan pada platform Nex serta dapat melakukan penyiaran
                        secara
                        langsung kepada pihak ketiga yang telah diotorisasi berdasarkan pada perjanjian kerja sama.</li>
                    <li> Wilayah adalah area di mana Layanan Nex dapat dinikmati di tempat tinggal</li>
                </ol>
                <b>C. Layanan dan Informasi Berlangganan</b><br>
                Untuk dapat menikmati Layanan Nex, Pengguna wajib memiliki Set Top Box Nex yang disediakan oleh Nex
                dengan sistem distribusi sebagai berikut:<br>
                <ol>
                    <li> Nex bekerja sama dengan Mitra Konten termasuk namun tidak terbatas pada rumah produksi,
                        pencipta,
                        pemilik, dan pemegang lisensi yang sah atas Konten, untuk menyediakan Layanan Nex.</li>
                    <li> Pengguna tunduk pada Syarat dan Ketentuan selama menggunakan Layanan Nex, Pengguna diberikan
                        izin yang
                        terbatas berupa izin non eksklusif sehingga pengunaan Layanan Nex tidak dapat dipindahtangankan,
                        tidak
                        dapat dialihkan, dan tidak dapat disublisensikan tanpa izin tertulis dari Nex.</li>
                    <li> Layanan Nex hanya bisa dinikmati dan digunakan oleh Pengguna untuk tujuan pemakaian pribadi
                        dalam
                        Wilayah dan bersifat non komersial.</li>
                    <li> Penggunaan Layanan Nex Parabola terbatas pada Pengguna yang sah yang berusia dewasa secara
                        hukum dan
                        yang memiliki kapasitas hukum untuk membuat kesepakatan/perjanjian berdasarkan peraturan
                        perundang-undangan yang berlaku.</li>
                    <li> Setiap pembelian 1 (satu) Set Top Box Nex, Pengguna mendapatkan Layanan Nex dengan masa berlaku
                        selama 1
                        (satu) bulan sejak Layanan Nex tersebut diaktifkan, dengan paket yang terdiri dari paket basic,
                        paket kids, serta paket diamond. Pengguna dapat memperpanjang Layanan Nex setelah masa berlaku
                        berakhir.
                        Ketentuan ini dapat berubah sewaktu-waktu sesuai dengan kebijakan Nex.</li>
                    <li>Pengguna dapat menghubungi Customer Service Nex melalui Whatsapp di +62 81260012700 atau call
                        center di
                        Pengguna juga dapat mengunjungi official online store Shopee, Tokopedia, Lazada, Bukalapak dan
                        TikTok
                        atau downloadlangsung aplikasi Nex melalui playstore.</li>
                    <li>Sebelum mendapatkan Layanan Nex, Nex berhak untuk meminta, mengumpulkan dan memproses informasi
                        pribadi
                        Pengguna, seperti namun tidak terbatas pada nama, alamat surat elektronik (surel/e-mail), dan
                        nomor
                        telepon seluler Pengguna ketika mendaftar. Pengguna wajib memberikan informasi yang akurat dan
                        lengkap,
                        memperbaharui informasi dan setuju untuk memberikan kepada Nex berupa bukti identitas apapun
                        yang secara
                        wajar dapat Nex mintakan. Jika terdapat perubahan informasi pribadi, Pengguna dapat melakukan
                        perbaruan
                        dengan mengirimkan permintaan perubahan informasi kepada Nex melalui cs@mynex.co.id atau melalui
                        Whatsapp CS Nex di +62 81260012700. Nex akan memberlakukan perubahan informasi tersebut dalam
                        waktu
                        maksimal 15 (lima belas) hari kerja sejak diterimanya permintaan perubahan informasi.</li>

                </ol>









                <b>D. Larangan-larangan</b><br>
                <ol>
                    <li> Pengguna dilarang dengan cara dan dalam bentuk apapun menyiarkan ulang siaran milik Nex
                        termasuk namun
                        tidak terbatas pada membajak, menyebarluaskan, memperbanyak, menyalin, mendistribusikan,
                        menjual,
                        mengirim, mengeksploitasi konten layanan secara komersial atau redistribusi siaran tanpa izin
                        (ilegal).</li>
                    <li>Pengguna dilarang merusak atau menambahkan perangkat pada Set Top Box Nex yang dapat
                        mengakibatkan
                        terjadinya redistribusi siaran.</li>
                    <li> Pengguna dilarang menyebarluaskan dan/atau memperjualbelikan kembali Set Top Box Nex yang telah
                        dibeli
                        kepada pihak ketiga manapun.</li>
                    <li>
                        Mitra Konten dilarang untuk:<br>
                        <ul>
                            <li> Menayangkan ulang atau memperluas sendiri Konten dalam Layanan Nex dengan cara apapun
                                kepada pihak lain
                                diluar perjanjian kerja sama;</li>
                            <li>Memperbanyak dan/atau menggandakan dan/atau merekam dalam bentuk apapun sebagian/seluruh
                                Layanan Nex;</li>
                            <li> Menggunakan segala bentuk hak kekayaan intelektual yang melekat pada Layanan Nex (hak
                                cipta termasuk
                                namun tidak terbatas pada logo, hak merek, dan lain sebagainya) untuk kepentingan
                                pribadi dan/atau pihak
                                lain manapun tanpa persetujuan tertulis dari Nex;</li>
                            <li>Menggunakan dan/atau memberikan Layanan Nex kepada pihak lain di luar Lokasi sebagaimana
                                dimaksud dalam
                                perjanjian kerja sama;</li>
                            <li> Menggunakan Set Top Box retail Nex untuk menayangkan kembali Konten milik Nex;</li>
                            <li> Memindahkan Set Top Box ke lokasi lain selain lokasi yang telah disebutkan dalam
                                perjanjian kerja sama
                                tanpa persetujuan tertulis terlebih dahulu dari Nex.
                                Nex memiliki hak untuk menyelidiki, mengambil tindakan tanggap dan cepat dan/atau
                                langkah hukum dalam
                                bentuk apapun atas setiap pelanggaran yang dilakukan terhadap ketentuan poin (1) hingga
                                (3) di atas,
                                sepanjang yang dimungkinkan oleh hukum termasuk namun tidak terbatas pada menghentikan,
                                membatalkan,
                                melakukan penangguhan atas penggunaan Layanan Nex serta mengambil langkah hukum apapun
                                sesuai dengan
                                peraturan perundang-undangan yang berlaku baik secara perdata maupun pidana.</li>
                        </ul>
                    </li>
                </ol>











                <b>E. Hak Kekayaan Intelektual</b><br>
                <ol>
                    <li> Nex (dan para pemberi lisensi, sebagaimana relevan) memiliki baik secara eksklusif maupun
                        non-eksklusif,
                        segala hak atau lisensi, kepemilikan dan kepentingan dalam dan terhadap Layanan, Konten dan
                        seluruh Hak
                        Kekayaan Intelektual (HAKI) yang terkandung di dalamnya termasuk namun tidak terbatas pada merek
                        dagang,
                        merek layanan, logo, gambar, ikon, produk, dan nama jasa, desain dan nama perusahaan merupakan
                        HAKI yang
                        dimiliki Nex Parabola atau pihak ketiga lainnya yang tidak diperbolehkan untuk disalin, ditiru,
                        atau
                        digunakan baik secara keseluruhan atau sebagian tanpa persetujuan tertulis dari Nex atau pemilik
                        lisensi
                        terkait sesuai peraturan perundang-undangan yang berlaku di Negara Republik Indonesia.</li>
                    <li> Tidak ada hak, kepemilikan, atau kepentingan pada platform Nex atau Layanan atau setiap Konten
                        yang akan
                        dianggap atau ditafsirkan untuk dialihkan kepada Pengguna, baik secara tersirat maupun tersurat,
                        kecuali
                        izin yang secara tegas diberikan dalam suatu perjanjian terpisah dari Syarat dan Ketentuan ini.
                    </li>
                    <li> Setiap percobaan atau pelanggaran nyata atas ketentuan poin (1) dan (2) di atas akan termasuk
                        sebagai
                        pelanggaran yang mengakibatkan penghentian semua hak Pengguna yang dicantumkan dalam Syarat dan
                        Ketentuan ini. Nex berhak untuk mengambil tindakan apapun sepanjang yang dimungkinkan oleh hukum
                        untuk
                        melindungi kepentingan Nex Parabola dan pemberi lisensi, termasuk namun tidak terbatas pada
                        penonaktifan
                        Set Top Box Nex dan/atau pemberian Layanan Nex, serta mengambil langkah hukum apapun sesuai
                        dengan
                        peraturan perundang-undangan yang berlaku baik secara perdata maupun pidana.</li>

                </ol>




                <b>F. Jaminan Layanan Nex Parabola</b><br>
                <ol>
                    <li> Nex menyediakan Layanan Nex dengan menggunakan tingkat pelayanan dan pemeliharaan yang baik,
                        dengan
                        harapan Pengguna dapat menikmati Layanan Nex dengan baik dan nyaman.</li>
                    <li> Pengguna mengakui bahwa setiap informasi dan materi apa pun yang disediakan melalui Layanan Nex
                        di
                        dalamnya mungkin mengandung ketidakakuratan atau kesalahan dan Nex secara tegas mengecualikan
                        tanggung
                        jawabnya atas ketidakakuratan atau kesalahan tersebut sejauh diizinkan oleh undang-undang yang
                        berlaku.</li>
                    <li>
                        Konten apapun yang ditemukan di Layanan Nex disediakan untuk kenyamanan Nex tidak mendukung
                        ketidakakuratan dan kesalahan Konten dalam bentuk apapun dan Nex tidak bertanggung jawab atas
                        isi
                        Konten.</li>
                </ol>



                <b>G. Ganti Rugi dan Batasan Tanggung Jawab</b><br>
                <ol>
                    <li>Pengguna dengan ini setuju untuk melepaskan, tidak memohonkan ganti rugi, dan tidak akan
                        membahayakan
                        Nex dan Grup Emtek termasuk pejabat dan karyawannya dari tanggung jawab, klaim, tuntutan,
                        kerugian
                        dan/atau kerusakan (aktual dan konsekuensial) dari segala jenis dan/atau sifat, diketahui
                        dan/atau tidak
                        diketahui, dicurigai dan/atau tidak terduga, diungkapkan dan/atau tidak diungkapkan, timbul dari
                        atau
                        dengan cara apapun yang terhubung dengannya.</li>
                    <li> Setiap kerugian tanpa terkecuali akibat tindakan yang dilakukan oleh Pengguna yang tidak
                        terkait dengan
                        Layanan Nex, sepenuhnya merupakan tanggung jawab Pengguna dan Pengguna melepaskan tanggung jawab
                        pejabat
                        dan karyawan Nex dan Grup Emtek dari setiap kerugian dan/atau risiko tersebut.</li>
                </ol>



                <b>H. Pernyataan Pengguna</b><br>
                <ol>
                    <li> Pengguna akan menggunakan Layanan Nex sesuai dengan Syarat dan Ketentuan ini.</li>
                    <li> Pengguna tidak akan melakukan pelanggaran terhadap Syarat dan Ketentuan ini. Apabila Pengguna
                        melanggar
                        ketentuan apapun dalam Syarat dan Ketentuan ini, Nex berhak melakukan tindakan hukum apapun
                        sesuai
                        dengan hukum dan peraturan perundang-undangan yang berlaku.</li>
                    <li>
                        Pengguna menyatakan bahwa data yang Pengguna berikan untuk tujuan penyediaan Layanan Nex kepada
                        Pengguna
                        adalah benar dan Pengguna setuju bahwa Nex dapat memproses data yang Pengguna berikan secara
                        sukarela
                        termasuk namun tidak terbatas pada pemrosesan data pribadi meliputi antara lain nama, tahun
                        lahir,
                        alamat email, nomor telefon, scan wajah, jenis kelamin, keterangan tempat tinggal serta data
                        lainnya
                        sebagaimana relevan.</li>
                </ol>



                <b>I. Pengakhiran dan Sanksi</b><br>
                <ol>
                    <li> Nex memiliki hak secara sepihak dan segera untuk mengakhiri, menangguhkan, mengurangi ataupun
                        membatasi
                        Layanan yang disediakan Nex kepada Pengguna pada setiap waktu, tanpa pemberitahuan atau
                        pertanggungjawaban kepada Pengguna, jika Pengguna diduga melanggar atau telah melanggar Syarat
                        dan
                        Ketentuan ini, melanggar hukum atau peraturan perundang-undangan apa pun yang berlaku terkait
                        dengan
                        Layanan Nex.</li>
                    <li> Pengguna dengan ini akan melepaskan semua haknya dan tidak akan membuat klaim atau meminta
                        kompensasi
                        apapun dari Nex atas pengakhiran, penangguhan, pengurangan ataupun pembatasan apapun sehubungan
                        dengan
                        Layanan Nex.</li>
                    <li>Apabila Pengguna terindikasi atau terbukti telah melanggar suatu atau seluruh ketentuan dari
                        Syarat dan
                        Ketentuan ini, maka Nex berhak untuk melakukan pengakhiran dan penangguhan Layanan Pengguna dan
                        Pengguna
                        tidak dapat menggunakan akun email dan/atau nomor telepon yang sama untuk meregistrasikan diri
                        Pengguna
                        lagi pada Layanan Nex dengan cara apapun misalnya, melakukan pembelian paket berlangganan
                        Layanan
                        kembali, melakukan klaim re-aktivasi kepada call center Nex, dan lain-lain.</li>
                </ol>




                <b>J. Hukum yang Berlaku</b><br>
                Syarat dan Ketentuan berlangganan ini diatur oleh dan akan diberlakukan berdasarkan peraturan
                perundang-undangan yang berlaku di Republik Indonesia.<br>

                <b>K. Pemberhentian Berlangganan oleh Pengguna</b><br>
                Selama masa aktif masih berlaku, Layanan Nex tidak dapat dapat diberhentikan oleh Pengguna secara
                sepihak dan akan berhenti secara otomatis saat masa aktif langganan berakhir.
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/public/header/terms.png"
    import backgroundImageDesktop from "~/public/header/terms.png"
    import logoNex from "~/public/bg-about-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    useHead({
        title: 'Syarat dan Ketentuan | Nex',
        meta: [{
                name: 'title',
                content: 'Syarat dan Ketentuan | Nex'
            },
            {
                name: 'ogTitle',
                content: 'Syarat dan Ketentuan | Nex'
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
    .link-dealer {
        color: black !important;
        text-decoration: none !important;
    }

    .link-dealer:hover {
        font-weight: 600;
        color: blue !important
    }

    .link-dealer:hover i {
        color: blue !important
    }

    @media(max-width:991px) {
        .btn-dropdown-city {
            width: 100% !important;
            max-width: 100% !important;
        }

        .dropdown-menu-city {
            width: 100%;
        }
    }

    .bg-section {
        background: #f2f2f2;
        border-top: 1px #ddd solid;
    }

    @media(max-width:991px) {
        .bg-section {
            background: #fff !important;
        }
    }
</style>