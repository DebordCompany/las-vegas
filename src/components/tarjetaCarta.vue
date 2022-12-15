<template>
  <div class="tCarta">
    <div>
      <img :src="imagen"  class="tCarta_img" />
    </div>

    <div class="tCarta_texto">
      <h3  class="tCarta_h3" ></h3>
      <p class="tCarta_p">{{ descripcion }}</p>
      <p class="tCarta_p strong">{{ precio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imagen", "nombre", "descripcion", "precio"],
  
};
</script>
<style scoped>
.red{
  background-color: red;
}
.tCarta {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  aspect-ratio: 4/3;
}
.tCarta_img {
  border-radius: 0.3em;
  
}
.tCarta_h3 {
  font-size: 1.3em;
  font-weight: 700;
  padding-bottom: 0.5em;
  text-transform: uppercase;
}
.tCarta_p {
  font-size: 0.9em;
}
.strong{
  font-weight: 700;
  font-size: 1.3em;
  padding-top: .5em;
}
@media (min-width:768px) {
  
}
</style>
