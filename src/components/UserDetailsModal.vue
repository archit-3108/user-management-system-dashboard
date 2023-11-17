<!-- src/components/UserDetailsModal.vue -->
<template>
    <div v-if="user">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <button @click="closeModal">Close</button>
        <h2>User Details</h2>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Creation Date:</strong> {{ user.creationDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here using Tailwind CSS */
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1001;
}
  </style>
  