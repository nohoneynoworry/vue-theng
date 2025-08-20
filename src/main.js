import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            user: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting',
            productTitle: 'Welcome to our project',
            fileView:'File List'
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            productTitle: 'សូមស្វាគមន៍មកកាន់គម្រោងរបស់យើង',
            fileView:'បញ្ជីឯកសារ'
        }
    }
}
)
// Optional third-party libraries
import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;

const app = createApp(App)
app.use(router)
app.use(i18n)


app.mount('#app')
import("preline/dist/index.js");
