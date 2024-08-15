<template>
    <div>
        <Navbar></Navbar>
        <carousel :items-to-show="1" :autoplay="2500" :wrapAround="true">
            <slide v-for="a in 5" :key="a">


                <div class="d-flex align-items-center py-5"
                    :style="`background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${backgroundImageDesktop}');background-size:cover;width:100%;min-height:300px`">
                    <div class="container">
                        <div style="max-width:600px">
                            <h1 class="text-white text-start fw-bold pt-5">Saksikan Premier League
                                Live & Exclusive</h1>
                            <div class="text-white text-start fs-5 pt-3">Berlangganan paket liga inggris dan dukung tim
                                andalan kamu dalam laga bergerngsi secara live selama satu musim
                            </div>
                            <div class="d-flex">
                                <button class="btn bg-primary text-white py-2 px-5 fw-bold mt-3 mb-5 fs-5"
                                    type="button">Lihat Lebih Lanjut</button>
                            </div>
                        </div>
                    </div>

                </div>
            </slide>

            <template #addons>

                <pagination />
            </template>
        </carousel>
        <section class="py-1 mt-5">
            <div class="container">
                <div class="title-section">Receiver & Paket Berlangganan</div>
                <div class="subtitle-section mb-5">Pilih sesuai dengan kebutuhan kamu</div>
                <div class="row">
                    <div class="col-lg-4 mb-3">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/1.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-5">Receiver</div>
                                <div class="text-center">Mulai dari</div>
                                <div class="fw-bold text-center fs-5">Rp 314.000</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/receiver">Beli Sekarang <i style="color:black;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="shadow-product w-100 product-box">
                            <img src="~/assets/2.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-5">Paket Berlangganan</div>
                                <div class="text-center">Mulai dari</div>
                                <div class="fw-bold text-center fs-5">Rp 314.000</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/paket">Beli Sekarang <i style="color:black;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="shadow-product w-100 product-box" style="height:100%">
                            <img src="~/assets/3.png" />
                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                style="min-height:120px">
                                <div class="fw-bold text-center fs-5">List Channel & Program</div>
                            </div>
                            <div class="p-3 d-flex justify-content-center footer" style="border-top:1px #ddd solid">
                                <nuxt-link to="/channel">Beli Sekarang <i style="color:black;"
                                        class="bi bi-chevron-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5">
            <div
                :style="`background-image:url('${backgroundImage}');background-size: cover;background-repeat:no-repeat;min-height:500px`">
                <div class="container-fluid">
                    <div class="py-3 px-5 group-match">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="title-section title-match"
                                    style="color:#2C69A7 !important;font-size:42px;font-weight:bold">Jadwal
                                    Minggu Ini
                                </div>
                                <div class="subtitle-section" style="font-size:20px;color:#2C69A7 !important;">Mulai
                                    dari sepak bola, Voli, Basket
                                    hingga Tenis</div>
                            </div>
                            <div class="col-lg-7">
                                <div class="d-flex flex-wrap">
                                    <div style="width:50%" class="pe-3 sub-group-match">
                                        <div class="dropdown mb-3 w-100">
                                            <button class="btn btn-secondary dropdown-toggle text-left w-100"
                                                style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>
                                                    <span style="font-size:13px;">Filter By Kompetisi</span><br>
                                                    <span style="font-weight:600;">Premiere League</span>
                                                </span>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item"
                                                        style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                                        v-for="a in 10" href="#">Option 1</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div style="width:50%" class="sub-group-match">
                                        <div class="dropdown mb-3 w-100">
                                            <button class="btn btn-secondary dropdown-toggle text-left w-100"
                                                style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>
                                                    <span style="font-size:13px;">By Date</span><br>
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
                                </div>

                            </div>
                        </div>
                        <div class="row d-flex justify-content-end">
                            <div class="col-lg-8">
                                <div class="w-100 bg-white p-3" style="border-radius:10px">

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="w-100">
                                                <img src="~/assets/logo-channel.png" class="mt-3" style="width:100px !important">
                                            </div>
                                            <div class="d-flex align-items-center pb-2 mt-2"
                                                style="border-bottom:1px black solid" v-for="a in 5">
                                                <div class="text"
                                                    style="color:#00539B;font-weight:600;font-size:14px;margin-right:10px">
                                                    Man City</div>
                                                <img src="~/assets/city.png" style="width:30px;margin-right:10px;">
                                                <div class="text"
                                                    style="color:#00539B;font-weight:600;font-size:14px;margin-right:10px">
                                                    20:00 WIB</div>
                                                <img src="~/assets/mu.png" style="width:30px;margin-right:10px;">
                                                <div class="text" style="color:#00539B;font-weight:600;font-size:14px;">
                                                    Man United</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="w-100">
                                                <img src="~/assets/logo-channel.png" class="mt-3" style="width:100px !important">
                                            </div>
                                            <div class="d-flex align-items-center pb-2 mt-2"
                                                style="border-bottom:1px black solid" v-for="a in 5">
                                                <div class="text"
                                                    style="color:#00539B;font-weight:600;font-size:14px;margin-right:10px">
                                                    Man City</div>
                                                <img src="~/assets/city.png" style="width:30px;margin-right:10px;">
                                                <div class="text"
                                                    style="color:#00539B;font-weight:600;font-size:14px;margin-right:10px">
                                                    20:00 WIB</div>
                                                <img src="~/assets/mu.png" style="width:30px;margin-right:10px;">
                                                <div class="text" style="color:#00539B;font-weight:600;font-size:14px;">
                                                    Man United</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5">
            <div class="container">
                <div class="title-section ">Movie & Series of the Month</div>
                <div class="subtitle-section mb-5">Kumpulan Film dan Series Spesial Siap Temani Harimu!</div>
            </div>
            <div class="container-fluid">
                <div class="wrap-gallery d-flex py-3" id="mom-movie-gallery"
                    style="background-color:white; overflow-x: auto; width:100%;">
                    <div class="gallery">
                        <img src="~/assets/movie/1.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/2.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/3.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/4.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/5.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>                    
                    <div class="gallery">
                        <img src="~/assets/movie/1.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/2.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/3.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/4.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/5.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>                    
                </div>
            </div>
        </section>
        <section class="py-5">
            <div class="container">
                <div class="title-section ">Kids Movie of the Month</div>
                <div class="subtitle-section mb-5">Kumpulan Kartun dan Anime Bulan Ini Bikin Ketawa dan Seru di Rumah!
                </div>
            </div>
            <div class="container-fluid">
                <div class="wrap-gallery d-flex py-3" id="kids-movie-gallery"
                    style="background-color:white; overflow-x: auto; width:100%;">
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/1.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/2.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/3.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/4.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/5.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>                  
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/1.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/2.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/3.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/4.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>
                    <div class="gallery">
                        <img src="~/assets/movie/KIDS/5.jpg"
                            style="width:200px;height:300px;margin-right:10px;border-radius: 10px;" />
                    </div>                  
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImage from "~/assets/bg-pertandingan.png"
    import backgroundImageDesktop from "~/assets/sample-banner-10.png"

    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const intervalKidsMovie = ref(null);
    const intervalMom = ref(null);
    onMounted(() => {
        sliderKidsMovie()
        momMovieGallery()
    });

    onBeforeRouteLeave((to, from, next) => {
        if (intervalKidsMovie.value) {
            clearInterval(intervalKidsMovie.value);
        }
        if (intervalMom.value) {
            clearInterval(intervalMom.value);
        }
        next()
    })

    function sliderKidsMovie() {
        let elGallery = document.getElementById('kids-movie-gallery');
        let triggerStop = 0;
        let kanan = true;
        intervalMom.value = setInterval(() => {
            if (triggerStop == elGallery.scrollLeft && elGallery.scrollLeft > 0) {
                if (kanan) {
                    kanan = false;
                } else {
                    kanan = true;
                }
            } else if (elGallery.scrollLeft < 1) {
                kanan = true;
            }

            triggerStop = elGallery.scrollLeft;

            if (kanan) {
                elGallery.scrollTo(elGallery.scrollLeft + 1, 0);
            } else {
                elGallery.scrollTo(elGallery.scrollLeft - 1, 0);
            }
        }, 15);
    }

    function momMovieGallery() {
        let elGallery = document.getElementById('mom-movie-gallery');
        let triggerStop = 0;
        let kanan = true;
        intervalKidsMovie.value = setInterval(() => {
            if (triggerStop == elGallery.scrollLeft && elGallery.scrollLeft > 0) {
                if (kanan) {
                    kanan = false;
                } else {
                    kanan = true;
                }
            } else if (elGallery.scrollLeft < 1) {
                kanan = true;
            }

            triggerStop = elGallery.scrollLeft;

            if (kanan) {
                elGallery.scrollTo(elGallery.scrollLeft + 1, 0);
            } else {
                elGallery.scrollTo(elGallery.scrollLeft - 1, 0);
            }
        }, 15);
    }
</script>