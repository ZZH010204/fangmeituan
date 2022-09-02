import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import {Button, button} from 'vant';

const app = createApp(App);
app.use(Button)
app.mount('#app')
