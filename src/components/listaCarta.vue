<template>
  <div class="lista" @click="isActive = !isActive">
    <div class="lista_items">
      <div class="lista_nombre">
        <div class="cross">
          <div class="bar" :class="{ animate: isActive }"></div>
        </div>

        {{ nombre }}
      </div>
      <div class="lista_precio">{{ precio }}</div>
    </div>
    <div
      v-if="isActive"
      :class="{ selected: isActive }"
      class="lista_descripcion"
    >
      {{ descripcion }}
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  props: ["nombre", "precio", "descripcion"],
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style scoped>
.lista_items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  position: relative;
}
.lista_nombre {
  max-width: 70%;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.selected {
  padding: var(--p-interno);
}
.cross{
 position: static;
}
.bar{
  position: relative;
  margin-right: 1em;
  width: 15px;
  height: 15px;
}
.bar::after{
  content: "";
  width: 15px;
  height: 3px;
  border-radius: .3em;
  background-color: var(--black);
  position: absolute;
  top: 6px;
}
.bar::before{
  content: "";
  width: 3px;
  height: 15px;
  background-color: var(--black);
  position: absolute;
  left: 6px;

}
.bar.animate::before{
  transform: rotate(90deg);
  transition: all .3s ease-in;
}
.bar.animate::after{
  transform: rotate(180deg);
  transition: all .3s ease-in;
}
</style>
