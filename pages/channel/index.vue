<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">Channel</h6>
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
                        <h1 class="text-white fw-bold">Channel</h1>
                        <div class="text-white">Kami Hadirkan Program Unggulan dengan Pilihan Channel Terlengkap</div>
                    </div>
                </div>
            </div>
        </div>         
        <section class="mt-3">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-lg-12 mb-3 show-on-mobile">
                        <div class="pb-3" style="border-bottom:2px #ddd solid;font-size:13px !important">
                        Saksikan tayangan-tayangan berkualitas dan menghibur favorit kamu mulai dari channel lokal hingga internasional tanpa hambatan!
                    </div>
                    </div>
                    <div class="col-lg-12 d-flex justify-content-center">
                        <div class="pe-2 mb-3">
                            <div class="mb-2 fw-bolder title-dropdown-channel" style="font-size:13px;">Tanggal</div>
                            <div class="dropdown ">
                                <button class="btn btn-secondary dropdown-toggle text-left btn-dropdown-channel"
                                    style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>

                                        <span style="font-weight:bold;">{{selectDate}}</span>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item"
                                                        style="color:#00539B !important;font-weight:400;font-size: 13px;"
                                                        v-for="context in listTanggal" href="javascript:void(0)"
                                                        @click="selectDate = context.trxdatetext; selectDateId = context.trxdate;getSchedule()">{{context.trxdatetext}}</a>
                                                </li>
                                </ul>
                            </div>
                        </div>
                        <div class="me-2 mb-3">
                            <div class="mb-2 fw-bolder title-dropdown-channel" style="font-size:13px;">Kategori</div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle text-left btn-dropdown-channel"
                                    style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>

                                        <span style="font-weight:bold;">{{selectCategory}}</span>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item"
                                                        style="color:#00539B !important;font-weight:400;font-size: 13px;"
                                                        v-for="context in listKategori" href="javascript:void(0)"
                                                        @click="selectCategory = context.category; selectCategoryId = context.id;getSchedule()">{{context.category}}</a>
                                                </li>
                                </ul>
                            </div>
                        </div>
                        <div class="me-2 mb-3">
                            <div class="mb-2 fw-bolder title-dropdown-channel" style="font-size:13px;">Channel</div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle text-left btn-dropdown-channel"
                                    style="padding: 5px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>

                                        <span style="font-weight:bold;">{{selectChannel}}</span>
                                    </span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item"
                                                        style="color:#00539B !important;font-weight:400;font-size: 13px;"
                                                        v-for="context in listChannel" href="javascript:void(0)"
                                                        @click="selectChannel = context.channel; selectChannelId = context.id;getSchedule()">{{context.channel}}</a>
                                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div class="mt-3 py-5 bg-section">
                <div class="container">
                    <img :src="imageKompetisi" class="mb-1 show-on-desktop" v-if="imageKompetisi" style="width:150px;">
                    <div class="d-flex justify-content-center">
                        <img :src="imageKompetisi" class="mb-1 show-on-mobile" v-if="imageKompetisi" style="width:150px;">
                    </div>
                    <div class="table-responsive mt-3">
                        <table class="table table-custom">
                            <thead>

                                <tr>
                                    <th class="text-center">Jam</th>
                                    <th class="text-center">Program Acara</th>
                                    <th class="text-center">Sinopsis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="a in resultKompetisi">
                                    <td class="text-center">{{ a.jam }}</td>
                                    <td class="text-center">{{a.program}}</td>
                                    <td class="text-center">{{a.sinopsis}}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import axios from "axios";
    import backgroundImageMobile from "~/assets/header/channel.png"
    import backgroundImageDesktop from "~/assets/header/channel.png"
    import logoNex from "~/public/bg-about-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"

    const config = useRuntimeConfig()

    const listTanggal = ref([]);
    const listKategori = ref([]);
    const listChannel = ref([]);
    

    const selectDate = ref('');
    const selectDateId = ref('');

    const selectCategory = ref('');
    const selectCategoryId = ref('');

    const selectChannel = ref('');
    const selectChannelId = ref('');

    const resultKompetisi = ref([]);
    const imageKompetisi = ref('');

    const {
        data
    } = await getSourceChannel()

    async function getSourceChannel() {        
        let res = await axios.get(config.public.API_URL + 'product/channelsource', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            listTanggal.value = res.data.data.channeldate
            listKategori.value = res.data.data.channelcategory
            listChannel.value = res.data.data.channel

            if(listTanggal.value.length){
                selectDateId.value = listTanggal.value[0].trxdate
                selectDate.value = listTanggal.value[0].trxdatetext
            }

            if(listKategori.value.length){
                selectCategoryId.value = listKategori.value[0].id
                selectCategory.value = listKategori.value[0].category
            }

            if(listChannel.value.length){
                selectChannelId.value = listChannel.value[0].id
                selectChannel.value = listChannel.value[0].channel
            }

           

            return res.data.data;
        }
    }

    onMounted(() => {
        if(selectCategoryId.value && selectChannelId.value && selectDateId.value){
                getSchedule()
            }
    });
    async function getSchedule() {
        resultKompetisi.value = []
        imageKompetisi.value = ''
        let res = await axios.get(config.public.API_URL + 'product/channelschedule', {
            params: {
                categoryid: selectCategoryId.value,
                trxdate: selectDateId.value,
                channelid: selectChannelId.value
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })

        if (res.status == 200) {
            resultKompetisi.value = res.data.data.list;
            imageKompetisi.value = res.data.data.imageurl;
        }
    }

    useHead({
        title: 'Channel | Nex',
        meta: [{
                name: 'title',
                content: 'Channel | Nex'
            },
            {
                name: 'ogTitle',
                content: 'Channel | Nex'
            },
             {
                name: 'keywords',
                content: 'siaran piala dunia, siaran tv liga inggris, siaran premier league, channel bola, channel anime'
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
    @media(max-width:991px){
        .btn-dropdown-channel{
            font-size:11px !important;
            padding:5px !important;            
        }
        .title-dropdown-channel{
            font-size:11px !important
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