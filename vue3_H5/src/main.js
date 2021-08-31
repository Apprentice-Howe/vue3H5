import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store";
import Vant from 'vant'
import axios from "./vab/http/index";

import 'vant/lib/index.css'
import './style/index.scss'

import { setCommonComponent } from "./view/common";

const app = createApp(App)

app.config.globalProperties.$http = axios

app.use(router)
app.use(store)
app.use(Vant)

setCommonComponent(app)

app.mount('#app')
