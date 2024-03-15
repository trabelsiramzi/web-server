<template>
    <div>
      <h2>Menus</h2>
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <router-link :to="'/menu/' + menu.id">{{ menu.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MenuList',
    data() {
      return {
        menus: []
      };
    },
    mounted() {
      this.fetchMenus();
    },
    methods: {
      async fetchMenus() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/menus`);
          this.menus = response.data;
        } catch (error) {
          console.error('Error fetching menus:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  