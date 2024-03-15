<template>
  <div class="container">
    <h1 class="mb-4">Login</h1>
    <form @submit.prevent="login" class="mb-4">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter your email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter your password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <router-link to="/register" class="btn btn-link">Register</router-link>
    <p v-if="loginError" class="error-message">{{ loginError }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/auth/login`, {
          email: this.email,
          mot_de_passe: this.password
        });
        const { token, user } = response.data;
        localStorage.setItem('token', token); // Store token in localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
        const tokeni = localStorage.getItem('token');
        console.log("this is toAAken");

        if (tokeni) {
          console.log("this is token");
          axios.defaults.headers.common['Authorization'] = tokeni; // Set token without "Bearer" prefix
               }

        this.$router.push('/dashboard'); // Redirect the user to the desired page
      } catch (error) {
        console.error('Login failed:', error);
        this.loginError = 'Invalid email or password. Please try again.';
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
}
@import '@/assets/styles.css';
</style>
