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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor
          tortor, pharetra ut imperdiet quis, condimentum non massa. Sed luctus
          arcu lorem. Duis ut tellus quis augue euismod bibendum. Integer sit
          amet enim eu diam finibus elementum. Nulla facilisi. Phasellus a mi
          volutpat, posuere metus ut, molestie mi. Duis et nisl sollicitudin,
          efficitur nisl nec, fringilla leo. Proin et vestibulum ligula. Nullam
          nec tincidunt dui. Praesent ac lorem interdum, bibendum erat ut,
          mattis nisi. Donec sit amet sem eu est accumsan porta sit amet vitae
          enim. Aenean eget suscipit risus, vel dictum est. Sed sed tempor urna,
          sed dignissim nibh.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                iaculis lobortis lectus, quis porta urna ullamcorper et. Nullam
                at porttitor dolor. Mauris molestie in turpis vitae imperdiet.
                Pellentesque tellus nisi, volutpat vitae elit at, viverra
                condimentum mi. Nunc interdum nunc sit amet metus sagittis,
                bibendum vulputate augue accumsan. Vestibulum lacinia.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                iaculis lobortis lectus, quis porta urna ullamcorper et. Nullam
                at porttitor dolor. Mauris molestie in turpis vitae imperdiet.
                Pellentesque tellus nisi, volutpat vitae elit at, viverra
                condimentum mi. Nunc interdum nunc sit amet metus sagittis,
                bibendum vulputate augue accumsan. Vestibulum lacinia.
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
