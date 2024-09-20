<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-5">
                    <div class="footer-title mb-2">Quick Link </div>
                    <ul style="font-size:16px">
                        <li>
                            <nuxt-link to="/paket" class="footer-link">Produk</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/channel" class="footer-link">Channel</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/special-deals" class="footer-link">Promo</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about/tentang-kami" class="footer-link">Tentang kami</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/nexnews" class="footer-link">NexNews</nuxt-link>
                        </li>                        
                        <li>
                            <nuxt-link to="/about/term-of-use" class="footer-link">Term Of Use</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-5 col-7">
                    <div class="show-on-desktop">
                        <div class="footer-title mb-2">Ikuti Kami di </div>
                        <div class="d-flex flex-wrap mb-5" style="font-size: 24px">
                            <div class="me-2"><a href="https://id-id.facebook.com/groups/180272675720045/"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/facebook.svg" style="width:29px" />
                                </a>
                            </div>

                            <div class="me-2"><a href="https://x.com/nexofficialtv?s=21"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/twitter.svg" style="width:29px" />
                                </a>
                            </div>
                            <div class="me-2"><a href="https://z-p42.www.instagram.com/nexparabola_tv/?hl=da"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/instagram.svg" style="width:29px" />
                                </a>
                            </div>

                            <div class="me-2"><a href="https://www.tiktok.com/@nexparabola_tv"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/tiktok.svg" style="width:29px" />
                                </a>
                            </div>
                            <div><a href="https://www.youtube.com/c/OfficialNexParabolaTV"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/youtube.svg" style="width:29px" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div class="footer-title mb-2">Butuh Bantuan?</div>
                    <ul style="font-size:16px" class="mb-1">
                        <li><a href="mailto:cs@nexparabola.co.id" class="footer-link"> <img src="~/assets/icon/email.svg"
                                    style="width:29px" />
                                &ensp;cs@mynex.co.id</a></li>
                                <li><a href="https://wa.me/6281260012700" class="footer-link"> <img src="~/assets/icon/whatsapp.svg"
                                    style="width:29px" />
                                &ensp;+62 81260012700</a></li>
                        <li><a href="javascript:void(0)"><div class="footer-link d-flex align-items-start"> <img src="~/assets/icon/phone.svg"
                                    style="width:29px" />
                                    <div class="ms-2">(021) 8063 7388<br>
Jam Operasional<br>
Senin - Minggu<br>
07:00 - 23:00 </div>
                                </div></a></li>
                        <li><a href="javascript:void(0)" class="footer-link"> <img src="~/assets/icon/location.svg"
                                    style="width:29px" />
                                &ensp;PT Mediatama Televisi</a></li>
                    </ul>
                    <div class="show-on-mobile">
                        <div class="footer-title">Ikuti Kami di </div>
                        <div class="d-flex flex-wrap" style="font-size: 24px">
                            <div class="me-2"><a href="https://id-id.facebook.com/groups/180272675720045/"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/facebook.svg" style="width:29px" />
                                </a>
                            </div>

                            <div class="me-2"><a href="https://x.com/nexofficialtv?s=21"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/twitter.svg" style="width:29px" />
                                </a>
                            </div>
                            <div class="me-2"><a href="https://z-p42.www.instagram.com/nexparabola_tv/?hl=da"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/instagram.svg" style="width:29px" />
                                </a>
                            </div>

                            <div class="me-2"><a href="https://www.tiktok.com/@nexparabola_tv"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/tiktok.svg" style="width:29px" />
                                </a>
                            </div>
                            <div><a href="https://www.youtube.com/c/OfficialNexParabolaTV"
                                    style="color:black;text-decoration: none !important">
                                    <img src="~/assets/icon/youtube.svg" style="width:29px" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12 col-5 mb-5">
                            <div class="footer-title mb-2">Payment Partners</div>
                            <img src="~/assets/payment.svg" style="max-width:100%">
                        </div>
                        <div class="col-lg-12 col-7 mb-5">
                            <div class="footer-title mb-2">Download Apps Nex</div>
                            <div class="d-flex align-items-center">
                                <img src="~/assets/sample-qr.png" class="me-2" style="max-width:80px">
                                <a class="w-100"
                                    href="https://play.google.com/store/apps/details?id=ezlink.project.nexparabola&pli=1"><img
                                        src="~/assets/google-play.png" style="max-width:200px !important;width:100% !important;"></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
</script>