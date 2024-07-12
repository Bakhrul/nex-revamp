<template>
    <div>
        <div style="border-bottom:1px black solid">
            <div class="container-fluid">
                <img src="~/assets/logo-nex.png" class="mb-3 mt-3" style="width:100px" />
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
                <nuxt-link to="/" class="navbar-brand">
                    <img src="~/assets/special-deals.png" style="width:80px" />
                </nuxt-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Product
                            </a>
                            <ul class="dropdown-menu">
                                <li><nuxt-link class="dropdown-item" to="/receiver">Receiver</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/paket">Paket</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/channel">Channel</nuxt-link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Official Store
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Shopee</a></li>
                                <li><a class="dropdown-item" href="#">Tokopedia</a></li>
                                <li><a class="dropdown-item" href="#">Lazada</a></li>
                                <li><a class="dropdown-item" href="#">Bukalapak</a></li>
                                <li><a class="dropdown-item" href="#">Tiktok Shop</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Nex News
                            </a>
                            <ul class="dropdown-menu">
                                <li><nuxt-link class="dropdown-item" to="/news/sports">Sports</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/news/family">Family & Entertainment</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/news/national">Tv National</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/news/kids">Kids</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/news/anime">Anime</nuxt-link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                About Nex
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <nuxt-link to="/tentang-kami" class="dropdown-item">Company Profile</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/faq" class="dropdown-item">FAQ</nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex form-nav" role="search">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.7325 23.513L15.4268 16.2073C14.8435 16.7043 14.1727 17.089 13.4143 17.3612C12.656 17.6334 11.8938 17.7695 11.1277 17.7695C9.25944 17.7695 7.67821 17.1228 6.38399 15.8293C5.08977 14.5359 4.44266 12.9551 4.44266 11.0868C4.44266 9.21862 5.08899 7.63701 6.38166 6.34201C7.67432 5.04701 9.25477 4.39873 11.123 4.39717C12.9912 4.39562 14.5732 5.04273 15.869 6.33851C17.1648 7.63428 17.8127 9.2159 17.8127 11.0833C17.8127 11.8938 17.6692 12.6782 17.3822 13.4365C17.0952 14.1948 16.7179 14.8435 16.2505 15.3825L23.5562 22.687L22.7325 23.513ZM11.1288 16.6017C12.6766 16.6017 13.9833 16.0689 15.0488 15.0033C16.1144 13.9378 16.6472 12.6307 16.6472 11.0822C16.6472 9.53362 16.1144 8.22695 15.0488 7.16217C13.9833 6.0974 12.6766 5.56462 11.1288 5.56384C9.58105 5.56306 8.27399 6.09584 7.20766 7.16217C6.14132 8.22851 5.60855 9.53517 5.60932 11.0822C5.6101 12.6292 6.14288 13.9358 7.20766 15.0022C8.27243 16.0685 9.5791 16.6013 11.1277 16.6005"
                                fill="#00539B" />
                        </svg>&ensp;

                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>
        <div
            :style="`background-image:url('${backgroundImage}');background-size: cover;background-repeat:no-repeat;min-height:300px`">
        </div>
        <section class="my-2">

            <div class="accordion accordion-custom" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Apa Saja yang Dibutuhkan untuk Memasang Nex?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Berapa Biaya Langganan Nex?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Apakah TV Satelit Nex Membutuhkan Internet?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>

                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Bagaimana Jika Saya Mau Aktivasi via Aplikasi Nex?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>

                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Bagaimana Jika Saya Mau Perbaikan Instalasi via Aplikasi?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="footer-title mb-2">Quick Link </div>
                        <ul>
                            <li><a href="javascript:void(0)" class="footer-link">Produk</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">Channel</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">Promo</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">Tentang kami</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">NexNews</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">Karir</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">Peta Situs</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5">
                        <div class="footer-title mb-2">Butuh Bantuan?</div>
                        <ul>
                            <li><a href="javascript:void(0)" class="footer-link">cs@mynex.co.id</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">(021) 8063 7388</a></li>
                            <li><a href="javascript:void(0)" class="footer-link">PT Mediatama Televisi</a></li>
                        </ul>
                        <div class="footer-title mb-2">Ikuti Kami di </div>
                        <div class="d-flex flex-wrap" style="font-size: 24px">
                            <div class="me-3"><a href="javascript:void(0);"
                                    style="color:black;text-decoration: none !important"><i
                                        class="bi bi-facebook"></i></a></div>
                            <div class="me-3"><a href="javascript:void(0);"
                                    style="color:black;text-decoration: none !important"><i
                                        class="bi bi-instagram"></i></a></div>
                            <div class="me-3"><a href="javascript:void(0);"
                                    style="color:black;text-decoration: none !important"><i
                                        class="bi bi-twitter"></i></a></div>
                            <div class="me-3"><a href="javascript:void(0);"
                                    style="color:black;text-decoration: none !important"><i
                                        class="bi bi-youtube"></i></a></div>
                            <div class="me-3"><a href="javascript:void(0);"
                                    style="color:black;text-decoration: none !important"><i
                                        class="bi bi-tiktok"></i></a></div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-title mb-2">Payment Partners</div>
                        <img src="~/assets/payment.png" style="max-width:100%">
                        <div class="footer-title mb-2 mt-5" style="color:black !important">Download Apps Nex</div>
                        <div class="d-flex align-items-center">
                            <img src="~/assets/sample-qr.jpg" class="me-2" style="max-width:100px">
                            <a href="javascript:void(0)"><img src="~/assets/google-play.png"
                                    style="max-width:180px"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import backgroundImage from "~/assets/header-faq.png"
</script>