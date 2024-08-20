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
        <section class="pt-5 pb-5" style="background-color: #f2f2f2">

            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver1" style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Biru</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" :src="receiverFitur1" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver(1, link1)"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver2" style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Kuning</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" :src="receiverFitur2" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3"
                                    style="margin-top:120px !important">
                                    <button @click="openReceiver(2, link2)"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver3" style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Combo Merah</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" :src="receiverFitur3" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver(3, link3)"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver4" style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Combo</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" :src="receiverFitur4" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver(4, link4)"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver5" style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Vidio</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" :src="receiverFitur5" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver(5,link5)"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="card bg-white shadow-lg" style="border-radius: 20px;">
                            <div class="card-body bg-white p-3" style="border-radius: 20px;">
                                <div class="d-flex justify-content-center">
                                    <img :src="receiver6" style="width:100%;max-width:200px;height: unset !important" />
                                </div>
                                <h5 class="text-center pt-5 fw-bold">Nex Parabola | Tipe Merah</h5>
                                <div class="text-center pt-1">Lebih canggih tampilan baru</div>
                                <div class="d-flex justify-content-center">
                                    <img class="mt-3" :src="receiverFitur6" />
                                </div>
                                <div class="d-flex justify-content-center mt-5 mb-3">
                                    <button @click="openReceiver(6, link6)"
                                        style="background-color: #2C69A7 !important;max-width: 230px;border-radius: 15px;"
                                        class="btn bg-primary w-100 p-3 text-white">Beli Sekarang</button>
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
                                class="col-lg-5 col-6 px-3 d-flex align-items-center justify-content-center height-modal-receiver">
                                <img :src="receiver1" class="w-100" v-if="type == 1" />
                                <img :src="receiver2" class="w-100" v-if="type == 2" />
                                <img :src="receiver3" class="w-100" v-if="type == 3" />
                                <img :src="receiver4" class="w-100" v-if="type == 4" />
                                <img :src="receiver5" class="w-100" v-if="type == 5" />
                                <img :src="receiver6" class="w-100" v-if="type == 6" />
                            </div>
                            <div class="col-lg-7 col-6">
                                <div class="p-3">
                                    <h5 class="text-left pt-5 fw-bold show-on-desktop">{{name}}</h5>
                                    <div class="text-left pt-1 fs-7 pb-3 show-on-desktop" style="color:black;">Dapatkan Produk Kami di Ecommerce</div>
                                    <div class="text-center fs-6 show-on-mobile">Dapatkan Produk Kami di Ecommerce</div>
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

    import receiverFitur1 from "~/assets/static-content/receiver/fitur-1.png";
    import receiverFitur2 from "~/assets/static-content/receiver/fitur-2.png";
    import receiverFitur3 from "~/assets/static-content/receiver/fitur-3.png";
    import receiverFitur4 from "~/assets/static-content/receiver/fitur-4.png";
    import receiverFitur5 from "~/assets/static-content/receiver/fitur-5.png";
    import receiverFitur6 from "~/assets/static-content/receiver/fitur-6.png";

    const link1 = ref(
        'https://shopee.co.id/Nex-Parabola-Type-Biru-i.1311323005.27256686729?sp_atk=69965845-b5f5-448a-b8cb-14a8ef9c3cb4&xptdk=69965845-b5f5-448a-b8cb-14a8ef9c3cb4'
    );
    const link2 = ref(
        'https://shopee.co.id/Nex-Parabola-Type-Kuning-i.1311323005.29706687030?sp_atk=c8f63711-47e1-49d5-ac7c-01e8d1ae77b0&xptdk=c8f63711-47e1-49d5-ac7c-01e8d1ae77b0'
    );
    const link3 = ref(
        'https://shopee.co.id/Nex-Parabola-Combo-Merah-i.1311323005.29956679529?sp_atk=2a72f991-65ee-4a5c-a171-74c8ce8bf645&xptdk=2a72f991-65ee-4a5c-a171-74c8ce8bf645'
    );
    const link4 = ref(
        'https://shopee.co.id/Nex-Parabola-Combo-Kuning-i.1311323005.25884184642?sp_atk=92d00b73-48bd-4948-b7d4-8d6ba3ea81e7&xptdk=92d00b73-48bd-4948-b7d4-8d6ba3ea81e7'
    );
    const link5 = ref(
        'https://shopee.co.id/NexVidio-(Android-TV-BOX)-i.1311323005.29856688328?sp_atk=85618a8e-a58b-41f5-a216-b04b6fe5a81b&xptdk=85618a8e-a58b-41f5-a216-b04b6fe5a81b'
    );
    const link6 = ref(
        'https://shopee.co.id/Nex-Parabola-Type-Merah-i.1311323005.28456687106?sp_atk=1dd7a912-283f-4642-a85c-9b0af4ebd6fc&xptdk=1dd7a912-283f-4642-a85c-9b0af4ebd6fc'
    );
    const url = ref('')
    const type = ref(0)

    const name = ref('');

    function openReceiver(typeX, urlX) {
        if (typeX == 1) {
            name.value = 'Nex Parabola | Tipe Biru';
        } else if (typeX == 2) {
            name.value = 'Nex Parabola | Tipe Kuning';
        } else if (typeX == 3) {
            name.value = 'Nex Parabola | Combo Merah';
        } else if (typeX == 4) {
            name.value = 'Nex Parabola | Combo';
        } else if (typeX == 5) {
            name.value = 'Nex Vidio';
        } else if (typeX == 6) {
            name.value = 'Nex Parabola | Tipe Merah';
        }
        type.value = typeX
        url.value = urlX;
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