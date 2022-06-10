<template>
  <div class="footer-basic">
    <footer>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Inicio</a></li>
        <li class="list-inline-item"><a href="#">Plataforma educativa</a></li>
        <li class="list-inline-item"><a href="#">Modelo educativo</a></li>
        <li class="list-inline-item"><a href="#">Carreras</a></li>        
      </ul>
      <p class="copyright mt-4">Instituto Tecnológico de Tepic</p>
      <img class="logo-cc mx-auto" src="../assets/imgs/Logo-horizontal-blanco.svg" alt="" srcset="">
      <p class="copyright centro-computo">Centro de Cómputo © 2022</p>
    </footer>
  </div>
</template>

<style scoped>
.footer-basic {
  padding: 40px 0;
  background-color: #292929;
  color: rgb(187, 187, 187);
  margin-top: 60px;
}

.footer-basic ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-basic li {
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 14px;
}

.footer-basic ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-basic ul a:hover {
  opacity: 1;
}

.footer-basic .copyright {  
  text-align: center;
  font-size: 14px;
  color: rgb(187, 187, 187);
  opacity: 0.8;
  margin-bottom: 0;
  text-transform: uppercase;
}

.logo-cc{
  width: 10%;
  display: flex;
  margin-bottom: -20px;
  opacity: 0.8;
}

@media(max-width:575px ){
  .logo-cc{
  width: 20%;
  margin-top: 10px;
  margin-bottom: -10px;
}
}
</style>
