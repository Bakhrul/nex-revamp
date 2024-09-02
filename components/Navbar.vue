<template>
    <div class="hide-on-mobile"
        :style="`background:linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)),url('${backgroundHeaderNav}');background-size: cover;background-repeat:no-repeat;width:100%;z-index:9999`">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <router-link to="/">
                    <img src="~/assets/logo-nex.png" class="mb-3 mt-3" style="width:130px" />
                </router-link>
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
    </div>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container">
            <div class="justify-content-between align-items-center w-100 py-2 show-nav-mobile">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" @click="toggleNav()"
                    style="border:0 !important;outline:none !important;padding:0 !important;box-shadow:unset !important;"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <svg v-if="showNav" width="33" height="33" viewBox="0 0 33 33" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 24.75L24.6675 8.25M24.75 24.75L8.3325 8.25" stroke="#2A5D9E"
                            stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg v-if="!showNav" width="33" height="33" viewBox="0 0 33 33" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1911_2447)">
                            <g clip-path="url(#clip1_1911_2447)">
                                <path
                                    d="M5.5 24.75H27.5C28.2563 24.75 28.875 24.1313 28.875 23.375C28.875 22.6187 28.2563 22 27.5 22H5.5C4.74375 22 4.125 22.6187 4.125 23.375C4.125 24.1313 4.74375 24.75 5.5 24.75ZM5.5 17.875H27.5C28.2563 17.875 28.875 17.2563 28.875 16.5C28.875 15.7438 28.2563 15.125 27.5 15.125H5.5C4.74375 15.125 4.125 15.7438 4.125 16.5C4.125 17.2563 4.74375 17.875 5.5 17.875ZM4.125 9.625C4.125 10.3812 4.74375 11 5.5 11H27.5C28.2563 11 28.875 10.3812 28.875 9.625C28.875 8.86875 28.2563 8.25 27.5 8.25H5.5C4.74375 8.25 4.125 8.86875 4.125 9.625Z"
                                    fill="#2A5D9E" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1911_2447">
                                <rect width="33" height="33" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1911_2447">
                                <rect width="33" height="33" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
                <router-link to="/">
                    <img src="~/assets/logo-nex.png" style="width:80px" />
                </router-link>
                <button class="btn btn-sm" style="padding:0 !important;"><svg width="30" height="31" viewBox="0 0 30 31"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.375 18H18.3875L18.0375 17.6625C19.3048 16.1925 20.0014 14.3159 20 12.375C20 10.768 19.5235 9.19714 18.6307 7.861C17.7379 6.52485 16.469 5.48344 14.9843 4.86848C13.4997 4.25352 11.866 4.09262 10.2899 4.40612C8.7138 4.71963 7.26606 5.49346 6.12976 6.62976C4.99346 7.76606 4.21963 9.2138 3.90612 10.7899C3.59262 12.366 3.75352 13.9997 4.36848 15.4843C4.98344 16.969 6.02485 18.2379 7.361 19.1307C8.69714 20.0235 10.268 20.5 11.875 20.5C13.8875 20.5 15.7375 19.7625 17.1625 18.5375L17.5 18.8875V19.875L23.75 26.1125L25.6125 24.25L19.375 18ZM11.875 18C8.7625 18 6.25 15.4875 6.25 12.375C6.25 9.2625 8.7625 6.75 11.875 6.75C14.9875 6.75 17.5 9.2625 17.5 12.375C17.5 15.4875 14.9875 18 11.875 18Z"
                            fill="#2A5D9E" />
                    </svg>

                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                    <li class="nav-item show-on-mobile">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item nav-item-spesial-deals">
                        <router-link to="/special-deals" class="nav-link">
                            <img src="~/assets/special-deals.png" class="show-on-desktop" style="width:65px" />
                            <span class="show-on-mobile">Spesial Deals</span>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown"
                            id="btn-dropdown-nav-special-deals" aria-expanded="false">
                            Produk &ensp;
                            <i class="icon bi bi-chevron-down icon-dropdown"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <nuxt-link class="dropdown-item" to="/receiver">Receiver</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="dropdown-item" to="/paket">
                                    Paket</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="dropdown-item" to="/channel"> Channel</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown"
                            id="btn-dropdown-nav-special-deals" aria-expanded="false">
                            Official Store &ensp;
                            <i class="icon bi bi-chevron-down icon-dropdown"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- <li>
                                <nuxt-link class="dropdown-item" to="/receiver">Tokopedia</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="dropdown-item" to="/paket">
                                    Bukalapak</nuxt-link>
                            </li> -->
                            <li>
                                <a href="https://www.lazada.co.id/shop/nex-parabola-tv/" class="dropdown-item"
                                    to="/channel"> Lazada</a>
                            </li>
                            <!-- <li>
                                <nuxt-link class="dropdown-item" to="/channel"> Tiktok Shop</nuxt-link>
                            </li> -->
                            <li>
                                <a href="https://shopee.co.id/nexparabola.official" class="dropdown-item" to="/channel">
                                    Shopee</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown"
                            id="btn-dropdown-nav-special-deals" aria-expanded="false">
                            Nex News &ensp;
                            <i class="icon bi bi-chevron-down icon-dropdown"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="context in listCategory">
                                <nuxt-link class="dropdown-item" :to="`/news?id=${context.id}`">{{context.category}}</nuxt-link>
                            </li>                           
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            About&ensp;<i class="icon bi bi-chevron-down icon-dropdown"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <nuxt-link to="/about/tentang-kami" class="dropdown-item">
                                    About NEX
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about/faq" class="dropdown-item">
                                    FAQ</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about/reseller" class="dropdown-item">
                                    Reseller</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about/teknisi" class="dropdown-item">
                                    Teknisi</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about/term-of-use" class="dropdown-item">
                                    Term of Use</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
    import backgroundHeaderNav from "~/assets/bg-header.png"
    import axios from "axios";
    const config = useRuntimeConfig()
    const showNav = ref(false);

    const listCategory = ref([])   

    onMounted(() => {
        getCategory()

    });
    async function getCategory() {
        let res = await axios.get(config.public.API_URL + 'news/newscategory', {
            headers: {
                'WEBCORP-APIKEY': config.public.API_KEY
            }
        })
        if (res.status == 200) {
            listCategory.value = res.data.data.list;

            return res.data.data;
        }
    }

    onBeforeRouteLeave((to, from, next) => {
        if ($(".modal")) {
            $(".modal").modal('hide');
        }

        next()
    })

    function toggleNav() {
        setTimeout(() => {
            if ($("#navbarSupportedContent").hasClass('show')) {
                console.log('show');
                showNav.value = true;
            } else {
                console.log('hide');
                showNav.value = false;
            }
        }, 400);

    }
</script>