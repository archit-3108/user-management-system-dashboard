<!-- src/components/AccountCreationForm.vue -->
<template>
    <div>
      <form @submit.prevent="submitForm" class="account-creation-form">
        <label for="create-username">Username:</label>
        <input type="text" id="create-username" v-model="username" required class="input-field" />
  
        <label for="create-password">Password:</label>
        <input type="password" id="create-password" v-model="password" required class="input-field" />
  
        <button type="submit" class="submit-button">Create Account</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          console.log('Creating account...');
  
          // Make an actual HTTP request using axios
          const response = await axios.post('/api/createAccount', {
            username: this.username,
            password: this.password,
          });
  
          console.log('Account created:', response.data);
        } catch (error) {
          console.error('Error creating account:', error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here using Tailwind CSS */
  .account-creation-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    box-sizing: border-box;
  }
  
  .submit-button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>
  