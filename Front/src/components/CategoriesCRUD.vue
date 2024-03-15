<template>
  <div>
    <h1>Categories CRUD Component</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Display categories in a bordered table -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Category Name</th>
            <th scope="col">Menu</th>
            <th scope="col" style="width: 150px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>{{ getMenuName(category.MenuId) }}</td>
            <td>
              <button class="btn btn-sm btn-primary me-2" @click="editCategory(category)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteCategory(category.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add button for showing the form -->
      <div class="text-center mt-3">
        <button class="btn btn-sm btn-primary" @click="toggleForm">Add Category</button>
      </div>

      <!-- Form for adding or editing category -->
      <form @submit.prevent="submitForm" v-show="showForm" class="form-container">
        <div class="mb-3">
          <input type="text" class="form-control" v-model="formData.name" placeholder="Category Name">
        </div>
        <div class="mb-3">
          <select class="form-select" v-model="formData.MenuId" aria-label="Menu">
            <option disabled value="">Select Menu</option>
            <option v-for="menu in menus" :key="menu.id" :value="menu.id">{{ menu.name }}</option>
          </select>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-sm btn-success">{{ editing ? 'Update' : 'Add' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CategoriesCRUD',
  data() {
    return {
      categories: [],
      formData: {
        name: '',
        MenuId: null
      },
      editing: false,
      loading: false,
      menus: [],
      showForm: false
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchMenus();
  },
  methods: {
    async fetchCategories() {
      this.loading = true;
      try {
        const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/categories`);
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchMenus() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/menus`);
        this.menus = response.data;
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    },
    async submitForm() {
      try {
        if (this.editing) {
          await axios.put(`${process.env.VUE_APP_SERVER_URL}/categories/${this.formData.id}`, this.formData);
        } else {
          await axios.post(`${process.env.VUE_APP_SERVER_URL}/categories`, this.formData);
        }
        this.resetForm();
        this.fetchCategories();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    editCategory(category) {
      this.formData = { ...category };
      this.editing = true;
      this.showForm = true; // Show form when editing
    },
    async deleteCategory(id) {
      try {
        await axios.delete(`${process.env.VUE_APP_SERVER_URL}/categories/${id}`);
        this.fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    },
    resetForm() {
      this.formData = { name: '', MenuId: null };
      this.editing = false;
      this.showForm = false; // Hide form after submission
    },
    getMenuName(MenuId) {
      const menu = this.menus.find(menu => menu.id === MenuId);
      return menu ? menu.name : '';
    },
    toggleForm() {
      this.showForm = !this.showForm; // Toggle form visibility
      if (!this.showForm) {
        this.resetForm(); // Reset form when hiding
      }
    }
  }
}
</script>

<style scoped>
/* Add component-specific styles here */
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
