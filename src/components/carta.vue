<script setup>
import tarjetaCarta from "../components/tarjetaCarta.vue";
import listaCarta from "../components/listaCarta.vue";
import es from "../languajes/es.json"


const isActive= true
const hasError= false


function myFunc(){
  console.log("HoLAAAAAAAA")
}
</script>

<template>
  
  <div @click="myFunc" class="max-width">
    <div class="carta content_center">
      <h1 class="carta_h1">Esta es nuestra carta</h1>
      <div class="carta_recomendaciones">
        <p class="carta_recomendaciones_p">
          Algunas recomendaciones antes de leer la carta
        </p>
        <ul class="carta_recomendaciones_ul">
          <li class="carta_recomendaciones_li">
            - El indice de <strong>alergenos</strong> esta al final
          </li>
          <li class="carta_recomendaciones_li">
            - Sí es <strong>viernes</strong> no dudes en preguntar si hay algo
            fuera de la carta
          </li>
          <li class="carta_recomendaciones_li">
            - Los <strong>platos de autor</strong> son
            <strong>nuestra especialidad</strong>
          </li>
          <li class="carta_recomendaciones_li">
            - No te cortes en <strong>probar cosas nuevas</strong> , si no lo
            haces no sabras si te gustan
          </li>
        </ul>
      </div>
      <h2 class="carta_h2">Platos de Autor</h2>
      <div class="tarjetas">
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
        <tarjetaCarta
        :imagen="'./oreja_1.jpg'"
        nombre="oreja a la pekinesa"
        descripcion="Deliciosa oreja de cerdo enharinada, frita y acompañada de salsa Hoisin y cebolleta picada"
        precio="9,50€"
        ></tarjetaCarta>
      </div>
      <div class="titulo_resto">
        <h4 class="titulo_resto_h4"> {{es.name}}</h4>
      </div>
      <CompTest pathUrl="reservas" />
      <div class="resto">
        <hr>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
        <listaCarta
        nombre="Sepia a la plancha"
        precio="13,50€"
        ></listaCarta>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.content_center {
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
}

.carta_h1 {
  padding: 1em 0;
  font-size: 1.7em;
  font-weight: 600;
}
.carta_h2 {
  font-weight: 600;
  font-size: 1.5em;
  margin: 2em 0;
}
.carta_recomendaciones_p {
  padding: 1em 0;
  font-weight: 600;
}
.carta_recomendaciones_ul {
  padding: 1em;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: 1px solid var(--black);
  border-radius: 0.3em;
}
.tarjetas{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
}
.titulo_resto_h4{
  font-size: 2em;
  font-weight: 700;
  padding: 1em 0;
}
@media (min-width:768px) {
  .tarjetas{
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }
}
</style>
