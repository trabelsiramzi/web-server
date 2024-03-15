<template>
  <div>
    <h1>Items CRUD Component</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Display items in a bordered table -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category ID</th> <!-- Display Category ID -->
            <th scope="col" style="width: 150px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.CategoryId }}</td> <!-- Display Category ID -->
            <td>
              <button class="btn btn-sm btn-primary me-2" @click="editItem(item)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Form for adding or editing item -->
      <form @submit.prevent="submitForm" v-show="showForm" class="form-container">
        <div class="mb-3">
          <input type="text" class="form-control" v-model="formData.name" placeholder="Item Name">
        </div>
        <div class="mb-3">
          <input type="number" class="form-control" v-model="formData.price" placeholder="Item Price">
        </div>
        <div class="mb-3">
          <select class="form-select" v-model="formData.CategoryId" placeholder="Category ID">
            <option disabled value="">Select Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.id }}</option>
          </select>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-sm btn-success">{{ editing ? 'Update' : 'Add' }}</button>
        </div>
      </form>

      <!-- Add button for showing the form -->
      <div class="text-center mt-3">
        <button class="btn btn-sm btn-primary" @click="toggleForm">Add Item</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemsCRUD',
  data() {
    return {
      items: [],
      categories: [], // Added categories data
      formData: {
        name: '',
        price: 0,
        CategoryId: '' // Add CategoryId to formData
      },
      editing: false,
      loading: false,
      showForm: false
    };
  },
  mounted() {
    this.fetchItems();
    this.fetchCategories(); // Fetch categories data
  },
  methods: {
    async fetchItems() {
      this.loading = true;
      try {
        const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/items`);
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/categories`);
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async submitForm() {
      try {
        if (this.editing) {
          await axios.put(`${process.env.VUE_APP_SERVER_URL}/items/${this.formData.id}`, this.formData);
        } else {
          await axios.post(`${process.env.VUE_APP_SERVER_URL}/items`, this.formData);
        }
        this.resetForm();
        this.fetchItems();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    editItem(item) {
      this.formData = { ...item };
      this.editing = true;
      this.showForm = true;
    },
    async deleteItem(id) {
      try {
        await axios.delete(`${process.env.VUE_APP_SERVER_URL}/items/${id}`);
        this.fetchItems();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    resetForm() {
      this.formData = { name: '', price: 0, CategoryId: '' };
      this.editing = false;
      this.showForm = false;
    },
    toggleForm() {
      this.showForm = !this.showForm;
      if (!this.showForm) {
        this.resetForm();
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
<style src="@/assets/styles.css"></style>
