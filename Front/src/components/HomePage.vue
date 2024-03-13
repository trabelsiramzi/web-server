<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
@import '@/assets/styles.css';
</style>
