<template>
    <div>
        <Navbar></Navbar>
        <div class="show-on-mobile">
            <div class="d-flex align-items-center"
                :style="`background-image:url('${backgroundImageMobile}');background-size:100% 100%;width:100%;position:relative;`">
                <img :src="backgroundImageMobile" class="w-100" style="visibility: hidden;" />
                <div class="d-flex align-items-center" style="position:absolute;left:0;top:0;width:100%;height:100%;">
                    <div class="container" style="padding:15px 15px">
                        <h6 class="text-white fw-bold">Reseller</h6>
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
                        <h1 class="text-white fw-bold">Reseller</h1>
                        <div class="text-white">Temukan Nex di kotamu!</div>
                    </div>
                </div>
            </div>
        </div>           
        <section class="mt-3">

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-3">
                        <div class="dropdown">
                            <button class="btn btn-secondary  btn-dropdown-city dropdown-toggle text-left" @click="searchCity = ''"
                                style="padding: 10px 15px;color:#00539B !important;border:1px #00539B solid;background:#fff"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>

                                    <span style="font-weight:500;">{{selectCity}}</span>
                                </span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-city" style="max-height:300px;overflow: auto;">
                                <li style="padding:15px"><input type="text" class="form-control"  v-model="searchCity" placeholder="Search"></li>
                                <li><a class="dropdown-item"
                                        style="color:#00539B !important;font-weight:400;font-size: 15px;" href="javascript:void(0)"
                                        @click="search = '';currentPage = 1; totalData = 0;selectCity = 'Semua'; selectCityId = '0';getList()">Semua</a>
                                </li>
                                <li><a class="dropdown-item"
                                        style="color:#00539B !important;font-weight:400;font-size: 15px;"
                                        v-for="context in getQueryCity()" href="javascript:void(0)"
                                        @click="search = '';currentPage = 1; totalData = 0;selectCity = context.city; selectCityId = context.id;getList()">{{context.city}}</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-lg-6 mb-3 d-flex justify-content-end align-items-center show-on-desktop">
                        <div class="d-flex form-nav" role="search" style="border:1px #ddd solid">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.7325 23.513L15.4268 16.2073C14.8435 16.7043 14.1727 17.089 13.4143 17.3612C12.656 17.6334 11.8938 17.7695 11.1277 17.7695C9.25944 17.7695 7.67821 17.1228 6.38399 15.8293C5.08977 14.5359 4.44266 12.9551 4.44266 11.0868C4.44266 9.21862 5.08899 7.63701 6.38166 6.34201C7.67432 5.04701 9.25477 4.39873 11.123 4.39717C12.9912 4.39562 14.5732 5.04273 15.869 6.33851C17.1648 7.63428 17.8127 9.2159 17.8127 11.0833C17.8127 11.8938 17.6692 12.6782 17.3822 13.4365C17.0952 14.1948 16.7179 14.8435 16.2505 15.3825L23.5562 22.687L22.7325 23.513ZM11.1288 16.6017C12.6766 16.6017 13.9833 16.0689 15.0488 15.0033C16.1144 13.9378 16.6472 12.6307 16.6472 11.0822C16.6472 9.53362 16.1144 8.22695 15.0488 7.16217C13.9833 6.0974 12.6766 5.56462 11.1288 5.56384C9.58105 5.56306 8.27399 6.09584 7.20766 7.16217C6.14132 8.22851 5.60855 9.53517 5.60932 11.0822C5.6101 12.6292 6.14288 13.9358 7.20766 15.0022C8.27243 16.0685 9.5791 16.6013 11.1277 16.6005"
                                    fill="#00539B" />
                            </svg>&ensp;

                            <input class="form-control" type="search" style="outline:none !important;border:0 !important;"
                                v-model="search" @keyup.enter="selectCity = 'Semua'; selectCityId = '0';currentPage = 1; totalData = 0;getList()" placeholder="Search">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 bg-section pt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mt-3 mb-3" v-for="a in result">
                            <div class="card" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);height:100%;">
                                <div class="card-body">
                                    <div class="fs-5 c-primary fw-bolder pb-2" style="border-bottom: 2px #ddd solid;">
                                        {{ a.dealer }}</div>
                                    <a target="_blank" class="link-dealer" :href="a.locationurl">
                                        <div class="d-flex align-items-center mt-3">
                                            <div class="me-2"><i style="font-size:20px" class="bi bi-geo-alt-fill"></i>

                                            </div>
                                            <div>{{a.address}}</div>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center mt-3">
                                        <div class="me-2">
                                           
