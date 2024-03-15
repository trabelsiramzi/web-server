<template>
    <div>
      <h3>Categories</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="'/menu/' + menuId + '/category/' + category.id">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CategoryList',
    props: ['menuId'],
    data() {
      return {
        categories: []
      };
    },
    mounted() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/menus/${this.menuId}/categories`);
          this.categories = response.data;
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  