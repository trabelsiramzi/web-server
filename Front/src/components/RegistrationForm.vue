<template>
  <div class="container">
    <h1 class="mb-4">Register</h1>
    <form @submit.prevent="register" class="mb-4">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input type="text" v-model="nom" class="form-control" id="nom" placeholder="Enter your last name">
      </div>
      <div class="mb-3">
        <label for="prenom" class="form-label">Prénom</label>
        <input type="text" v-model="prenom" class="form-control" id="prenom" placeholder="Enter your first name">
      </div>
      <div class="mb-3">
        <label for="naissance" class="form-label">Date of Birth</label>
        <input type="date" v-model="naissance" class="form-control" id="naissance" placeholder="Enter your date of birth">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter your email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter your password">
      </div>
      <div class="mb-3">
        <label for="telephone" class="form-label">Telephone</label>
        <input type="text" v-model="telephone" class="form-control" id="telephone" placeholder="Enter your telephone number">
      </div>
      <div class="mb-3">
        <label for="photo" class="form-label">Photo URL</label>
        <input type="text" v-model="photo" class="form-control" id="photo" placeholder="Enter URL for your photo">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <router-link to="/login" class="btn btn-link">Login</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nom: '',
      prenom: '',
      naissance: '',
      email: '',
      password: '',
      telephone: '',
      photo: ''
    };
  },
  methods: {
    register() {
      axios.post(`${process.env.VUE_APP_SERVER_URL}/users`, {
        nom: this.nom,
        prenom: this.prenom,
        naissance: this.naissance,
        email: this.email,
        mot_de_passe: this.password,
        telephone: this.telephone,
        photo: this.photo
      })
      .then(response => {
        // Registration successful, redirect the user or show a success message
        console.log('Registration successful:', response.data);
        // Redirect the user to the login page
        this.$router.push('/login');
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles.css';
</style>
