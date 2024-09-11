<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">Receiver</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-on-desktop">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageDesktop}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageDesktop" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 0">
                        <h1 class="text-white fw-bold">RECEIVER</h1>
                        <div class="text-white">Kami Hadirkan Teknologi Terbaik Untuk<br> Pengalaman Menonton Paling
                            Seru
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="pt-5 pb-5">

            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="card bg-white card-receiver" style="border:0 !important">
                            <div class="card-body bg-white p-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver1" style="width:100%;max-width:100%;height: unset !important" />
                                </div>
                                <div class="text-center pt-4 fs-6 fw-bold c-primary black-on-mobile">Nex Parabola</div>
                                <div class="text-center pt-2 fs-6 fw-bold c-primary black-on-mobile">Tipe Biru</div>
                                <div class="text-center pt-2">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center text-center pt-3 pb-3">
                                    <a href="javascript:void(0)" @click="openReceiver(1, link1, linkLazada1)"
                                        style="color:black !important;font-weight:600;"><span
                                            style="border-bottom:1px #ddd solid">BELI SEKARANG</span>&ensp;<i
                                            class="bi bi-arrow-right c-primary-custom"></i></a>
                                </div>
                                <div class="w-100 pt-3 receiver-fitur-border-top">
                                    <div class="receiver-group">
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/spec.svg">
                                            <div class="text">CS 8001 Chipset</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/wifi.svg">
                                            <div class="text">WIFI Dongle</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ota.svg">
                                            <div class="text">Super OTA</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ui.svg">
                                            <div class="text">Modern UI</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">H.264/SD/HD
                                                Video</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/tv-icon.svg">
                                            <div class="text">TV Icon
                                                List</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/usb.svg">
                                            <div class="text">2x back
                                                USB</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/meecast.svg">
                                            <div class="text">MeeCast</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/512mb.svg">
                                            <div class="text">Memory</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/8mb.svg">
                                            <div class="text">RAM</div>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="card bg-white card-receiver" style="border:0 !important">
                            <div class="card-body bg-white p-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver2" style="width:100%;max-width:100%;height: unset !important" />
                                </div>
                                <div class="text-center pt-4 fs-6 fw-bold c-primary black-on-mobile">Nex Parabola</div>
                                <div class="text-center pt-2 fs-6 fw-bold c-primary black-on-mobile">Tipe Kuning</div>
                                <div class="text-center pt-2">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center text-center pt-3 pb-3">
                                    <a href="javascript:void(0)" @click="openReceiver(2, link2, linkLazada2)"
                                        style="color:black !important;font-weight:600;"><span
                                            style="border-bottom:1px #ddd solid">BELI SEKARANG</span>&ensp;<i
                                            class="bi bi-arrow-right c-primary-custom"></i></a>
                                </div>
                                <div class="w-100 pt-3 receiver-fitur-border-top">
                                    <div class="receiver-group">
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/spec.svg">
                                            <div class="text">CS 8001 Chipset</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/512mb.svg">
                                            <div class="text">Memory</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/8mb.svg">
                                            <div class="text">Flash</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">H.264/MPEG-2/MPEG-4 Video</div>
                                        </div>                                        
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/wifi.svg">
                                            <div class="text">WIFI Dongle</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ota.svg">
                                            <div class="text">Super OTA</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/usb.svg">
                                            <div class="text">2x back 
                                                USB</div>
                                        </div>    
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="card bg-white card-receiver" style="border:0 !important">
                            <div class="card-body bg-white p-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver3" style="width:100%;max-width:100%;height: unset !important" />
                                </div>
                                <div class="text-center pt-4 fs-6 fw-bold c-primary black-on-mobile">Nex Parabola</div>
                                <div class="text-center pt-2 fs-6 fw-bold c-primary black-on-mobile">Tipe Merah</div>
                                <div class="text-center pt-2">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center text-center pt-3 pb-3">
                                    <a href="javascript:void(0)" @click="openReceiver(3, link3, linkLazada3)"
                                        style="color:black !important;font-weight:600;"><span
                                            style="border-bottom:1px #ddd solid">BELI SEKARANG</span>&ensp;<i
                                            class="bi bi-arrow-right c-primary-custom"></i></a>
                                </div>
                                <div class="w-100 pt-3 receiver-fitur-border-top">
                                    <div class="receiver-group">
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/spec.svg">
                                            <div class="text">CS 8001 Chipset</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/512mb.svg">
                                            <div class="text">Memory</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/8mb.svg">
                                            <div class="text">Flash</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">H.264/MPEG-2/MPEG-4 Video</div>
                                        </div>  
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/wifi.svg">
                                            <div class="text">WIFI Dongle</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ota.svg">
                                            <div class="text">Super OTA</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/usb.svg">
                                            <div class="text">2x back 
                                                USB</div>
                                        </div>                                             
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="card bg-white card-receiver" style="border:0 !important">
                            <div class="card-body bg-white p-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver4" style="width:100%;max-width:100%;height: unset !important" />
                                </div>
                                <div class="text-center pt-4 fs-6 fw-bold c-primary black-on-mobile">Nex Parabola</div>
                                <div class="text-center pt-2 fs-6 fw-bold c-primary black-on-mobile">Combo Kuning</div>
                                <div class="text-center pt-2">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center text-center pt-3 pb-3">
                                    <a href="javascript:void(0)" @click="openReceiver(4, link4, linkLazada4)"
                                        style="color:black !important;font-weight:600;"><span
                                            style="border-bottom:1px #ddd solid">BELI SEKARANG</span>&ensp;<i
                                            class="bi bi-arrow-right c-primary-custom"></i></a>
                                </div>
                                <div class="w-100 pt-3 receiver-fitur-border-top">
                                    <div class="receiver-group">
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/spec.svg">
                                            <div class="text">MM230 Chipset</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/wifi.svg">
                                            <div class="text">MT7601 & RT5370 WIFI Dongle</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ota.svg">
                                            <div class="text">OTA Support</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ota.svg">
                                            <div class="text">Super OTA</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">H.265 HEVC/H.264/MPEG-5/MPEG-4 Video</div>
                                        </div>  
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">MPEG-5 Audio</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/usb.svg">
                                            <div class="text">1x Port USB Depan</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/512mb.svg">
                                            <div class="text">Memory</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/8mb.svg">
                                            <div class="text">Flash</div>
                                        </div>                                          
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="card bg-white card-receiver" style="border:0 !important">
                            <div class="card-body bg-white p-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver5" style="width:100%;max-width:100%;height: unset !important" />
                                </div>
                                <div class="text-center pt-4 fs-6 fw-bold c-primary black-on-mobile">Nex Parabola</div>
                                <div class="text-center pt-2 fs-6 fw-bold c-primary black-on-mobile">Combo Merah</div>
                                <div class="text-center pt-2">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center text-center pt-3 pb-3">
                                    <a href="javascript:void(0)" @click="openReceiver(5, link5, linkLazada5)"
                                        style="color:black !important;font-weight:600;"><span
                                            style="border-bottom:1px #ddd solid">BELI SEKARANG</span>&ensp;<i
                                            class="bi bi-arrow-right c-primary-custom"></i></a>
                                </div>
                                <div class="w-100 pt-3 receiver-fitur-border-top">
                                    <div class="receiver-group">
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/spec.svg">
                                            <div class="text">GX 6711
                                                Chipset</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/wifi.svg">
                                            <div class="text">MT7601 & RT5370 WIFI Dongle</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/ota.svg">
                                            <div class="text">OTA Support</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">H.264/MPEG-4 HD/SD Video</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">MPEG-1 Audio</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">Mitube/Youtube/IPTV</div>
                                        </div>  
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/usb.svg">
                                            <div class="text">2x Port USB Depan 
                                                Belakang</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/meecast.svg">
                                            <div class="text">MeeCast</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/tv-icon.svg">
                                            <div class="text">Net Update Software</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/512mb.svg">
                                            <div class="text">Memory</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/8mb.svg">
                                            <div class="text">Flash</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">Mitube/Youtube/IPTV</div>
                                        </div>                                                                                    
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="card bg-white card-receiver" style="border:0 !important">
                            <div class="card-body bg-white p-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver6" style="width:100%;max-width:100%;height: unset !important" />
                                </div>
                                <div class="text-center pt-4 fs-6 fw-bold c-primary black-on-mobile">NexVidio</div>
                                <div class="text-center pt-4">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center text-center pt-4 pb-3">
                                    <a href="javascript:void(0)" @click="openReceiver(6, link6, '')"
                                        style="color:black !important;font-weight:600;"><span
                                            style="border-bottom:1px #ddd solid">BELI SEKARANG</span>&ensp;<i
                                            class="bi bi-arrow-right c-primary-custom"></i></a>
                                </div>
                                <div class="w-100 pt-3 receiver-fitur-border-top">
                                    <div class="receiver-group">
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/android.svg">
                                            <div class="text">Android 10 OS</div>
                                        </div>
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/play.svg">
                                            <div class="text">H.265 HEVC Video | 4K Resolution</div>
                                        </div>                                                                                                              
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/16gb.svg">
                                            <div class="text">Memory</div>
                                        </div>                                                                               
                                        <div class="receiver-fitur">
                                            <img src="~/assets/static-content/receiver/2gb.svg">
                                            <div class="text">RAM</div>
                                        </div>                                                                                                                                                                                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-receiver">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body modal-body-receiver">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i
                                class="bi bi-x"></i></button>
                        <div class="row">
                            <div
                                class="col-lg-5 px-3 d-flex align-items-center justify-content-center height-modal-receiver">
                                <img :src="receiver1" class="w-100" v-if="type == 1" />
                                <img :src="receiver2" class="w-100" v-if="type == 2" />
                                <img :src="receiver3" class="w-100" v-if="type == 3" />
                                <img :src="receiver4" class="w-100" v-if="type == 4" />
                                <img :src="receiver5" class="w-100" v-if="type == 5" />
                                <img :src="receiver6" class="w-100" v-if="type == 6" />
                            </div>
                            <div class="col-lg-7">
                                <div class="p-3">
                                    <h5 class="text-left pt-5 fw-bold show-on-desktop">{{name}}</h5>
                                    <div class="text-left pt-1 fs-7 pb-3 show-on-desktop" style="color:black;">Dapatkan
                                        Produk Kami di Ecommerce</div>
                                    <div class="text-center fs-7 show-on-mobile">Dapatkan Produk Kami di Ecommerce</div>
                                    <div class="row justify-content-center show-on-desktop mt-1">
                                        <!-- <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/tokopedia.png" style="height:40px;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/bukalapak.png" style="height:25px;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/lazada.jpg" style="height:25px;" />
                                                </div>
                                            </a>
                                        </div> -->
                                        <div class="col-lg-12 mb-3 d-flex justify-content-center" v-if="lazada">
                                            <a :href="lazada" target="_blank" class="w-100">
                                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                                    <img src="~/assets/social-media/lazada.jpg"
                                                        style="height:25px;max-width:100%;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a :href="url" target="_blank">
                                                <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                                    style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                                    <img src="~/assets/social-media/shopee.png"
                                                        style="height:25px;max-width:100%;" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row justify-content-center show-on-mobile">
                                    <!-- <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/tokopedia.png" style="height:40px;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/bukalapak.png" style="height:25px;" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <a href="javascript:void(0)">
                                                <div class=" px-3 py-3 rounded d-flex justify-content-center"
                                                    style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                                    <img src="~/assets/lazada.jpg" style="height:25px;" />
                                                </div>
                                            </a>
                                        </div> -->
                                    <div class="col-lg-12 mb-3 d-flex justify-content-center" v-if="lazada">
                                        <a :href="lazada" target="_blank" class="w-100">
                                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                                style="box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, .09);height:43px">
                                                <img src="~/assets/social-media/lazada.jpg"
                                                    style="height:25px;max-width:100%;" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <a :href="url" target="_blank">
                                            <div class=" px-3 py-1 rounded w-100 d-flex justify-content-center align-items-center"
                                                style="box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, .09);height:43px">
                                                <img src="~/assets/social-media/shopee.png"
                                                    style="height:25px;max-width:100%;" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    import logoNex from "~/assets/logo-nex-2.png";
    import backgroundImageMobile from "~/assets/header/receiver-mobile.png"
    import backgroundImageDesktop from "~/assets/header/receiver-desktop.png"

    import receiver1 from "~/assets/static-content/receiver/1.png";
    import receiver2 from "~/assets/static-content/receiver/2.png";
    import receiver3 from "~/assets/static-content/receiver/3.png";
    import receiver4 from "~/assets/static-content/receiver/4.png";
    import receiver5 from "~/assets/static-content/receiver/5.png";
    import receiver6 from "~/assets/static-content/receiver/6.png";    

    const link1 = ref(
        'https://shopee.co.id/Nex-Parabola-Type-Biru-i.1311323005.27256686729?sp_atk=49f9c6de-7d91-4389-9246-f7b010c9e65d&xptdk=49f9c6de-7d91-4389-9246-f7b010c9e65d'
    );
    const link2 = ref(
        'https://shopee.co.id/Nex-Parabola-Type-Kuning-i.1311323005.29706687030?sp_atk=2780900d-2745-43fc-bc9b-bf9b48ced708&xptdk=2780900d-2745-43fc-bc9b-bf9b48ced708'
    );
    const link3 = ref(
        'https://shopee.co.id/Nex-Parabola-Type-Merah-i.1311323005.28456687106?sp_atk=cecf93ba-5b96-4596-b614-144d36ebeffd&xptdk=cecf93ba-5b96-4596-b614-144d36ebeffd'
    );
    const link4 = ref(
        'https://shopee.co.id/Nex-Parabola-Combo-Kuning-i.1311323005.25884184642?sp_atk=4581e336-2650-445d-8b02-e28fd87e9a98&xptdk=4581e336-2650-445d-8b02-e28fd87e9a98'
    );
    const link5 = ref(
        'https://shopee.co.id/Nex-Parabola-Combo-Merah-i.1311323005.29956679529?sp_atk=c7d60f9d-9ba1-436e-85fc-d59c4898035d&xptdk=c7d60f9d-9ba1-436e-85fc-d59c4898035d'
    );
    const link6 = ref(
        'https://shopee.co.id/NexVidio-(Android-TV-BOX)-i.1311323005.29856688328?sp_atk=7c9d8f63-f93c-429b-8937-82b75fb929c5&xptdk=7c9d8f63-f93c-429b-8937-82b75fb929c5'
    );

    const linkLazada1 = ref(
        'https://www.lazada.co.id/products/i8217008380.html?spm=a1zawh.24863640.table_online_product.13.60aa4edfuWP5zP'
    )
    const linkLazada2 = ref(
        'https://www.lazada.co.id/products/i8217028229.html?spm=a1zawh.24863640.table_online_product.1.60aa4edfuWP5zP'
    )
    const linkLazada3 = ref(
        'https://www.lazada.co.id/products/i8217012416.html?spm=a1zawh.24863640.table_online_product.10.60aa4edfuWP5zP'
    )
    const linkLazada4 = ref(
        'https://www.lazada.co.id/products/i8216962836.html?spm=a1zawh.24863640.table_online_product.16.60aa4edfuWP5zP'
    )
    const linkLazada5 = ref(
        'https://www.lazada.co.id/products/i8216950950.html?spm=a1zawh.24863640.table_online_product.19.60aa4edfuWP5zP'
    )
    const url = ref('')
    const lazada = ref('')
    const type = ref(0)

    const name = ref('');

    function openReceiver(typeX, urlX, urlLazada) {
        if (typeX == 1) {
            name.value = 'Nex Parabola | Tipe Biru';
        } else if (typeX == 2) {
            name.value = 'Nex Parabola | Tipe Kuning';
        } else if (typeX == 3) {
            name.value = 'Nex Parabola | Tipe Merah';
        } else if (typeX == 4) {
            name.value = 'Nex Parabola | Combo Kuning';
        } else if (typeX == 5) {
            name.value = 'Nex Parabola | Combo Merah';
        } else if (typeX == 6) {
            name.value = 'NexVidio';
        }
        type.value = typeX
        url.value = urlX;
        lazada.value = urlLazada
        $("#modal-receiver").modal('show')
    }

    useHead({
        title: 'Receiver | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'Receiver | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'Receiver | Nex Parabola'
            },
            {
                name: 'keywords',
                content: 'receiver nexvidio, nex parabola garuda g1, nex parabola hijau, nex parabola kuning, nex parabola bundling diamond 2 bulan, nex parabola merah, receiver parabola nex video, harga receiver parabola, tv receiver nexvidio, tv nex parabola, receiver nex parabola'
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