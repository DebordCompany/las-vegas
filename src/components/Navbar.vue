<script>
export default{
   data(){
    return{
        isActive: false,
        
    }
}
}


</script>
<template>
   <nav  class="nav" :class="{'activo_nav': isActive}" >
    <div class="nav_icono" @click="isActive=!isActive">
      <img src="img/menu.svg" alt="" />
    </div>
    
    <div  class="nav_enlaces" :class="{'activo': isActive}">
      <RouterLink  to="/">Inicio</RouterLink>
      <RouterLink  to="/reservas">Reservas</RouterLink>
      <RouterLink  to="/carta">Carta</RouterLink>
    </div>
  </nav>
</template>
<style scoped>
.nav {
  position: fixed;
  padding: 1rem;
  border-radius: .3em;
  box-shadow: 1px 1px 10px -6px black;
  background-color: tomato;
  bottom: 1.5em;
  right: 1.5em;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 0em;
}
.nav_icono {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_icono img {
  width: 30px;
}

.nav_enlaces {
  display: none;
  justify-content: center;
  align-items: center;
  hyphens: none;
  overflow: hidden;
  color: white;
  gap: 0;
  
}

.activo {
  display: flex;
  gap: 1em;
}
.activo_nav {
  
  gap: 3em;
}
</style>