<script setup></script>

<template>
  <header>
    <h1>CRUD</h1>
    <div>
      <router-link to="/people">People</router-link>
      <router-link to="/companies">Companies</router-link>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
/* Estilos gerais */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Estilos para o cabeçalho */
header {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  font-size: 28px;
  margin: 0;
}

header div {
  display: flex;
}

header div a {
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  user-select: none;
  text-align: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  height: 32px;
  color: rgb(255, 255, 255);
  background-color: rgb(35, 134, 54);
  box-shadow: transparent 0px 0px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: rgba(240, 246, 252, 0.1);
  text-decoration: none;
  padding: 0px 12px;
  gap: 8px;
  margin-right: 8px;
}

header div a:hover {
  background-color: rgba(35, 134, 54, 0.8);
}

/* Estilos para o conteúdo principal */
main {
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main p {
  font-size: 18px;
  line-height: 1.5;
}
</style>
