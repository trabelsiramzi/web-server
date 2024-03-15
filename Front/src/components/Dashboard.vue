<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectSection('categories')">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectSection('items')">Items</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectSection('menus')">Menus</a>
            </li>
          </ul>
          <a href="#" class="btn btn-link" @click="disconnect">Disconnect</a>
        </div>
      </div>
    </nav>

    <main>
      <component :is="selectedSectionComponent"></component>
    </main>
  </div>
</template>

<script>
import CategoriesCRUD from './CategoriesCRUD.vue'; // Import the CRUD component for categories
import ItemsCRUD from './ItemsCRUD.vue'; // Import the CRUD component for items
import MenusCRUD from './MenusCRUD.vue'; // Import the CRUD component for menus

export default {
  name: 'DashboardPage',
  components: {
    CategoriesCRUD,
    ItemsCRUD,
    MenusCRUD
  },
  data() {
    return {
      selectedSection: 'categories'
    };
  },
  computed: {
    selectedSectionComponent() {
      return `${this.selectedSection.charAt(0).toUpperCase()}${this.selectedSection.slice(1)}CRUD`;
    }
  },
  methods: {
    selectSection(section) {
      this.selectedSection = section;
    },
    disconnect() {
      // Implement your logic to disconnect the user here
      // For example, you can clear the token from local storage and redirect to the login page
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/login'); // Redirect to the login page
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
main {
  margin-top: 20px;
}
</style>
