import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/UI/Navbar.vue'
import BotonPrimario from './components/UI/BotonPrimario.vue'


const app = createApp(App)

app.use(router);

app.component("Navbar", Navbar);
app.component("boton-primario", BotonPrimario);

app.mount('#app')
