<template>
    <div>
        <Navbar></Navbar>
        <section style="background:#f2f2f2">
            <div class="container container-news-detail">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-8">
                                <h1 style="font-weight:600;" class="mt-5 mb-3">7 Teknik Pernafasan Kabut di Anime
                                    Kimetsu no
                                    Yaiba</h1>
                                <span class="px-3 py-2 mt-5"
                                    style="background:#6e6e6e;color:#fff;border-radius: 10px">Anime</span>
                                <div class="fs-5 pt-3" style="color:#8a8686">20 Agustus 2024</div>
                                <img src="~/assets/sample-event.png" class="w-100 mb-5 mt-3" />
                                <div class="mb-5" style="line-height:2;font-size:16px">Lorem ipsum dolor sit amet
                                    consectetur. Mi ullamcorper
                                    mattis quis lectus. Libero convallis sed fames orci. Consequat pulvinar placerat
                                    amet vel bibendum fermentum. Elementum amet venenatis adipiscing amet eget lacus
                                    suscipit dapibus praesent. Id amet etiam convallis pellentesque id. Nibh diam nec
                                    eget turpis. Odio molestie facilisis lorem platea enim. Pharetra vitae scelerisque
                                    sit bibendum praesent. Nec ornare sit accumsan diam maecenas elementum et nullam
                                    ipsum.
                                    Mi diam in amet aliquam. Non a turpis eu augue bibendum habitant. Potenti eget
                                    tincidunt imperdiet sollicitudin magna ut purus nulla. Porttitor hendrerit dis
                                    malesuada tortor. Sit sed dui fusce aenean nibh cursus sed.
                                    Lorem feugiat massa volutpat mauris elit. Euismod arcu mauris id quis faucibus quis.
                                    Faucibus proin ligula consectetur nullam. Amet feugiat adipiscing habitant ultrices
                                    blandit amet adipiscing euismod. Cursus quis interdum diam et quis. Augue nisi
                                    viverra vulputate feugiat potenti nec lorem. Amet quis feugiat facilisis sed sed
                                    odio. Pharetra in nullam blandit augue.
                                    Blandit fermentum sed mattis venenatis semper. Vel proin nisl purus augue aliquet
                                    placerat egestas. Tellus magna odio pharetra rhoncus viverra. Felis sed nibh sit sem
                                    eget hendrerit euismod. Bibendum viverra semper velit viverra commodo pellentesque
                                    cursus. Duis imperdiet sit ullamcorper euismod pulvinar molestie amet. Velit
                                    faucibus molestie senectus accumsan mi gravida purus vel lorem. Turpis mattis
                                    aliquet id nunc tortor sapien morbi faucibus.</div>
                            </div>
                            <div class="col-lg-4">
                                <h3 style="border-bottom: 1px #ddd solid;font-weight:500" class="pb-3 mt-5">Klik Untuk
                                    Cek Paket NEX Parabola</h3>
                                <div class="mb-5 shadow-product w-100 product-box bg-white" v-for="a in 3">
                                    <img src="~/assets/sample-product.jpg" />
                                    <div class="p-3 " style="min-height:150px">
                                        <div class="d-flex justify-content-between mb-3 align-items-center">
                                            <div class="fw-bold fs-5">Paket Liga Inggris</div>
                                            <div class="badge-packet">Pelanggan Baru</div>
                                        </div>
                                        <div>Animal Planet, Discovery, BBC Earth, BBC Lifestyle, BBC World News, AXN,
                                            ONE, Rock
                                            Entertainment, Rock Action, MTV, HGTV, TLC, AFN, Citra Culinary & Travel, &
                                            6
                                            Channel TV Nasional</div>
                                    </div>
                                    <div class="py-3 px-5 d-flex justify-content-center footer">
                                        <a href="javascript:void(0)" @click="openPacket"
                                            style="border-radius: 20px;font-size: 18px;font-weight:600"
                                            class="text-center btn bg-primary text-white w-100 p-3">BELI SEKARANG</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <h3>Artikel Lainnya</h3>
                                <div class="row">
                                    <div class="col-lg-4 mb-3" v-for="a in 3">
                                        <div class="shadow-product w-100 product-box">
                                            <img src="~/assets/sample-event.png" />
                                            <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                                                style="min-height:120px">
                                                <div class="fw-bold fs-5">7 Teknik Pernafasan Kabut di Anime Kimetsu no
                                                    Yaiba</div>
                                            </div>
                                            <div class="p-3 d-flex justify-content-center footer"
                                                style="border-top:1px #ddd solid">
                                                <nuxt-link to="/news/title" class="w-100 p-2 text-center fw-bold"
                                                    style="border-radius:10px;border:2px #2C69A7 solid;color:#2C69A7 !important"
                                                    href="javascript:void(0)">Baca Sekarang <i
                                                        style="color:#2C69A7 !important;"
                                                        class="bi bi-chevron-right"></i></nuxt-link>
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
        <Footer></Footer>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-packet">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button class="btn-close-modal-custom" type="button" data-bs-dismiss="modal"><i class="bi bi-x"></i></button>
                        <img src="~/assets/sample-product.jpg" class="w-100" />
                        <h2 class="fw-bold mt-3">Paket Liga Inggris</h2>
                        <div style="line-height:2;">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="row justify-content-center">
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/tokopedia.png" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/bukalapak.png" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/lazada.jpg" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-5 mb-3">
                                <a href="javascript:void(0)">
                                    <div class=" px-3 py-1 rounded" style="box-shadow: 0 5px 5px rgba(17, 24, 39, .09);">
                                        <img src="~/assets/shopee.svg" class="w-100" style="height:60px;object-fit: contain;object-fit: center;" />
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
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const selected = ref('semua');
    const route = useRoute()

    
    function openPacket() {
        $("#modal-packet").modal('show');
    }
</script>