<template>
  <div class="container pt-4">
    <div class="row text-center">
      <div class="col">
        <h1>Carreras</h1>
        <img
          src="../assets/imgs/carreras.png"
          class="img-fluid mb-5 d-none d-md-block"
        />
        <h3>Gestión empresarial</h3>
        <p class="text-start">
          La carrera de Ingeniería en Gestión Empresarial es una pieza
          fundamental en las áreas claves de las organizaciones, donde es
          indispensable contar con una formación científica, tecnológica y
          ética. Conviértete en uno de nuestros estudiantes, conscientes de las
          necesidades de una sociedad globalizada y comprometidos con la
          sociedad y su entorno.
          <br /><br />
          Si eres un entusiasta del emprendimiento, tienes interés en las
          ciencias económico-administrativas, cuentas con talento para la
          expresión, comunicación (tanto verbal como escrita), y disfrutas del
          trabajo en equipo, la plataforma de Educación a Distancia es el
          escenario ideal para el desarrollo de tus actividades de aprendizaje.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="btn-acordeon collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Objetivo
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Formar profesionales que contribuyan a la gestión de empresas e
                innovación de procesos; así como al diseño, implementación y
                desarrollo de sistemas estratégicos de negocios, optimizando
                recursos en un entorno global, con ética y responsabilidad
                social.
                <br /><br />
                El egresado aplicará habilidades directivas y de ingeniería en
                el diseño, gestión, fortalecimiento e innovación de las
                organizaciones para la toma de decisiones en forma efectiva, con
                una orientación sistémica y sustentable.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="btn-acordeon collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Convocatoria
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h4>Perfil de Ingreso:</h4>
                <ul>
                  <li>Actitud emprendedora.</li>
                  <li>
                    Habilidades de expresión y comunicación verbal, oral y
                    escrita./li>
                  </li>

                  <li>Conocimientos básicos en el uso de las TIC’s.</li>
                  <li>Habilidades de liderazgo.</li>
                  <li>Trabajo en equipo.</li>
                  <li>Enfrentar retos.</li>
                  <li>Habilidades en métodos de estudio.</li>
                  <li>
                    Interés hacia las asignaturas del área de ciencias
                    económico-administrativas.
                  </li>
                  <li>Actitud de respeto a la diversidad cultural.</li>
                  <li>Conciencia ecológica.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
img {
  border-radius: 20px;
  width: 100%;
}

.btn-acordeon {
  background-color: #1b396a;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  text-align: left;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
}

.btn-acordeon:after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("../assets/imgs/arrow-right.png");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transform: rotate(90deg);
}

.btn-acordeon:not(.collapsed)::after {
  background-image: url("../assets/imgs/arrow-right.png");
  transform: rotate(-90deg);
}
</style>