<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7046 19.6634L20.5889 19.3077C19.8406 19.2218 19.1046 19.4794 18.5772 20.0069L16.3201 22.2639C12.8486 20.4975 10.0028 17.6639 8.23636 14.1802L10.5057 11.9109C11.0332 11.3834 11.2908 10.6474 11.2049 9.89912L10.8492 6.80792C10.702 5.56899 9.6593 4.63672 8.4081 4.63672H6.28596C4.89983 4.63672 3.74676 5.78979 3.83263 7.17592C4.48276 17.6517 12.8609 26.0175 23.3244 26.6677C24.7105 26.7535 25.8636 25.6005 25.8636 24.2143V22.0922C25.8758 20.8533 24.9436 19.8106 23.7046 19.6634Z" fill="black"/>
</svg>


                                        </div>
                                        <div>{{ a.phone }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mt-5 justify-content-center align-items-center pb-5 pagination">
                    <button class="mb-3" @click="changePage(currentPage - 1)" :disabled="currentPage <= 1 || totalData == 0"><i
                            class="bi bi-chevron-left" style="font-size:32px;color:#00529C !important"></i></button>
                    <div class="d-flex flex-wrap justify-content-center align-items-center">
                        <button @click="changePage(page.name)" v-for="page in listPage()" :key="page.name"
                            class="mx-2 mb-3" style="width:18px;height:18px;border-radius: 100px;"
                            :style="page.name == currentPage ? 'background:#00529C !important;' : 'background:#D5E0E9 !important;'"></button>
                    </div>
                    <button class="mb-3" @click="changePage(currentPage + 1)"
                        :disabled="currentPage >= totalPage() || totalData == 0"><i class="bi bi-chevron-right"
                            style="font-size:32px;color:#00529C !important"></i></button>
                </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script setup>
    import backgroundImageMobile from "~/assets/header/reseller-mobile.png"
    import backgroundImageDesktop from "~/assets/header/reseller-desktop.png"
    import logoNex from "~/assets/logo-nex-2.png";
    import Navbar from "~/components/Navbar.vue"
    import Footer from "~/components/Footer.vue"
    import axios from "axios";
    const config = useRuntimeConfig()

    const listCity = ref([]);
    const selectCity = ref('Semua');
    const selectCityId = ref('0');

    const search = ref('');
    const searchCity = ref('');

    const result = ref([]);

    const currentPage = ref(1);
    const totalData = ref(0);
    const perPage = ref(15)
    const {
        data
    } = await getSourceCity()

    async function getSourceCity() {
        let res = await axios.get(config.public.API_URL + 'about/cityreseller', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            listCity.value = res.data.data.list;
            return res.data.data;
        }
    }

    onMounted(() => {

        getList()

    });

    async function getList() {
        result.value = [];
        let res = await axios.get(config.public.API_URL + 'about/reseller', {
            params: {
                cityid: selectCityId.value,
                search: search.value,
                length:perPage.value,
                page: currentPage.value,
            },
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            result.value = res.data.data.list;
            totalData.value = Number(res.data.data.total_data)
            return res.data.data;
        }
    }

    function getQueryCity(){
        if(searchCity.value){
            return listCity.value.filter((e) => e.city.toLowerCase().includes(searchCity.value.toLowerCase()))
        }else{
            return listCity.value
        }
    }

    useHead({
        title: 'Reseller | Nex Parabola',
        meta: [{
                name: 'title',
                content: 'Reseller | Nex Parabola'
            },
            {
                name: 'ogTitle',
                content: 'Reseller | Nex Parabola'
            },      
            {
                name: 'keywords',
                content: 'official store nex parabola'
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

    function totalPage() {
        return Math.ceil(Number(totalData.value) / Number(perPage.value));
    }

    function startPage() {
        if (currentPage.value == 1) {
            return 1;
        }

        if (currentPage.value == totalPage()) {
            return totalPage() - (5 - 1);
        }

        return Number(currentPage.value) - 1;
    }

    function listPage() {

        const range = [];

        for (let x = 0; x <= totalPage(); x++) {
            if (x > 0) {
                range.push({
                    name: x,
                    isDisabled: x === Number(currentPage.value)
                });
            }
        }

        // for (let x = startPage(); x <= Math.min(startPage() + 5 - 1, totalPage()); x++) {
        //     if (x > 0) {
        //         range.push({
        //             name: x,
        //             isDisabled: x === Number(currentPage.value)
        //         });
        //     }
        // }


        // if (range.length == 3 && (Number(currentPage.value) + 1) == totalPage()) {
        //     if (range[0].name - 1 > 0) {
        //         range.unshift({
        //             name: range[0].name - 1,
        //             isDisabled: false,
        //         })
        //     }
        // }

        // if (range.length == 4 && (Number(currentPage.value) + 1) == totalPage() || (Number(currentPage.value) + 2) ==
        //     totalPage()) {
        //     if (range[0].name - 1 > 0) {
        //         range.unshift({
        //             name: range[0].name - 1,
        //             isDisabled: false,
        //         })
        //     }
        // }

        return range;
    }

    function changePage(page) {
        currentPage.value = page
        getList()
    }
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

    @media(max-width:991px){
        .btn-dropdown-city{
            width: 100% !important;
            max-width: 100% !important;
        }
        .dropdown-menu-city{
            width:100%;
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