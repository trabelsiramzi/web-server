import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue';
import router from './router'; // Import Vue Router configuration
import 'bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App);

app.use(router) // Use the router plugin
   .mount('#app');
