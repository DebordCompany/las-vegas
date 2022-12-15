<template>
  <div class="container_item">
      <img class="container_item_img" :src="imagen" alt="" />
      <h3 class="container_item_h3">{{titulo}}</h3>
      <p  class="container_p">{{descripcion}}</p>
      <h4  class="container_h4">{{precio}}</h4>
    </div>
</template>
<script>
export default {
  props:["imagen", "titulo", "descripcion", "precio"]
}
</script>
<style scoped>

.container_item_h3{
  font-weight: 700;
  
  
}
.container_item_img {
  margin: 1em 0;
  aspect-ratio: 1/1;
  box-shadow: 1px 1px 10px -3px var(--black);
  border-radius:.3em ;
}
.container_p{
  margin-top: .3em;
  
}
.container_h4{
  font-weight: 700;
  padding-top: 1em;
}


</style>
