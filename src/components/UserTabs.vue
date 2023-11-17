<!-- src/components/UserTabs.vue -->

<template>
  <div>
    <div v-for="tab in tabs" :key="tab.id" @click="setActiveTab(tab)">
      {{ tab.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabs'],
  methods: {
    setActiveTab(tab) {
      this.$emit('tab-change', tab.id); // Emit an event to notify MainContainer of tab change
    },
  },
};
</script>


<style scoped>
/* Add your styling here using Tailwind CSS */
.active-tab {
  /* Add styles for the active tab */
  font-weight: bold;
}
div {
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  padding: 10px;
}

div div {
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
