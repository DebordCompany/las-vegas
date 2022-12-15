<script setup>
import tarjetaCarta from "../components/tarjetaCarta.vue";
import listaCarta from "../components/listaCarta.vue";
import PlatosDeAutor from "../datos/PlatosDeAutor.json";
import Ensaladas from "../datos/Ensaladas.json";
import Hamburguesas from "../datos/Hamburguesas.json";
import Raciones from "../datos/Raciones.json";
import Mar from "../datos/Mar.json"






</script>

<template>
  
  <div  class="max-width">
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
     
      </div>
      <div class="titulo_resto">
        <h4 class="titulo_resto_h4"> Nuestra carta completa </h4>
      </div>
      
      <div class="resto">
        <hr>
        <h5 class="titulos_carta">Platos de autor</h5>
        <hr>
        <listaCarta v-for="PlatosDeAutor in PlatosDeAutor" :key="PlatosDeAutor"
        :nombre="PlatosDeAutor.nombre"
        :precio="PlatosDeAutor.precio"
        :descripcion="PlatosDeAutor.descripcion"
        />
        <h5 class="titulos_carta">Ensaladas</h5>
        <hr>
        <listaCarta v-for="Ensaladas in Ensaladas" :key="Ensaladas"
        :nombre="Ensaladas.nombre"
        :precio="Ensaladas.precio"
        :descripcion="Ensaladas.descripcion"
        />
        <h5 class="titulos_carta">Hamburguesas</h5>
        <hr>
        <listaCarta v-for="Hamburguesas in Hamburguesas" :key="Hamburguesas"
        :nombre="Hamburguesas.nombre"
        :precio="Hamburguesas.precio"
        :descripcion="Hamburguesas.descripcion"
        />
        <h5 class="titulos_carta">Raciones</h5>
        <hr>
        <listaCarta v-for="Raciones in Raciones" :key="Raciones"
        :nombre="Raciones.nombre"
        :precio="Raciones.precio"
        :descripcion="Raciones.descripcion"
        />
        <h5 class="titulos_carta">Del mar</h5>
        <hr>
        <listaCarta v-for="Mar in Mar" :key="Mar"
        :nombre="Mar.nombre"
        :precio="Mar.precio"
        :descripcion="Mar.descripcion"
        />
        
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
  padding: var(--p-interno);
  font-size: 1.7em;
  font-weight: 600;
}
.carta_h2 {
  font-weight: 600;
  font-size: 1.5em;
  margin: 2em 0;
}
.carta_recomendaciones_p {
  padding: var(--p-interno);
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
  font-size: 1.5em;
  font-weight: 700;
  padding: var(--p-interno);
}
.titulos_carta{
  font-size: 1.5em;
  font-weight: 600;
  padding: var(--p-interno);
}
@media (min-width:768px) {
  .tarjetas{
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }
}
</style>
