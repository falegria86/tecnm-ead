<template>
  <div class="container">
    <div class="row d-block d-lg-flex">
      <div class="col-12 col-lg-5 blue-container text-white text-center">
        <div class="text-box">
          <h3>¿Tienes dudas?</h3>
          <p>
            Puedes ponerte en contacto con nosotros a través del siguiente
            correo electrónico:
          </p>
          <div class="d-flex email">
            <i class="fa-solid fa-envelope me-2 mt-1"></i>
            <p>eadistancia@tepic.tecnm.mx</p>
          </div>
        </div>
      </div>
      <div class="col white-container py-5 py-lg-0">
        <div class="logo-box mx-auto mt-0 mt-lg-4">
          <img src="../assets/imgs/logos-dark.png" class="img-fluid" />
        </div>
        <div class="inputs-box mt-5">
          <div class="data-box d-sm-flex">
            <div class="inputs mx-3">
              <h5>Nombre(s)</h5>
              <input type="text" />
            </div>
            <div class="inputs mx-3 mt-4 mt-sm-0">
              <h5>Apellidos</h5>
              <input type="text" />
            </div>
          </div>
          <div class="data-box d-sm-flex mt-sm-5">
            <div class="inputs mx-3 mt-4 mt-sm-0">
              <h5>Correo electrónico</h5>
              <input type="text" />
            </div>
            <div class="inputs mx-3 mt-4 mt-sm-0">
              <h5>Número de teléfono</h5>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="mx-3 mt-5">
          <div class="inputs">
            <h5 class="fw-bold">Mensaje</h5>
            <h5 class="mensaje">Escribe tu mensaje...</h5>
            <input type="text" />
          </div>
        </div>
        <boton-secundario class="mt-5 mx-auto">Enviar</boton-secundario>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blue-container {
  background-color: #1b396a;
  height: 560px;
  position: relative;
  border-radius: 20px 0 0 20px;
  box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.text-box {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.email {
  justify-content: center;
}
.white-container {
  background-color: #fff;
  box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 0 20px 20px 0;
}

.logo-box {
  width: 50%;
}

input {
  border: none;
  border-bottom: 1px solid #1b396a;
  /* box-shadow: 0 0.5px 0 #1b396a; */
  width: 100%;
}

input:focus {
  outline: none;
}
.inputs-box {
}

.inputs {
  width: 100%;
}

.data-box {
  justify-content: space-evenly;
}

.mensaje {
  color: #989898;
}

@media (max-width: 991px) {
  .blue-container {
    height: 200px;
    border-radius: 20px 20px 0 0;
  }

  .white-container {  
  border-radius: 0 0 20px 20px;
}
}

@media(max-width: 575px){
    input{
        width: 90%;
    }
}
</style>
