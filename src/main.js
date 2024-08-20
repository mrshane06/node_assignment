import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/css/style.css';
// import 'owl.carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import axios from 'axios';
// axios.get('https://example.com/api/data').then(response => {
//     console.log(response.data);
//   });

createApp(App).use(store).use(router).mount('#app')
