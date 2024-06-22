import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from '@coreui/bootstrap-vue'

createApp(App)
.use(bootstrap)
.use(BootstrapVue)
.use(store).mount('#app')
