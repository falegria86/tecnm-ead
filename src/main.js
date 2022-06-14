import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/UI/Navbar.vue'
import BotonSecundario from './components/UI/BotonSecundario.vue'
import Footer from './components/Footer.vue'
import BotonPrimario from './components/UI/BotonPrimario.vue'
import Header from './components/UI/Header.vue'
import NavLink from './components/UI/NavLink.vue'


const app = createApp(App)

app.use(router);

app.component("Navbar", Navbar);
app.component("boton-primario", BotonPrimario);
app.component("Footer", Footer);
app.component("boton-secundario", BotonSecundario);
app.component("Header", Header);
app.component("NavLink", NavLink);

app.mount('#app')