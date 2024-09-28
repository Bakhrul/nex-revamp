import axios from "axios"
export default defineNuxtPlugin(nuxtApp => {   
    const runtimeConfig = useRuntimeConfig()
    return {
      provide: {
        ctaBanner: (id: any, ecommerce: any) => {            
            let params = {
                ecommerce: ecommerce ? ecommerce : '',
                id: id
            }            
            let data = JSON.stringify(params);
            axios.post(runtimeConfig.public.API_URL + 'home/ctatopbanner', data, {
                headers: {
                    'WEBCORP-APIKEY': runtimeConfig.public.API_KEY
                }
            })
        },
        ctaReceiver: (id: any, ecommerce: any) => {
            let params = {
                ecommerce: ecommerce ? ecommerce : '',
                id: id
            }            
            let data = JSON.stringify(params);
            axios.post(runtimeConfig.public.API_URL + 'product/ctareceiver', data, {
                headers: {
                    'WEBCORP-APIKEY': runtimeConfig.public.API_KEY
                }
            })
        },
        ctaSpecialDeals: (id: any, ecommerce: any) => {
            let params = {
                ecommerce: ecommerce ? ecommerce : '',
                id: id
            }            
            let data = JSON.stringify(params);
            axios.post(runtimeConfig.public.API_URL + 'home/ctaspecialdeals', data, {
                headers: {
                    'WEBCORP-APIKEY': runtimeConfig.public.API_KEY
                }
            })
        },
        ctaPacket: (id: any, ecommerce: any) => {
            let params = {
                ecommerce: ecommerce ? ecommerce : '',
                id: id
            }            
            let data = JSON.stringify(params);
            axios.post(runtimeConfig.public.API_URL + 'paket/ctapaket', data, {
                headers: {
                    'WEBCORP-APIKEY': runtimeConfig.public.API_KEY
                }
            })
        }
      }
    }
  })