<template>
    <div>
      <h4>Items</h4>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ItemList',
    props: ['categoryId'],
    data() {
      return {
        items: []
      };
    },
    mounted() {
      this.fetchItems();
    },
    methods: {
      async fetchItems() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/categories/${this.categoryId}/items`);
          this.items = response.data;
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  Front/src/components/MenusCRUD.vue