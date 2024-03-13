import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue'; 
import Login from '../components/AuthenticationForm.vue'; 
import Register from '../components/RegistrationForm.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
