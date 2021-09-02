import { createApp } from 'vue'
import App from './App.vue'
import routes from "./route/index"

const app = createApp(App);
// app.$router = routes
app.use(routes);
app.mount('#app');
