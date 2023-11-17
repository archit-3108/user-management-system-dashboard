<!-- src/components/MainContainer.vue -->

<template>
    <div>
      <UserTabs :tabs="tabs" @tab-change="handleTabChange" />
      <div v-if="activeTab === 'user-details'">
        <UserTable />
      </div>
      <div v-else-if="activeTab === 'account-creation'">
        <AccountCreationForm />
      </div>
    </div>
  </template>
  
  <script>
  import UserTable from './UserTable.vue';
  import AccountCreationForm from './AccountCreationForm.vue';
  import UserTabs from './UserTabs.vue';
  
  export default {
    components: {
      UserTable,
      AccountCreationForm,
      UserTabs,
    },
    data() {
      return {
        tabs: [
      { id: 'user-details', name: 'User Details' },
      { id: 'account-creation', name: 'Account Creation' },
    ], // Make sure you have a valid tabs data
        activeTab: 'user-details',
      };
    },
    methods: {
      handleTabChange(tab) {
        this.activeTab = tab;
      },
    },
  };
  </script>
  