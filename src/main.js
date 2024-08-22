import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/css/style.css';


createApp(App).use(store).use(router).mount('#app');
<script src="https://kit.fontawesome.com/your-kit-id.js"></script>