<!-- src/App.vue -->
<template>
  <div id="app">
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from './components/MainContainer.vue';

export default {
  components: {
    MainContainer,
  },
};
</script>

<style>
/* Add your global styling here using Tailwind CSS */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}
#app {
  max-width: 800px;
  margin: 40px auto;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
