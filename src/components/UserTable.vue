<!-- src/components/UserTable.vue -->
<template>
    <div>
      <input v-model="searchQuery" placeholder="Search users" />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id" @click="showUserDetails(user)">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.creationDate }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add the modal/popup component for user details -->
      <UserDetailsModal :user="selectedUser" @close="closeUserDetails" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { fetchUsers } from '../services/api';
  import UserDetailsModal from './UserDetailsModal.vue';
  
  export default {
    data() {
      return {
        searchQuery: '',
        selectedUser: null,
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user =>
          user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      showUserDetails(user) {
        this.selectedUser = user;
      },
      closeUserDetails() {
        this.selectedUser = null;
      },
    },
    setup() {
      const users = ref([]);
  
      onMounted(async () => {
        try {
          const response = await fetchUsers();
          users.value = response.data;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      });
  
      return { users };
    },
    components: {
      UserDetailsModal,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here using Tailwind CSS */
  table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

/* Style for search input */
input {
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
}

div {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
  </style>
  