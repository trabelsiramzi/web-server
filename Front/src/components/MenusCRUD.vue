<template>
  <div>
    <h1>Menus CRUD Component</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Display menus in a bordered table -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Menu Name</th>
            <th scope="col">Description</th>
            <th scope="col" style="width: 150px;">Actions</th> <!-- Set width for Actions column -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="menu in menus" :key="menu.id">
            <td>{{ menu.name }}</td>
            <td>{{ menu.description }}</td>
            <td>
              <button class="btn btn-sm btn-primary me-2" @click="editMenu(menu)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteMenu(menu.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Form for adding or editing menu -->
      <form @submit.prevent="submitForm" v-show="showForm" class="form-container">
        <div class="mb-3">
          <input type="text" class="form-control" v-model="formData.name" placeholder="Menu Name">
        </div>
        <div class="mb-3">
          <textarea class="form-control" v-model="formData.description" placeholder="Menu Description"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-sm btn-success">{{ editing ? 'Update' : 'Add' }}</button>
        </div>
      </form>

      <!-- Add button for showing the form -->
      <div class="text-center mt-3">
        <button class="btn btn-sm btn-primary" @click="toggleForm">Add Menu</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MenusCRUD',
  data() {
    return {
      menus: [],
      formData: {
        name: '',
        description: ''
      },
      editing: false,
      loading: false,
      showForm: false // Added to toggle form visibility
    };
  },
  mounted() {
    this.fetchMenus();
  },
  methods: {
    async fetchMenus() {
      this.loading = true;
      try {
        const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/menus`);
        this.menus = response.data;
      } catch (error) {
        console.error('Error fetching menus:', error);
      } finally {
        this.loading = false;
      }
    },
    async submitForm() {
      try {
        if (this.editing) {
          await axios.put(`${process.env.VUE_APP_SERVER_URL}/menus/${this.formData.id}`, this.formData);
        } else {
          await axios.post(`${process.env.VUE_APP_SERVER_URL}/menus`, this.formData);
        }
        this.resetForm();
        this.fetchMenus();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    editMenu(menu) {
      this.formData = { ...menu };
      this.editing = true;
      this.showForm = true; // Show form when editing
    },
    async deleteMenu(id) {
      try {
        await axios.delete(`${process.env.VUE_APP_SERVER_URL}/menus/${id}`);
        this.fetchMenus();
      } catch (error) {
        console.error('Error deleting menu:', error);
      }
    },
    resetForm() {
      this.formData = { name: '', description: '' };
      this.editing = false;
      this.showForm = false; // Hide form after submission
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
<style src="@/assets/styles.css"></style>
