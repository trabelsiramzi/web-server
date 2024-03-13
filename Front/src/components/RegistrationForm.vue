<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="nom" placeholder="Nom">
      <input type="text" v-model="prenom" placeholder="Prénom">
      <input type="date" v-model="naissance" placeholder="Date of Birth">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <input type="text" v-model="telephone" placeholder="Telephone">
      <input type="text" v-model="photo" placeholder="Photo URL">
      <button type="submit">Register</button>
    </form>
    <router-link to="/login">Login</router-link>
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
