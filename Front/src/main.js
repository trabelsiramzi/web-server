import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue';
import router from './router'; // Import Vue Router configuration

createApp(App)
  .use(router) // Use the router plugin
  .mount('#app');
