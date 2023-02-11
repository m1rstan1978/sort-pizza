import { createApp } from 'vue'
import App from '@/App'
import router from '@/router/index'
import VueClickAway from 'vue3-click-away'
import store from '@/store/index'

createApp( App )
.use( router )
.use( store )
.use( VueClickAway )
.mount( '#app' )
