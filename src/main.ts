import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/router';
import SvgIcon from '@icon/index.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.component('svg-icon', SvgIcon);
app.mount('#app');
