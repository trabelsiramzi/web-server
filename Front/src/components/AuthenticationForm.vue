<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
    <router-link to="/register">Register</router-link>
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
        // const user = users[0]; // Assuming the response contains an array of users and we're taking the first one
        localStorage.setItem('token', token); // Store token in localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
        // Redirect the user to the desired page
        this.$router.push('/dashboard');
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
</style>
