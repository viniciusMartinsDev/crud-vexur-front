<script setup>
import ContentComponent from "./components/ContentComponent.vue";
</script>

<template>
  <header>
    <h1>CRUD</h1>
  </header>
  <main>
    <ContentComponent />
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
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  font-size: 28px;
  margin: 0;
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
