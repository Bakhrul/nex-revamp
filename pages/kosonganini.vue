<template>
    <div>Kosongan</div>
</template>
<script setup>
import logoNex from "~/assets/logo-nex-2.png";
useHead({
        title: 'Update Data | Nex',
        meta: [{
                name: 'title',
                content: 'Update Data | Nex'
            },
            {
                name: 'ogTitle',
                content: 'Update Data | Nex'
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